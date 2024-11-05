import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

import simulado from '~/styles/simulado.css?url';
import grid from '~/styles/simpleCard.css?url';
import PageNavigation from "./PageNavigation";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: simulado },
        { rel: "stylesheet", href: grid }
    ];
};

export const meta: MetaFunction = () => {
    return [
        { title: "Formulário Simulado" },
    ];
}

export default function Simulado() {

    return (
        <main>
            <Header />
            <h1 className="h1Simulado">Simulados</h1>
            <PageNavigation />
            <Footer />
        </main>

    );
}