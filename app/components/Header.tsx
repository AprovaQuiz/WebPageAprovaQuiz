import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header>
            <nav className="headerAQ navbar">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="/AprovaLogoHeaderPlaceholder.png" alt="Logo" width="300" height="60" className="d-inline-block align-text-top me-2"></img>
                    </a>
                    <div className="d-flex align-items-center">
                        <ul className="nav nav-pills me-3">
                            <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
                            <li className="nav-item"><Link to="/Simulado" className="nav-link">Simulados</Link></li>
                            <li className="nav-item"><a href="/" className="nav-link">Cadernos</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Notícias</a></li>
                        </ul>
                        <button className="btn btn-outline-white me-2">Login</button>
                        <button className="btn btn-white">Sign-up</button>
                    </div>
                </div>
            </nav>
        </header>
    );
}
