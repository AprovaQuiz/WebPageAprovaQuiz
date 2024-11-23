import { useCallback, useEffect, useState } from "react";
import { dataCadernos } from "../_index/carousel";
import { Grid } from "./gridSimpleCard";
import { GridMateria, ImageInterface } from "./gridMateria";
import { axiosAprovaApi } from "~/configs/auth";
import { GridAssunto } from "./gridAssunto";
import { BodyQtdQuestoes } from "./bodyQtdQuestoes";

export default function PageNavigation() {

    const [numeroPagina, setNumeroPagina] = useState(0)

    const [caderno, setCaderno] = useState("")
    const [materias, setMaterias] = useState<{ _id: string; nome: string; image: ImageInterface; pertence: string }[]>([])
    const [assuntos, setAssunto] = useState<{ nome: string; image?: ImageInterface }[]>()
    const [materiaEscolhida, setMateriaEscolhida] = useState("")
    const [assuntoEscolhido, setAssuntoEscolhido] = useState("")

    const handleGet = useCallback(async () => {
        await axiosAprovaApi
            .get("/subjects/withImages")
            .then((r) => {
                setMaterias(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])


    const handleGetTopics = useCallback(async (materia: string) => {
        await axiosAprovaApi
            .get(`/subjects/topics/${materia}`)
            .then((r) => {
                if (materia != "Nenhuma")
                    setAssunto([
                        { nome: "Nenhum", image: undefined },
                        ...r.data.topics
                    ]);
                else
                    setAssunto([
                        { nome: "Nenhum", image: undefined },
                        ...r.data
                    ])
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        if (numeroPagina == 2)
            handleGetTopics(materiaEscolhida)
    }, [handleGetTopics, materiaEscolhida, numeroPagina])


    function filteredMaterias(cadernoFunc: string) {
        if (cadernoFunc != "Todas as Matérias") {
            return materias.filter((materia) => materia.pertence == cadernoFunc)
        } else {
            setNumeroPagina(2)
            setMateriaEscolhida("Nenhuma")
            return materias
        }

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
        return (
            <div>
                <p className="txtSimulado">De qual matéria você deseja fazer o simulado?</p>
                <GridMateria materias={filteredMaterias(caderno)} setNumeroPagina={setNumeroPagina} setTipoDado={setMateriaEscolhida} numeroPagina={numeroPagina} />
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(numeroPagina - 1)}>Voltar</button >
            </div>
        )
    }

    else if (numeroPagina == 2) {

        return (
            <div>
                <p className="txtSimulado">Sobre qual assunto você quer fazer o Simulado?</p>
                <GridAssunto assuntos={assuntos} setNumeroPagina={setNumeroPagina} setTipoDado={setAssuntoEscolhido} numeroPagina={numeroPagina} />
                <button type="button" className="btn float-left m-5" onClick={() => {
                    if (materiaEscolhida != "Nenhuma")
                        setNumeroPagina(numeroPagina - 1)
                    else
                        setNumeroPagina(0)
                }}>Voltar</button >
            </div>
        )
    }

    else if (numeroPagina == 3) {
        return (
            <div>
                <p className="txtSimulado">Quantas questões você quer em seu simulado?</p>
                <div className="container-fluid">
                    <BodyQtdQuestoes assunto={assuntoEscolhido} materia={materiaEscolhida} />
                </div>
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(numeroPagina - 1)}>Voltar</button >
            </div>
        )
    }

    else {
        return (
            <>
                <h1>Erro ao Carregar</h1>
                <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(0)}>Voltar</button >
            </>)
    }

}

