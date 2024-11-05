import { useState } from "react";
import { dataCadernos } from "../_index/carousel";
import { Grid } from "./GridSimpleCard";
import { GridMateria, ImageInterface } from "./GridMateria";
import { axiosAprovaApi } from "~/configs/auth";
/*import { GridAssunto, ImageInterface } from "./GridAssunto";*/

export default function PageNavigation() {

    const [numeroPagina, setNumeroPagina] = useState(0)

    const [caderno, setCaderno] = useState("")
    const [materias, setMaterias] = useState<{ nome: string; image: ImageInterface; pertence: string }[]>([])
    /*const [assuntos, setAssunto] = useState<{ nome: string; image: ImageInterface; materia: string }[]>([])*/
    const [materiaEscolhida, setMateriaEscolhida] = useState("")
    /*const [assuntoEscolhido, setAssuntoEscolhido] = useState("")*/

    async function HandleAxios() {
        await axiosAprovaApi.get("/subjects/withImages")
            .then((r) => { setMaterias(r.data) })
            .catch(() => { throw new Error("Falha ao carregar Matérias") })

        /*await axiosAprovaApi.get("/topics/withImages")
        .then((r) => { setAssunto(r.data) })
        .catch(() => { throw new Error("Falha ao carregar Assuntos") })*/
    }

    if (numeroPagina == 0) {
        return (
            <>
                <p className="txtSimulado">De qual caderno você deseja fazer o simulado?</p>
                <Grid cards={dataCadernos} setNumeroPagina={setNumeroPagina} setTipoDado={setCaderno} numeroPagina={numeroPagina} />
            </>
        )
    }
    else if (numeroPagina == 1) {

        HandleAxios()

        const filteredMaterias = caderno != "Todas as Matérias" ?
            materias.filter((materia) => materia.pertence == caderno) :
            materias

        return (
            <>
                <p className="txtSimulado">De qual matéria você deseja fazer o simulado?</p>
                <GridMateria materias={filteredMaterias} setNumeroPagina={setNumeroPagina} setTipoDado={setMateriaEscolhida} numeroPagina={numeroPagina} />
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(numeroPagina - 1)}>Voltar</button >
            </>
        )
    }
/*
    else if (numeroPagina == 2) {

        HandleAxios()

        const filteredAssuntos = materiaEscolhida != "Todos os Assuntos" ?
            assuntos.filter((assunto) => assunto.materia == materiaEscolhida) :
            assuntos

        return (
            <>
                <p className="txtSimulado">Sobre qual assunto você quer fazer o Simulado?</p>
                <GridAssunto assuntos={filteredAssuntos} setNumeroPagina={setNumeroPagina} setTipoDado={setAssuntoEscolhido} numeroPagina={numeroPagina} />
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(numeroPagina - 1)}>Voltar</button >
            </>
        )
    }
*/
    else {
        return (
            <>
                <h1>Erro ao Carregar</h1>
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(0)}>Voltar</button >
            </>)
    }

}

