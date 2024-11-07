import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Card, ListGroup } from "react-bootstrap";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import { useState } from 'react';

import grid from '~/styles/simpleCard.css?url';
import historico from '~/styles/historico.css?url';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: historico },
        { rel: "stylesheet", href: grid }

    ];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Histórico" },
    ];
}

export default function Histórico() {

    return (
        <main>
            <Header />
            <h1 className="h1Historico">Histórico</h1>
            <p className="txtHistorico">Histórico de seus simulados passados</p>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">



                    <Card className="cardHistorico" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/AprovaCabeca.png" />
                        <Card.Body>
                            <Card.Title>Simulado de História</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Assunto: Ditadura Militar</ListGroup.Item>
                            <ListGroup.Item>11/09/2001</ListGroup.Item>
                            <ListGroup.Item>Total de Questões: 15</ListGroup.Item>
                            <ListGroup.Item>Total de Acertos: 1</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="cardHistorico" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/AprovaCabeca.png" />
                        <Card.Body>
                            <Card.Title>Simulado de História</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Assunto: Ditadura Militar</ListGroup.Item>
                            <ListGroup.Item>11/09/2001</ListGroup.Item>
                            <ListGroup.Item>Total de Questões: 15</ListGroup.Item>
                            <ListGroup.Item>Total de Acertos: 1</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card className="cardHistorico" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="/AprovaCabeca.png" />
                        <Card.Body>
                            <Card.Title>Simulado de História</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Assunto: Ditadura Militar</ListGroup.Item>
                            <ListGroup.Item>11/09/2001</ListGroup.Item>
                            <ListGroup.Item>Total de Questões: 15</ListGroup.Item>
                            <ListGroup.Item>Total de Acertos: 1</ListGroup.Item>
                        </ListGroup>
                    </Card>

                </div>
            </div>
            <Footer />
        </main>

    );
}