import { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Questao } from "~/components/Questao";

// Forma de importação de css
import questoesCss from '~/styles/questoes.css?url';


export async function loader({
  params,
}: LoaderFunctionArgs) {

  const urlParams = new URLSearchParams(params.questaoIndex)

  if (urlParams.has('indexQuestion')) {

    return urlParams.get('indexQuestion')

  } else {
    throw new Error("Url inválida")
  }

}

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

interface QuestaoInterface {
  _id: string,
  enunciado: string,
  pergunta: string,
  alternativas: { textoAlt: string }[]
}



export default function Simulado() {
  const dataIndex = useLoaderData<typeof loader>();

  const [questoes, setQuestoes] = useState<{ questoes: QuestaoInterface[] } | undefined>(undefined);

  function questaoJson(): { questoes: QuestaoInterface[] } | undefined {
    if (typeof window !== "undefined" && localStorage.getItem("questoesSimulado")) {
      return JSON.parse(localStorage.getItem("questoesSimulado") || "");
    }
    return undefined;
  }

  useEffect(() => {
    const data = questaoJson();
    setQuestoes(data);
  }, []);


  const questaoCorrente: QuestaoInterface | undefined = questoes?.questoes[Number(dataIndex)]


  return (
    <main>
      <Header />
      <div className="body">
        <Questao questao={questaoCorrente} numeroQuestao={Number(dataIndex)} />

        <div className="text-center mt-4">
          <button className="btn-responder">Responder</button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
