interface QuestaoProps {
  numeroQuestao: number,
  questao: {
    _id: string,
    enunciado: string,
    pergunta: string,
    alternativas: { textoAlt: string }[]
  } | undefined
}

export function Questao(props: QuestaoProps) {



  function handleRespMarcadas(index: number) {

    const respMarcada = {
      questao: props.questao?._id,
      respRegistrada: index,
      index: props.numeroQuestao
    }

    const respostasMarcadas = JSON.parse(localStorage.getItem("RespMarcadas") || "[]");

    respostasMarcadas[props.numeroQuestao] = respMarcada;

    localStorage.setItem("RespMarcadas", JSON.stringify(respostasMarcadas));

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
            <div className="opcao" key={index}>
              <button className="opcao-btn" onClick={() => { handleRespMarcadas(index) }}> {String.fromCharCode(65 + index)}</button>
              <span>{alternativa.textoAlt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
