export function Questao({ questao }: { questao: any }) {
  return (
    <div className="container-fluid py-5 questao-bg">
      <div className="container">
        <h1 className="text-center mb-4 questao-titulo">Questão {questao.id}</h1>

        <p className="questao-texto">{questao.pergunta}</p>

        <p>
          <strong>Entre elas podemos elencar:</strong>
          <ol>
            {questao.elencar.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </p>

        <p><strong>{questao.instrucoes}</strong></p>

        <div className="opcoes">
          {questao.alternativas.map((alternativa: any) => (
            <div className="opcao" key={alternativa.id}>
              <button className="opcao-btn">{alternativa.id}</button>
              <span>{alternativa.texto}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
