import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import home from "~/styles/home.css?url";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando FontAwesomeIcon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone de seta
import 'bootstrap/dist/css/bootstrap.min.css';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: home },
    { rel: "shortcut icon", href: "/LogoAprovaQuiz.png", type: "image/x-icon" },
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
  ];
}

export default function Index() {

  // Código teste do axios
  useEffect(() => {
    axios.get("https://api.ipify.org?format=json").then(response => {
      console.log("\nseu ip é = " + response.data.ip);
    })
      .catch();
  }, [])

  return (
    <main>
      <Header />

      <div className="vh-100 d-flex flex-column justify-content-center align-items-center bannerHome">
        <div className="container h-100">
          <div className="row h-100">
            {/* Left Section */}
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h1 className="display-3 mb-4 textaoBanner text-light">Se prepare para os vestibulares com nossa ajuda!</h1>
              <p className="lead mb-4 text-light">
                Teste seus conhecimentos com nosso simulado!
              </p>
              <Link to="/Simulado" className="btn btn-lg btn-light botaoSimulado">
                Ir para o simulado
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px', color: '#3C1673' }} /> {/* Ícone da seta */}
              </Link>
            </div>

            {/* Right Section */}
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <img
                src="/AprovaCabeca.png"
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: '200px' }}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
