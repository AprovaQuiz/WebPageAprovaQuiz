import { useCallback, useEffect, useState } from "react";
import { dataCadernos } from "../_index/carousel";
import { Grid } from "./GridSimpleCard";
import { GridMateria, ImageInterface } from "./GridHistorico";
import { axiosAprovaApi } from "~/configs/auth";

export default function PageNavigation() {

    const [numeroPagina, setNumeroPagina] = useState(0)

    const [historicos, setHistoricos] = useState<{ _id: string; materia: string; assunto: string; image: ImageInterface; qtdDeAcertos: number; user: string; }[]>([])
    const [historicoEscolhido, setHistoricoEscolhido] = useState("")

    const handleGet = useCallback(async () => {
        await axiosAprovaApi
            .get("/subjects/withImages")
            .then((r) => {
                setHistoricos(r.data);
            })
            .catch((e) => {
                console.log(e)
            });
    }, []);

    useEffect(() => {
        handleGet()
    }, [handleGet])


    const handleGetTopics = useCallback(async (user: string) => {
        await axiosAprovaApi
            .get(`/historicos/${materia}`)
            .then((r) => {
                if (materia != "Nenhuma")
                    setHistoricos([
                        { nome: "Nenhum", image: undefined },
                        ...r.data.topics
                    ]);
                else
                    setHistoricos([
                        { nome: "Nenhum", image: undefined },
                        ...r.data
                    ])
            })
            .catch((e) => {
                console.log(e)
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
    

    else {
            return (
                <>
                    <h1>Erro ao Carregar</h1>
                    <button type="button" className="btn float-left m-5" onClick={() => setNumeroPagina(0)}>Voltar</button >
                </>)
        }

    }

