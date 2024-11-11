import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import Cards from "./card";

import { useState } from 'react';

import grid from '~/styles/simpleCard.css?url';
import historico from '~/styles/historico.css?url';

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: historico },
        { rel: "stylesheet", href: grid }

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
            <h1 className="h1Historico">Histórico</h1>
            <p className="txtHistorico">Histórico de seus simulados passados</p>

            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

                    <Cards />
                    
                </div>
            </div>
            <Footer />
        </main>

    );
}