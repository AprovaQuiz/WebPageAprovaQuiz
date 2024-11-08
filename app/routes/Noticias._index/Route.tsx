import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Cards from "./card";

import noticias from '~/styles/noticias.css?url';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: noticias }
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Notícias" },
  ];
}

export default function Notícias() {

  return (
    <main>
      <Header />
      <div className="container-fluid">
        <h1 className="h1Noticia">Noticias</h1>
        <Cards />
      </div>
      <Footer />
    </main>

  );
}