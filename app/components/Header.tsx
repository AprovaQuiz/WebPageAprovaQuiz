import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export async function logout() {

    const result = await Swal.fire({
        title: 'Quer realmente sair?',
        showCancelButton: true,
        confirmButtonText: 'Deslogar',
    });
    if (result.isConfirmed) {
        localStorage.removeItem("access-token");
        Swal.fire({
            title: "Deslogado",
            allowEscapeKey: false,
            allowOutsideClick: false,
            icon: "success"
        }).then(() => { window.location.assign("/"); });
    }

    return result

}

export function Header() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Verifica se o token existe no localStorage apenas no cliente
        const token = localStorage.getItem('access-token');
        setIsAuthenticated(!!token);
    }, []);

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

                        {!isAuthenticated ?
                            <>
                                <Link to="/Login"> <button className="btn btn-outline-white me-2">Login</button></Link>
                                <Link to="/Registrar"><button className="btn btn-white">Sign-up</button></Link>
                            </>
                            :
                            <div className="d-flex align-items-center">
                                <Link to="/notificacoes" className="me-3">
                                    <i className="bi bi-bell" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                                </Link>
                                <Link to="/historicos" className="me-3">
                                    <i className="bi bi-clock-history" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                                </Link>
                                <Link to="/perfil">
                                    <i className="bi bi-person" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                                </Link>

                            </div>
                        }


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