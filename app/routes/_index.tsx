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

      {/* Nova seção: Cadernos */}
      <div className="container my-5">
        <h2 className="text-center" style={{ fontFamily: 'League Spartan', fontWeight: 'bold', fontSize: '55px', color: '#3C1673' }}>
          Cadernos
        </h2>
        <p className="text-center" style={{ fontSize: '25px', color: '#4E596B' }}>
          Escolha um caderno e comece seus estudos agora mesmo!
        </p>

        <div id="cadernosCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {/* Card Ciências Humanas */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card border-0">
                    <img src="placeholder_image.png" alt="Ciências Humanas" className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Simulado de Ciências Humanas</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Simulado apenas de matérias de Ciências Humanas.</h6>
                    </div>
                  </div>
                </div>
                {/* Card Matemática */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0">
                    <img src="placeholder_image.png" alt="Matemática" className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Simulado de Matemática e suas tecnologias</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Simulado apenas de matérias de Matemática e suas tecnologias.</h6>
                    </div>
                  </div>
                </div>
                {/* Card Ciências da Natureza */}
                <div className="col-md-4 mb-4">
                  <div className="card border-0">
                    <img src="placeholder_image.png" alt="Ciências da Natureza" className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Simulado de Ciências da Natureza</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Simulado apenas de matérias de Ciências da Natureza.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Linguagens e suas Tecnologias */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <div className="card border-0">
                    <img src="placeholder_image.png" alt="Linguagens e suas Tecnologias" className="card-img-top" />
                    <div className="card-body text-center">
                      <h5 className="card-title">Simulado de Linguagens e suas tecnologias</h5>
                      <h6 className="card-subtitle mb-2 text-muted">Simulados apenas de matérias de Linguagens e suas tecnologias.</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Controles do Carrossel */}
          <button className="carousel-control-prev" type="button" data-bs-target="#cadernosCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#cadernosCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Próximo</span>
          </button>
        </div>
      </div>

      {/* Nova Seção: Notícias */}
      <div className="container my-5">
        <h2 className="text-center" style={{ fontFamily: 'League Spartan', fontWeight: 'bold', fontSize: '55px', color: '#3C1673' }}>
          Notícias
        </h2>

        <div className="row">
          {/* Card ENEM */}
          <div className="col-md-4 mb-4">
            <div className="card card-news text-white">
              <img src="/enem.jpg" alt="ENEM" className="card-img-top" />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">ENEM</h5>
              </div>
            </div>
          </div>
          {/* Card SiSU */}
          <div className="col-md-4 mb-4">
            <div className="card card-news text-white">
              <img src="/sisu.jpg" alt="SiSU" className="card-img-top" />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">SiSU</h5>
              </div>
            </div>
          </div>
          {/* Card ProUni */}
          <div className="col-md-4 mb-4">
            <div className="card card-news text-white">
              <img src="/prouni.jpg" alt="ProUni" className="card-img-top" />
              <div className="card-img-overlay d-flex align-items-end">
                <h5 className="card-title">ProUni</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
