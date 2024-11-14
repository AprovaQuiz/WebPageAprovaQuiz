import { Link } from "@remix-run/react";
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from "sweetalert2";

export function logout() {
    Swal.fire({
        title: 'Quer realmente sair?',
        showCancelButton: true,
        confirmButtonText: 'Deslogar',
    }).then((result) => {

        if (result.isConfirmed) {
            localStorage.removeItem("access-token")
            Swal.fire({
                title: "Deslogado",
                allowEscapeKey: false,
                allowOutsideClick: false,
                icon: "success"
            }).then(() => { window.location.assign("/") })
        }
    })

}

export function Header() {
    return (
        <header>
            <nav className="headerAQ navbar">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <img src="/AprovaLogoHeaderPlaceholder.png" alt="Logo" width="300" height="60" className="d-inline-block align-text-top me-2"></img>
                    </Link>
                    <div className="d-flex align-items-center">
                        <ul className="nav nav-pills me-3">
                            <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
                            {/* <li className="nav-item"><Link to="/Simulado" className="nav-link">Simulados</Link></li> */}
                            {/* <li className="nav-item"><Link to="/" className="nav-link">Cadernos</Link></li> */}
                            <li className="nav-item"><Link to="/Noticias" className="nav-link">Notícias</Link></li>
                        </ul>
                        <a href="/Login"> <button className="btn btn-outline-white me-2">Login</button></a>
                        <a href="/Registrar"><button className="btn btn-white">Sign-up</button></a>

                        {/* <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                                Perfil
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Opção 1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Opção 2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Opção 3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}

                    </div>
                </div>
            </nav>
        </header>
    );
}


/*
<button className="carousel-control-prev" type="button" data-bs-target="#cadernosCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#cadernosCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
*/