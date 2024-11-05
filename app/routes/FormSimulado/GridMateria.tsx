
export interface ImageInterface {

    name: string,
    img: {
        data: Buffer,
        contentType: string
    }

}

interface GridProps {
    materias: { nome: string; image: ImageInterface }[];
    setNumeroPagina: React.Dispatch<number>
    setTipoDado: React.Dispatch<string>
    numeroPagina: number
}

export function GridMateria(props: GridProps) {

    function setDados(numPag: number, tipoDado: string) {
        props.setNumeroPagina(numPag + 1)
        props.setTipoDado(tipoDado)

    }

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {props.materias.map((materia, index) => {
                    function image() {

                        if (materia.image != null) {

                            return `data:image/png;base64,${Buffer.from(materia.image.img.data).toString('base64')}`
                        } else {
                            return "/AprovaCabeca.png"
                        }
                    }

                    return (
                        <button key={index}
                            className="col buttonCard"
                            onClick={() => {
                                setDados(props.numeroPagina, materia.nome)
                            }}
                            tabIndex={index}
                        >
                            <div className="card custom-card">
                                <div
                                    className="card-background"
                                    style={{ backgroundImage: `url(${image()})` }}
                                >
                                    <div className="gradient-overlay">
                                        <h5 className="card-title">{materia.nome}</h5>
                                    </div>
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    );
}