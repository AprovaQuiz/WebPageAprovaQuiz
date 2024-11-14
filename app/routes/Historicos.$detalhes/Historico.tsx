import QuestoesMarcadas from "./QuestoesMarcadas";
import { HistoricoType } from "./Route";
import { Tab, Row, Col, Nav } from "react-bootstrap";

export default function Historico(props: { historico: HistoricoType | undefined, assunto: string }) {

  function HeaderNavigation() {
    if (props.historico?.questoesFeitas) {
      return props.historico.questoesFeitas.map((questao, index) => (
        <Nav.Item key={index}>
          <Nav.Link className="text-black" eventKey={String(index + 1)}>Questão {index + 1}&nbsp;-&nbsp;
            {questao.acerto ? <span className="text-success">Acertou</span> : <span className="text-danger">Errou</span>}
          </Nav.Link>
        </Nav.Item>
      ));
    } else {
      return <></>;
    }
  }
  return (
    <div className="container container-historico mt-5">
      <h2 className="titulo-historico">Assunto: {props.assunto}</h2>
      <p className="divider"></p>

      <div className="corpo-historico">
        <h1 className="h1Historico col-2 mx-auto">Questões</h1>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="subtitulo-historico">Total de Acertos: {props.historico?.qtdDeAcertos}</h5>
        </div>
        <div className="my-5">
          <h2>Lista de Questões</h2>
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column text-black my-4">
                  <HeaderNavigation />
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {props.historico?.questoesFeitas.map((questao, index) => {
                    return (
                      <Tab.Pane key={questao._id} eventKey={String(index + 1)}>
                        <QuestoesMarcadas acerto={questao.acerto} numeroQuestao={index} questao={questao.questao} respRegistrada={questao.respRegistrada} />
                      </Tab.Pane>)
                  })}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>



      </div>
    </div>
  );
}
