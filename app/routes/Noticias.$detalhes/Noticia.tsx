import { NoticiaType } from "./route";


function Noticia(props: { noticia: NoticiaType | undefined }) {
  return (
    <div className="container container-noticia mt-5">
      <h2 className="titulo-noticia">{props.noticia?.titulo}</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="subtitulo-noticia">Resumo: {props.noticia?.resumo}</h4>
        <p className="data-noticia">Fonte: {props.noticia?.fonte}</p>
      </div>
      <p className="divider"></p>

      <div className="corpo-noticia">
        <h5>Conteúdo</h5>
        <p>{props.noticia?.conteudo}</p>
      </div>
    </div>
  );
}

export default Noticia;
