// Footer.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
            <div className="footer-container">
                <ul className="footer-links">
                    <li><a href="#">Preguntas frecuentes</a></li>
                    <li><a href="#">Centro de ayuda</a></li>
                    <li><a href="#">Cuenta</a></li>
                    <li><a href="#">Prensa</a></li>
                    <li><a href="#">Relaciones con inversionistas</a></li>
                    <li><a href="#">Empleo</a></li>
                    <li><a href="#">Formas de ver</a></li>
                    <li><a href="#">Términos de uso</a></li>
                    <li><a href="#">Privacidad</a></li>
                    <li><a href="#">Preferencias de cookies</a></li>
                    <li><a href="#">Información corporativa</a></li>
                    <li><a href="#">Contáctanos</a></li>
                    <li><a href="#">Prueba de velocidad</a></li>
                    <li><a href="#">Avisos legales</a></li>
                    <li><a href="#">Originales de Netflix</a></li>
                </ul>
                <div className="footer-social">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
                </div>
                <div className="footer-copyright">
                    <p>&copy; Antonich 2024</p>
                </div>
            </div>
        </footer>
  );
}

export default Footer;
