import React from "react";

interface Paragrafo {
  secao: string;
  conteudo: string;
}

interface NoticiaProps {
  titulo: string;
  subtitulo: string;
  data: string;
  corpo: Paragrafo[];
}

const Noticia: React.FC<NoticiaProps> = ({ titulo, subtitulo, data, corpo }) => {
  return (
    <div className="container container-noticia mt-5">
      <h2 className="titulo-noticia">{titulo}</h2>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="subtitulo-noticia">{subtitulo}</h4>
        <p className="data-noticia">{data}</p>
      </div>
      <p className="divider"></p>

      <div className="corpo-noticia">
        {corpo.map((paragrafo, index) => (
          <div key={index}>
            <h5>{paragrafo.secao}</h5>
            <p>{paragrafo.conteudo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Noticia;
