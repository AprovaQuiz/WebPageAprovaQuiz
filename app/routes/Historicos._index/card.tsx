import { useCallback, useEffect, useState } from 'react';
import { axiosAprovaApi } from '~/configs/auth';
import { Link } from '@remix-run/react';
import { Card, ListGroup } from 'react-bootstrap';

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
                setHistoricos(r.data);

            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])


    return (
        <div className="container ">
            <div className='d-flex align-items-center justify-content-center container'>
                <div className="card-container col-md-8">
                    {historicos.length >= 0 ?
                        historicos.map((historico) => {
                            const actualDate = new Date(historico.createdAt)
                            const materiaNome = historico.tipoSimulado?.materia?.nome || "Nenhuma"
                            const assuntoNome = historico.tipoSimulado?.materia?.nome || "Nenhum"

                            return (




                                <div key={historico._id} className="card m-4 mb-3">
                                    <div className="row g-0 h-25">
                                        <div className="col-sm-12 col-md-4">
                                            <img src={"https://via.placeholder.com/300x300"} style={{ width: "300px", height: "270px" }}
                                                className="img-fluid rounded-start" alt={"imagem padrão"} />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Simulado de {materiaNome}</h5>
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