import { useState } from "react";
import { Grid } from "~/components/GridSimpleCard";
import { dataCadernos } from "../_index/carousel";

export default function PageNavigation() {

    const [numeroPagina, setNumeroPagina] = useState(0)

    const [caderno, setCaderno] = useState("")

    switch (numeroPagina) {
        case 0:
            return (
                <>
                    <p className="txtSimulado">De qual caderno você deseja fazer o simulado?</p>
                    <Grid cards={dataCadernos} setNumeroPagina={setNumeroPagina} setTipoDado={setCaderno} />
                </>
            )
        case 1:
            return (
                <>
                    <p className="txtSimulado">De qual caderno você deseja fazer o simulado?</p>
                    <Grid cards={dataCadernos} setNumeroPagina={setNumeroPagina} setTipoDado={setCaderno} />
                </>
            )

        default:
            return (
                <h1>Erro ao Carregar</h1>
            )

    }

}