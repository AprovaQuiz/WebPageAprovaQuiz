import { useCallback, useEffect, useState } from 'react';
import { axiosAprovaApi } from '~/configs/auth';
import { Link } from '@remix-run/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

export interface HistoricoInterface {
    _id: string,
    qtdDeAcertos: number,
    qtdDeErros: number,
    tipoSimulado?: {
        materia?: { nome: string },
        assunto?: { nome: string }
    },
    questoesFeitas: [{
        questao: string,
        respRegistrada: number,
        acerto: boolean
    }]
    createdAt: Date
}


export default function Cards() {

    const [historicos, setHistoricos] = useState<HistoricoInterface[]>([])

    const handleGet = useCallback(async () => {
        await axiosAprovaApi
            .get("/historics/myHistorics")
            .then((r) => {
                setHistoricos((r.data).reverse());

            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])


    async function handleDelete(id: string) {
        return Swal.fire({
            title: 'Quer deletar?',
            showDenyButton: true,
            /* showCancelButton: true, */
            denyButtonText: `Cancelar`,
            confirmButtonText: 'Deletar',
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                await axiosAprovaApi.delete(`/historics/${id}`)
                    .then(() => {
                        Swal.fire('Deletado!', '', 'success').then(() => { window.location.reload() })
                    })
                    .catch(e => { console.log(e) })

            } else if (result.isDenied) {
                Swal.fire('Não deletado', '', 'info')
            }
        })

    }

    return (
        <div className="container ">
            <div className='d-flex align-items-center justify-content-center container'>
                <div className="card-container col-md-8">
                    {historicos.length >= 0 ?
                        historicos.map((historico) => {
                            const actualDate = new Date(historico.createdAt)
                            const materiaNome = historico.tipoSimulado?.materia?.nome || "Todas as Matéria"
                            const assuntoNome = historico.tipoSimulado?.materia?.nome || "Nenhum"

                            return (

                                <div key={historico._id} className="card m-4 mb-3">
                                    <div className="row g-0 h-25">
                                        <div className="col">
                                            <div className="card-body w-100 p-5">
                                                <div className="row-fluid">
                                                    <button className='float-end btn btn-link bg-none' type='button' onClick={() => handleDelete(historico._id)}>
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </button>

                                                    <h5 className="card-title">Simulado de {materiaNome}</h5>

                                                </div>
                                                <p className="card-text">Assunto {assuntoNome}</p>
                                                <p>Total de Questões {historico.questoesFeitas.length}</p>
                                                <p>
                                                    <span className='text-success'>Acertos {historico.qtdDeAcertos}</span>&nbsp;-&nbsp;
                                                    <span className='text-danger'>Erros {historico.qtdDeErros}</span>
                                                </p>
                                                <p className="card-text">

                                                    <small className="text-body-secondary">
                                                        {"Realizado em: " +
                                                            String(actualDate.getUTCDate()).padStart(2, "0") +
                                                            "/" +
                                                            String(actualDate.getMonth() + 1).padStart(2, "0") +
                                                            "/" +
                                                            actualDate.getFullYear() +
                                                            " - " +
                                                            String(actualDate.getHours()).padStart(2, "0") + ":" +
                                                            String(actualDate.getMinutes()).padStart(2, "0")
                                                        }
                                                    </small>

                                                </p>
                                                <Link to={`/Historicos/historico_id=${historico._id}`} className="btn w-50 text-light btn-primary">Ver mais</Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>


                            )
                        }) :
                        <h1>Não há históricos salvos</h1>
                    }
                </div>
            </div>
        </div>
    );
}