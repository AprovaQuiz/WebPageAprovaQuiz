import { QuestaoInterface } from "./route";

interface QuestoesMarcadasProps {
  questao: QuestaoInterface,
  acerto: boolean,
  numeroQuestao: number,
  respRegistrada: number
}


function QuestoesMarcadas(props: QuestoesMarcadasProps) {
  function foiMarcada(indexOpcao: number) {

    if (props.questao.alternativaCorreta == indexOpcao)
      return { class: "opcao-certa", texto: " - Resposta Certa" }


    else if (props.respRegistrada == indexOpcao)
      return { class: "opcao-marcada", texto: " - Resposta escolhida" }

  }


  return (
    <div className="container-fluid questao-bg">

      <h1 className="text-center questao-titulo">Questão {props.numeroQuestao + 1}</h1>

      <p className="questao-texto">{props.questao.enunciado}</p>

      <p>
        {props.questao.pergunta}
      </p>

      <div className="opcoes">
        {props.questao.alternativas.map((alternativa, index) => (

          <div className={`opcao`} key={index}>
            <button className={`opcao-btn ${foiMarcada(index)?.class}`}>
              {String.fromCharCode(65 + index)}
            </button>
            <span>{alternativa.textoAlt}{foiMarcada(index)?.texto}</span>
          </div>

        ))}
      </div>

    </div>
  );
}

export default QuestoesMarcadas;
