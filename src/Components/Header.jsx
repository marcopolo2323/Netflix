// Header.js
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

function Header() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
          // Scrolling down
          setShow(false);
        } else {
          // Scrolling up
          setShow(true);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);
  
  return(
      <div>
        <nav className={`navbar ${show ? 'visible' : 'hidden'}`}>
          <h2 className='logo'>Netchanel</h2>
          <ul className='primerNav'>
            <li className='lista_inicio'><a href="#">Inicio</a></li>
            <li className='lista_series'><a href="#">Series</a></li>
            <li className='lista_peliculas'><a href="#">Peliculas</a></li>
            <li className='lista_anadidos'><a href="#">Añadido Recientemente</a></li>
            <li className='lista_miLista'><a href="#">Mi Lista</a></li>
          </ul>
          <ul className='segundoNav'>
            <li className='busqueda'><a href="#"><FontAwesomeIcon icon={faSearch}/></a></li>
            <li className='user'><a href="#"><FontAwesomeIcon icon={faUser}/></a></li>
          </ul>
        </nav>
      </div>
    ) 
  }
export default Header;
