import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Questao } from "~/components/Questao";


// Forma de importação de css
import questoesCss from '~/styles/questoes.css?url';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: questoesCss }
  ];
};



export const meta: MetaFunction = () => {
  return [
    { title: "Questões" },
  ];
}

const questoes = [
  {
    id: 1,
    pergunta: "O termo neopentecostalismo foi aplicado pela primeira vez na década de 1970, para as igrejas que adotaram muitas das doutrinas e práticas das igrejas pentecostais e do movimento carismático, mas não se tornaram formalmente alinhadas com algum deles. No Brasil, temos inúmeras igrejas com representação no movimento neopentecostal.",
    elencar: [
      "Igreja dos Santos dos Últimos Dias",
      "Igreja Universal do Reino de Deus",
      "Igreja Internacional da Graça de Deus",
      "Igreja Renascer em Cristo",
      "Igreja Mundial do Poder de Deus"
    ],
    instrucoes: "Assinale a alternativa que indica todas as afirmativas corretas.",
    alternativas: [
      { id: "A", texto: "São corretas apenas as afirmativas 1, 2 e 3." },
      { id: "B", texto: "São corretas apenas as afirmativas 2, 3 e 4." },
      { id: "C", texto: "São corretas apenas as afirmativas 3, 4 e 5." },
      { id: "D", texto: "São corretas apenas as afirmativas 1, 2, 3 e 4." },
      { id: "F", texto: "São corretas apenas as afirmativas 2, 3, 4 e 5." }
    ]
  }
];

export default function Simulado() {
  const questao = questoes[0];

  return (
    <main>
      <Header />
      <div className="body">
        <Questao questao={questao} />

        <div className="text-center mt-4">
          <button className="btn-responder">Responder</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
