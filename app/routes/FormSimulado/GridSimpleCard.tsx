
interface GridProps {
  cards: { title: string; imgSrc: string }[];
  setNumeroPagina: React.Dispatch<number>
  setTipoDado: React.Dispatch<string>
  numeroPagina: number
}

export function Grid(props: GridProps) {

  function setDados(numPag: number, tipoDado: string) {
    props.setNumeroPagina(numPag + 1)
    props.setTipoDado(tipoDado)

  }

  return (
    <div className="container text-center">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {props.cards.map((card, index) => (
          <button key={index}
            className="col buttonCard"
            onClick={() => {
              setDados(props.numeroPagina, card.title)
            }}
            tabIndex={index}
          >
            <div className="card custom-card">
              <div
                className="card-background"
                style={{ backgroundImage: `url(${card.imgSrc})` }}
              >
                <div className="gradient-overlay">
                  <h5 className="card-title">{card.title}</h5>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}