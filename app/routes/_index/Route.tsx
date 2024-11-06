import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import home from "~/styles/home.css?url";
import { useCallback, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando FontAwesomeIcon
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Importando o ícone de seta
import 'bootstrap/dist/css/bootstrap.min.css';
import { axiosAprovaApi } from "~/configs/auth";
import { Carousel } from "./carousel";


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

interface NoticiasInterface {
  id: string,
  titulo: string,
  linkImagem: string,
}

export default function Index() {

  const [noticias, setNoticias] = useState<NoticiasInterface[]>([])

  const handleGet = useCallback(async () => {
    await axiosAprovaApi
      .get("/news")
      .then((r) => {
        setNoticias(r.data);
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  useEffect(() => {
    handleGet()
  }, [handleGet])

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
              <Link to="/FormSimulado" className="btn btn-lg btn-light botaoSimulado">
                Ir para o simulado
                <FontAwesomeIcon icon={faArrowRight} className="icon" style={{ marginLeft: '8px', color: '#3C1673' }} /> {/* Ícone da seta */}
              </Link>
            </div>

            {/* Right Section */}
            <div className="col-md-6 d-flex justify-content-center align-items-center">
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

        <div className="slide" >

          <Carousel />

        </div>
      </div>



      {/* Nova Seção: Notícias */}
      <div className="container my-5">
        <h2 className="text-center" style={{ fontFamily: 'League Spartan', fontWeight: 'bold', fontSize: '55px', color: '#3C1673' }}>
          Notícias
        </h2>

        <div className="row">

          {
            noticias.slice(-3).reverse().map((noticia) => {
              return (
                <Link to='#' key={noticia.id} className="col-md-4 mb-4">

                  <div className="card card-news text-white">
                    <img src={noticia.linkImagem} alt="ENEM" className="card-img-top" />
                    <div className="card-img-overlay d-flex align-items-end">
                      <h5 className="card-title">{noticia.titulo}</h5>
                    </div>
                  </div>

                </Link>
              );
            })
          }



        </div>
      </div>

      <Footer />
    </main>
  );
}
