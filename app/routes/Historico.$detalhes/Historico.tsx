import QuestoesMarcadas from "./QuestoesMarcadas";
import { HistoricoType } from "./Route";


function Historico(props: { historico: HistoricoType | undefined }) {
  return (
    <div className="container container-historico mt-5">
      <h2 className="titulo-historico">{props.historico?.tipoSimulado.assunto}</h2>
      <p className="divider"></p>

      <div className="corpo-historico">
        <h1 className="h1Historico col-2 mx-auto">Questões</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="subtitulo-historico">Total de Acertos: {props.historico?.qtdDeAcertos}</h5>
        </div>

          <QuestoesMarcadas questoesMarcadas={undefined} />

      </div>
    </div>
  );
}

export default Historico;
