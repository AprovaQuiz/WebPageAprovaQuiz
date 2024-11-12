import React, { useCallback, useEffect, useState } from 'react';
import { axiosAprovaApi } from '~/configs/auth';
import { NoticiasInterface } from '../_index/Route';
import { Link } from '@remix-run/react';

const Cards: React.FC = () => {

  const [noticias, setNoticias] = useState<NoticiasInterface[]>([])

  const handleGet = useCallback(async () => {
    await axiosAprovaApi
      .get("/news")
      .then((r) => {
        setNoticias((r.data).reverse());
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  useEffect(() => {
    handleGet()
  }, [handleGet])

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="card-container col-6">
        {noticias.map((noticia, index) => {
          const actualDate = new Date(noticia.updatedAt)
          return (
            <div key={index} className="card mb-3">
              <div className="row g-0 h-25">
                <div className="col-md-4">
                  <img src={noticia.linkImagem} className="img-fluid rounded-start" alt={noticia.titulo} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{noticia.titulo}</h5>
                    <p className="card-text">{noticia.resumo}</p>
                    <p className="card-text">

                      <small className="text-body-secondary">
                        {"atualizado em: " +
                          String(actualDate.getUTCDate()).padStart(2, "0") +
                          "/" +
                          String(actualDate.getMonth() + 1).padStart(2, "0") +
                          "/" +
                          actualDate.getFullYear() +
                          " - " +
                          String(actualDate.getHours()).padStart(2, "0") + ":" +
                          String(actualDate.getMinutes()).padStart(2, "0")
                        }
                      </small>

                    </p>
                    <Link to={`/Noticias/noticia_id=${noticia._id}`} className="btn w-50 text-light btn-primary">Ver mais</Link>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Cards;
