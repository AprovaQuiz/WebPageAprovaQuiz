import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Noticia from "./Noticia";
import { LinksFunction, LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import noticias from '~/styles/noticias.css?url';
import { useLoaderData } from "@remix-run/react";
import { useState, useCallback, useEffect } from "react";
import { axiosAprovaApi } from "~/configs/auth";


export function loader({
  params,
}: LoaderFunctionArgs) {

  const urlParams = new URLSearchParams(params.detalhes)

  if (urlParams.has('noticia_id')) {
    return urlParams.get('noticia_id')

  } else {
    throw new Error("Url inválida")
  }

}

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: noticias }
  ];
};

export const meta: MetaFunction = () => {
  return [{ title: "Notícia" }];
};

export type NoticiaType = {
  _id: string,
  titulo: string,
  linkFonte: string,
  linkImagem: string,
  fonte: string,
  resumo: string,
  conteudo: string,
}

export default function NoticiasDetalhes() {
  const data = useLoaderData<typeof loader>();

  const [noticia, setNoticia] = useState<NoticiaType>()

  const handleGet = useCallback(async () => {
    await axiosAprovaApi
      .get(`/news/${data}`)
      .then((r) => {
        setNoticia(r.data);
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
      <h1 className="h1Noticia">{noticia?.titulo}</h1>
      <main className="container py-5">
        <Noticia noticia={noticia} />
      </main>
      <Footer />
    </div>
  );
}

