import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Cards from "./card";

import historico from '~/styles/historico.css?url';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: historico },


    ];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Histórico" },
    ];
}

export default function Histórico() {

    return (
        <main>
            <Header />
            <div className="container-fluid">
                <h1 className="h1Historico">Histórico</h1>
                <p className="txtHistorico">Histórico de seus simulados passados</p>
            </div>

            <div className="container-fluid">


                <Cards />


            </div>
            <Footer />
        </main>

    );
}