import { useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";



type respMarcada = {
  questao: string, respRegistrada: number, index: number
}

export function Questao(props: QuestaoProps) {
  const navigate = useNavigate();

  const [respostasMarcadas, setRespostasMarcadas] = useState<
    respMarcada[] | undefined
  >([])

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("RespMarcadas"))
      setRespostasMarcadas(JSON.parse(localStorage.getItem("RespMarcadas") || "[]"))
  }, [])


  function foiMarcada(indexOpcao: number) {

    if (respostasMarcadas && typeof respostasMarcadas[props.numeroQuestao] !== "undefined" && respostasMarcadas[props.numeroQuestao] != null)
      if (respostasMarcadas[props.numeroQuestao].respRegistrada == indexOpcao)
        return { class: "opcao-marcada", texto: " - Resposta escolhida" }

  }


  return (
    <div className="container-fluid py-5 questao-bg">
      <div className="container">
        <h1 className="text-center mb-4 questao-titulo">Questão {props.numeroQuestao + 1}</h1>

        <p className="questao-texto">{props.questao?.enunciado}</p>

        <p>
          {props.questao?.enunciado}
        </p>

        <div className="opcoes">
          {props.questao?.alternativas.map((alternativa, index) => (

            <div className={`opcao`} key={index}>
              <button className={`opcao-btn ${foiMarcada(index)?.class}`}>
                {String.fromCharCode(65 + index)}
              </button>
              <span>{alternativa.textoAlt}{foiMarcada(index)?.texto}</span>
            </div>

          ))}
        </div>
      </div>
    </div>
  );
}
