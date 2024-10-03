import { Link } from "@remix-run/react";

export function Footer() {

    return (
        <footer className="container-fluid footerAQ">
            
            <div className="row">
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3 className="footerTitulo">Cadernos</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Ciências Humanas</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Ciências da Natureza</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Matemática</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Linguagens</Link>
                        </li>
                    </ul>
                </div>
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3 className="footerTitulo">Notícias</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">ENEM</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">SISU</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">ProUni</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">FUVEST</Link>
                        </li>
                    </ul>
                </div>
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3 className="footerTitulo">Perfil</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Configurações</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Simulados</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Histórico</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Notificações</Link>
                        </li>
                    </ul>
                </div>
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3 className="footerTitulo">Download</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">IOS</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Android</Link>
                        </li>
                    </ul>
                </div>
                <div className="col pb-4 pt-4">
                    <ul className="footer-list">
                        <li>
                            <h3 className="footerTitulo">Redes Sociais</h3>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Twitter</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">Instagram</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="#" className="footer-link">YouTube</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}