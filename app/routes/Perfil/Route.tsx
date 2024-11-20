import { LinksFunction, MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header, logout } from "~/components/Header";
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import ChangePasswordModal from "./modal";

import perfil from '~/styles/perfil.css?url';
import { axiosAprovaApi } from "~/configs/auth";
import { FormDados } from "./formDados";
import Swal from "sweetalert2";
import { ImageInterface } from "../formSimulado/gridMateria";
import { Buffer } from 'buffer';

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css" },
    { rel: "stylesheet", href: perfil }
  ];
};

export const meta: MetaFunction = () => {
  return [
    { title: "Meu Perfil" },
  ];
}

export interface UserInterface {
  _id?: string,
  nome?: string,
  email?: string,
  senha?: string,
  role?: string,
  userName?: string,
  dataNasc?: Date,
  numCelular?: string,
  image?: ImageInterface
}

function Perfil() {

  const [userData, setUserData] = useState<UserInterface>();

  const handleGet = useCallback(async () => {
    await axiosAprovaApi
      .get("/users/myuser")
      .then((r) => {
        setUserData(r.data);
      })
      .catch((e) => {
        console.log(e)
      });
  }, []);

  useEffect(() => {
    handleGet()
  }, [handleGet])


  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  async function patchUser(user: UserInterface | undefined) {


    const data = {
      nome: user?.nome || undefined,
      userName: user?.userName || undefined,
      dataNasc: user?.dataNasc || undefined,
      numCelular: user?.numCelular || undefined,
      email: user?.email || undefined,
      senha: user?.senha || undefined,
      image: user?.image || undefined
    }

    await axiosAprovaApi.patch("/users/myuser/",
      data
    )
      .then(() => {
        Swal.fire({
          title: "Salvando informações",
          timer: 1000,
          timerProgressBar: true,
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading(null);

          },
        }).then(async (result) => {
          if (result.dismiss === Swal.DismissReason.timer)
            Swal.fire({
              title: "Informações salvas",
              allowEscapeKey: false,
              allowOutsideClick: false,
              icon: "success"
            }).then(() => {

              window.location.reload()
            })
        })

      })
      .catch((e) => {
        if (e.response?.data.message == "Email já cadastrado" || e.response?.data.message == "Username já em uso")
          Swal.fire({
            icon: "error",
            text: e.response?.data.message,
          });

        console.log(e)
      })
  }

  function image() {

    if (userData?.image != null) {

      return `data:image/png;base64,${Buffer.from(userData.image.img.data).toString('base64')}`
    } else {
      return "https://via.placeholder.com/150"
    }
  }

  async function handleImage(e: ChangeEvent<HTMLInputElement>) {

    const file = e.target.files && e.target.files[0];

    const data = {
      image: file,
      name: file?.name
    }

    console.log(data)

    await axiosAprovaApi.post('/images', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(async (r) => {
        if ((userData?.image != undefined) || (userData?.image != null)) {
          await axiosAprovaApi.delete(`/images/${userData?.image._id}`)
            .then(() => { console.log('apagou') })
            .catch((e) => { console.log(e) })
        }
        patchUser({ image: r.data.savedID })
      })
      .catch((e) => {
        console.log(e)
        alert("Algum erro com a imagem")
      })
  }

  return (
    <div>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3 text-center">
            <h3 className="h1perfil fw-bold">Dados Pessoais</h3>
            <br /><br />
            <div className="d-flex flex-column align-items-center">
              <img
                src={image()}
                alt="Perfil"
                className="rounded-circle img-fluid mb-3"
                style={{ width: "150px", height: "150px", objectFit: "fill", border: "3px solid #d3d3d3" }}
              />
              <label htmlFor="image" className="btn btn-outline-primary btn-sm mt-2">Alterar Foto</label>
              <input placeholder="Alterar Foto"
                type="file"
                id="image"
                accept="image/png"
                name="image"
                style={{ display: 'none' }}
                onChange={handleImage}
              />
            </div>
          </div>


          <FormDados userData={userData} updateData={patchUser} />

          <div className="col-md-3 text-start">
            <h3 className="h1perfil fw-bold">Outros</h3>
            <br /><br />
            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-shield-lock-fill me-2 text-primary"></i>
                <button onClick={handleShow} className="btn btn-link text-primary p-0">
                  Alterar senha
                </button>

                <ChangePasswordModal modal={{
                  show: show,
                  onHide: handleClose
                }}
                  updateData={patchUser}
                />

              </li>
              <li className="d-flex align-items-center mb-3">
                <i className="bi bi-moon-fill me-2 text-primary"></i>
                <span>Modo escuro</span>
                <div className="form-check form-switch ms-auto">
                  <input className="form-check-input" type="checkbox" id="darkModeToggle" />
                </div>
              </li>
              <li className="d-flex align-items-center">
                <i className="bi bi-box-arrow-right me-2 text-danger"></i>
                <button className="btn btn-link text-danger p-0" onClick={logout}>Desconectar conta</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Perfil;
