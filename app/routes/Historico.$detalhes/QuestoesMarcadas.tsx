import { HistoricoType } from "./Route";


function QuestoesMarcadas(props: { questoesMarcadas: HistoricoType | undefined }) {
  return (

    <div className="container-fluid py-5 questao-bg">
    <div className="container">
      <h1 className="text-center mb-4 questao-titulo">Questão {/* {props.numeroQuestao + 1} */}</h1>

      <p className="questao-texto">{/* {props.questao?.enunciado} */}</p>

      <p>
        {/* {props.questao?.enunciado} */}
      </p>

      <div className="opcoes">
        {/* {props.questao?.alternativas.map((alternativa, index) => (

          <div className={`opcao`} key={index}>
            <button className={`opcao-btn ${foiMarcada(index)?.class}`} onClick={() => {
              HandleRespMarcadas(index)
            }}>
              {String.fromCharCode(65 + index)}
            </button>
            <span>{alternativa.textoAlt}{foiMarcada(index)?.texto}</span>
          </div>

        ))} */}
      </div>
    </div>
  </div>
    
  );
}

export default QuestoesMarcadas;
