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
  const cards = [
    {
      title: 'Card 1',
      text: 'This is the first card.',
      imageUrl: 'https://via.placeholder.com/250x150',
      lastUpdated: 'Last updated 1 min ago',
    },
    {
      title: 'Card 2',
      text: 'This is the second card.',
      imageUrl: 'https://via.placeholder.com/250x150',
      lastUpdated: 'Last updated 5 mins ago',
    }
  ];

  return (
    <main>
      <Header />
      <div>
        <h1 className="h1Noticia">Noticias - Enem</h1>
        <Cards cards={cards} />
      </div>
      <Footer />
    </main>

  );
}