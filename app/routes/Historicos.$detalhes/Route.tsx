import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Historico from "./Historico";
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import historicoCss from '~/styles/historico.css?url';
import { useLoaderData } from "@remix-run/react";
import { useState, useCallback, useEffect } from "react";
import { axiosAprovaApi } from "~/configs/auth";


export function loader({
  params,
}: LoaderFunctionArgs) {

  const urlParams = new URLSearchParams(params.detalhes)

  if (urlParams.has('historico_id')) {
    return urlParams.get('historico_id')

  } else {
    throw new Error("Url inválida")
  }

}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: historicoCss }
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "Histórico" }];
};

export type HistoricoType = {
  _id: string,
  qtdDeAcertos: number,
  qtdDeErros: number,
  tipoSimulado: {
    materia: string,
    assunto: string
  },
  questoesFeitas: [{
    questao: string,
    respRegistrada: number,
    acerto: boolean
  }]
}

export default function HistoricosDetalhes() {
  const data = useLoaderData<typeof loader>();

  const [historico, setHistorico] = useState<HistoricoType>()

  const handleGet = useCallback(async () => {
    await axiosAprovaApi
      .get(`/historics/${data}`)
      .then((r) => {
        setHistorico(r.data);
        console.log(historico)
      })
      .catch((e) => {
        console.log(e)
      });
  }, [data]);

  useEffect(() => {
    handleGet()
  }, [handleGet])


  return (
    <div className="bg-light min-vh-100">
      <Header />
      <h1 className="h1Historico">{historico?.tipoSimulado.assunto}</h1>
      <main className="container py-5">
        <Historico historico={historico} />
      </main>
      <Footer />
    </div>
  );
}

