import { MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Grid } from "~/components/GridSimpleCard";

import '../../styles/noticias.css';

export const meta: MetaFunction = () => {
  return [
    { title: "Notícias" },
  ];
}

export default function Notícias() {
  const cards = [
    {
      title: "ENEM",
      imgSrc: "https://via.placeholder.com/250x150", 
    },
    {
      title: "SISU",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      title: "ProUni",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      title: "Fuvest",
      imgSrc: "https://via.placeholder.com/250x150",
    },
  ];

  return (
    <main>
      <Header />
      <div>
          <h1 className="h1Noticia">Noticias</h1>
          
          <Grid cards={cards} />
        </div>  
      <Footer />
    </main>

  );
}