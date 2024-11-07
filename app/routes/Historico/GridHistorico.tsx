
import { Buffer } from 'buffer';
import { useCallback, useEffect, useState } from 'react';

import { axiosAprovaApi } from "~/configs/auth";


export interface ImageInterface {

    name: string,
    img: {
        data: Buffer,
        contentType: string
    }

}

interface HistoricosInterface {
    _id: string,
    assunto: string,
    materia: string,
    qtdDeAcertos: number
}

export function GriHistorico() {

    const [historicos, setHistoricos] = useState<HistoricosInterface[]>([])

    const handleGet = useCallback(async () => {
        await axiosAprovaApi
            .get("/historic")
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

    return (
        <div className="container text-center">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">

            </div>
        </div>
    );
}