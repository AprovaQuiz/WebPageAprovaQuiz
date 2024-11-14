import { Link } from "@remix-run/react";

export function Header() {
    return (
        <header>
            <nav className="headerAQ navbar">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img src="/AprovaLogoHeaderPlaceholder.png" alt="Logo" width="300" height="60" className="d-inline-block align-text-top me-2" />
                    </a>

                    <div className="d-flex align-items-center">
                        <ul className="nav nav-pills me-3">
                            <li className="nav-item"><a href="/" className="nav-link" aria-current="page">Home</a></li>
                            <li className="nav-item"><Link to="/Simulado" className="nav-link">Simulados</Link></li>
                            <li className="nav-item"><a href="/" className="nav-link">Cadernos</a></li>
                            <li className="nav-item"><a href="/" className="nav-link">Notícias</a></li>
                        </ul>

                        {/* Ícones de Notificações, Ajuda e Perfil */}
                        <div className="d-flex align-items-center">
                            <a href="/notificacoes" className="me-3">
                                <i className="bi bi-bell" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                            </a>
                            <a href="/historico" className="me-3">
                                <i className="bi bi-clock-history" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                            </a>
                            <a href="/perfil">
                                <i className="bi bi-person" style={{ color: '#ffffff', fontSize: '1.25rem' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
