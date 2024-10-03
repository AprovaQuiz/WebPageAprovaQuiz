import { Link } from "@remix-run/react";

export function Header() {

    return (
        
        <header>
        <nav className="headerAQ navbar ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src="/AprovaLogoHeaderPlaceholder.png" alt="Logo" width="300" height="60" className="d-inline-block align-text-top"></img>
                </a>
                <ul className="nav nav-pills">
                <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
                <li className="nav-item"><Link to="/Simula" className="nav-link">Simulados</Link></li>
                <li className="nav-item"><a href="/" className="nav-link">Cadernos</a></li>
                <li className="nav-item"><a href="/" className="nav-link">Notícias</a></li>
            </ul>
            </div>
        </nav>
        </header >
    )
}