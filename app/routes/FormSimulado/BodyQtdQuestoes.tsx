import { useNavigate } from "@remix-run/react";
import { axiosAprovaApi } from "~/configs/auth";

interface BodyQtdQuestoesProps {
    materia: string,
    assunto: string
}

export function BodyQtdQuestoes(props: BodyQtdQuestoesProps) {
    const navigate = useNavigate();


    const quantidades = [15, 20, 25, 30]

    async function HandlGetQuestoes(qtd: number) {

        console.log(qtd)

        await axiosAprovaApi.get(`/questions/generateQuiz/${props.materia}/${props.assunto}/${qtd}`)
            .then((r) => {
                localStorage.setItem("questoesSimulado", JSON.stringify({
                    questoes: r.data,
                    nome_assunto: props.assunto,
                    nome_materia: props.materia
                }))

                navigate(`/Questoes/indexQuestion=0`)
            })
    }


    return (
        <div className="row justify-content-center">
            {
                quantidades.map((quantidade) => {
                    return (
                        <div className="col-6 col-md-3 mb-4 " key={quantidade}>
                            <button className="d-flex justify-content-center align-items-center card shadow-sm h-100 w-100"
                                onClick={() => HandlGetQuestoes(quantidade)}
                            >
                                <div className="card-body d-flex flex-column justify-content-center align-items-center card-opcao">
                                    <p className="card-text">até</p>
                                    <h2 className="card-number">{quantidade}</h2>
                                    <p className="card-text">questões</p>
                                </div>
                            </button>
                        </div>
                    )
                })
            }

        </div>
    );
}
