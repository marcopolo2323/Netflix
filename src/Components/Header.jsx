// Header.js
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return(
      <div>
        <nav className='nav_container'>
          <h2 className='logo'>PERUFLIX</h2>
          <ul>
            <li className='lista_inicio'><a href="#">Inicio</a></li>
            <li className='lista_series'><a href="#">Series</a></li>
            <li className='lista_peliculas'><a href="#">Peliculas</a></li>
            <li className='lista_anadidos'><a href="#">Añadido Recientemente</a></li>
            <li className='lista_miLista'><a href="#">Mi Lista</a></li>
            <li className='busqueda'><a href="#"><FontAwesomeIcon icon={faSearch}/></a></li>
          </ul>
        </nav>
      </div>
    ) 
  }
export default Header;
