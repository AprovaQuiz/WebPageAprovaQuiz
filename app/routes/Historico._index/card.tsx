import React, { useCallback, useEffect, useState } from 'react';
import { axiosAprovaApi } from '~/configs/auth';
import { Link } from '@remix-run/react';
import { Card, ListGroup } from 'react-bootstrap';

export interface HistoricoInterface {
    _id: string,
  qtdDeAcertos: number,
  qtdDeErros: number,
  tipoSimulado: {
    materia: string,
    assunto: string
  },
  questoesFeitas: [{
    questao: string,
    respRegistrada: number,
    acerto: boolean
  }]
}


const Cards: React.FC = () => {

    const [historicos, setHistoricos] = useState<HistoricoInterface[]>([])

    const handleGet = useCallback(async () => {
        await axiosAprovaApi
            .get("/historic")
            .then((r) => {
                setHistoricos((r.data).reverse());
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className="card-container col-6">
                {historicos.map((historico, index) => {

                    return (

                        <Link to={`/Historico/historico_id=${historico._id}`} key={historico._id} className="col-md-4 mb-4">

                            <Card className="cardHistorico" style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="/AprovaCabeca.png" />
                                <Card.Body>
                                    <Card.Title>Simulado de {historico.tipoSimulado.materia}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroup.Item>Assunto: {historico.tipoSimulado.assunto}</ListGroup.Item>
                                    <ListGroup.Item>11/09/2001</ListGroup.Item>
                                    <ListGroup.Item>Total de Acertos: {historico.qtdDeAcertos}</ListGroup.Item>
                                </ListGroup>
                            </Card>

                        </Link>

                    )
                })}
            </div>
        </div>
    );
};

export default Cards;