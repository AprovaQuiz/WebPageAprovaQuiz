import { MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Grid } from "~/components/GridSimpleCard";

import '../../styles/simulado.css';

export const meta: MetaFunction = () => {
  return [
    { title: "Simulado" },
  ];
}

export default function Simulado() {
  const cards = [
    {
      title: "Ciências Humanas",
      imgSrc: "https://via.placeholder.com/250x150", 
    },
    {
      title: "Matemática e suas Tecnologias",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      title: "Ciências Exatas",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      title: "Linguagens e suas tecnologias",
      imgSrc: "https://via.placeholder.com/250x150",
    },
    {
      title: "Aleatório",
      imgSrc: "https://via.placeholder.com/250x150",
    },
  ];

  return (
    <main>
      <Header />
      <div>
          <h1 className="h1Simulado">Simulados</h1>
          <text className="txtSimulado">De qual caderno você deseja fazer o simulado?</text>
          <Grid cards={cards} />
        </div>  
      <Footer />
    </main>

  );
}