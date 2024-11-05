import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import simulado from '~/styles/simulado.css?url';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: simulado }
  ];
};


export const meta: MetaFunction = () => {
  return [
    { title: "Simulado" },
  ];
}

export default function Simulado() {

  return (
    <main>
      <Header />
      <div className="body">
        <div>
          <h1 className="h1Simulado">Simulados</h1>
          <p className="txtSimulado">Quantas questões você quer em seu simulado?</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center card-opcao">
                <p className="card-text">até</p>
                <h2 className="card-number">15</h2>
                <p className="card-text">questões</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center card-opcao">
                <p className="card-text">até</p>
                <h2 className="card-number">20</h2>
                <p className="card-text">questões</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center card-opcao">
                <p className="card-text">até</p>
                <h2 className="card-number">25</h2>
                <p className="card-text">questões</p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-4">
            <div className="card shadow-sm h-100">
              <div className="card-body d-flex flex-column justify-content-center align-items-center card-opcao">
                <p className="card-text">até</p>
                <h2 className="card-number">30</h2>
                <p className="card-text">questões</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
