import { MetaFunction } from "@remix-run/cloudflare";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from 'react';

import '~/styles/perfil.css?url';

export const meta: MetaFunction = () => {
  return [
    { title: "Meu Perfil" },
  ];
}

function Perfil() {
    const [isEditing, setIsEditing] = useState(false);
  
    const [userData, setUserData] = useState({
      nome: 'Tomiwa Oyeledu Dolapo',
      usuario: 'Female',
      dataNascimento: 'August 27th, 1999',
      celular: '(11) 94350-0924',
      email: 'tomiola@gmail.com'
    });
  
    const handleEdit = () => setIsEditing(true);
    const handleSave = () => setIsEditing(false);
  
    return (
      <div>
        <Header />
        <div className="container my-5">
          <div className="row">
            <div className="col-md-3 text-center">
              <h3 className="h1perfil fw-bold">Dados Pessoais</h3>
              <br/><br/>
              <div className="d-flex flex-column align-items-center">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Perfil" 
                  className="rounded-circle img-fluid mb-3" 
                  style={{ width: "150px", height: "150px", objectFit: "cover", border: "3px solid #d3d3d3" }}
                />
                <button className="btn btn-outline-primary btn-sm mt-2">Alterar Foto</button>
              </div>
            </div>


            <div className="col-md-5">
                <br/><br/><br/>
              <div className="text-start">
                <div className="mb-3">
                  <strong>Nome:</strong>
                  {isEditing ? (
                    <input type="text" className="form-control mt-1" defaultValue={userData.nome} />
                  ) : (
                    <p className="mt-1">{userData.nome}</p>
                  )}
                </div>
                <div className="mb-3">
                  <strong>Usuário:</strong>
                  {isEditing ? (
                    <input type="text" className="form-control mt-1" defaultValue={userData.usuario} />
                  ) : (
                    <p className="mt-1">{userData.usuario}</p>
                  )}
                </div>
                <div className="mb-3">
                  <strong>Data de Nascimento:</strong>
                  {isEditing ? (
                    <input type="text" className="form-control mt-1" defaultValue={userData.dataNascimento} />
                  ) : (
                    <p className="mt-1">{userData.dataNascimento}</p>
                  )}
                </div>
                <div className="mb-3">
                  <strong>Número de Celular:</strong>
                  {isEditing ? (
                    <input type="text" className="form-control mt-1" defaultValue={userData.celular} />
                  ) : (
                    <p className="mt-1">{userData.celular}</p>
                  )}
                </div>
                <div className="mb-3">
                  <strong>E-mail:</strong>
                  {isEditing ? (
                    <input type="email" className="form-control mt-1" defaultValue={userData.email} />
                  ) : (
                    <p className="mt-1">{userData.email}</p>
                  )}
                </div>
              </div>
              <div className="text-start mt-3">
                {isEditing ? (
                  <button onClick={handleSave} className="btn btn-primary">Salvar alterações</button>
                ) : (
                  <button onClick={handleEdit} className="btn btn-primary">Editar dados</button>
                )}
              </div>
            </div>

            <div className="col-md-3 text-start">
              <h3 className="h1perfil fw-bold">Outros</h3>
              <br/><br/>
              <ul className="list-unstyled">
                <li className="d-flex align-items-start mb-3">
                  <i className="bi bi-shield-lock-fill me-2 text-primary"></i>
                  <button className="btn btn-link text-primary p-0">Alterar senha</button>
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
                  <button className="btn btn-link text-danger p-0">Desconectar conta</button>
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
