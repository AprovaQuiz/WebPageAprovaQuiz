import { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

// Forma de importação de css
import questoesCss from '~/styles/questoes.css?url';
import { Questao } from "./questao";


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
  const navigate = useNavigate();

  const [questoes, setQuestoes] = useState<{ questoes: QuestaoInterface[] } | undefined>(undefined);

  function questaoJson(): { questoes: QuestaoInterface[] } {
    if (typeof window !== "undefined" && localStorage.getItem("questoesSimulado")) {
      return JSON.parse(localStorage.getItem("questoesSimulado") || "");
    }
    throw new Error("Url inválida");
  }

  useEffect(() => {
    const data = questaoJson();
    setQuestoes(data);
  }, []);


  const questaoCorrente: QuestaoInterface | undefined = questoes?.questoes[Number(dataIndex)]


  function BotaoVoltar() {
    if (Number(dataIndex) == 0)
      return (
        <></>
      )
    else if (Number(dataIndex) != 0)
      return (
        <button className="btn-responder" onClick={() => {
          navigate(`/Questoes/indexQuestion=${Number(dataIndex) - 1}`)
        }}>Voltar Para Questão Anterior</button>
      )
  }


  return (
    <main>
      <Header />
      <div className="body">
        <Questao
          questao={questaoCorrente}
          numeroQuestao={Number(dataIndex)}
          tamanhoQuestoes={questoes ? questoes.questoes.length : 0}
        />

        <div className="text-center mt-4">
          <BotaoVoltar />
        </div>
      </div>
      <Footer />
    </main>
  );
}
