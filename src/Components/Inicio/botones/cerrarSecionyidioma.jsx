import React, { useState } from 'react';
import './botones.css';
import { useNavigate } from 'react-router-dom';

const Encabezado = () => {
  const [idioma, setIdioma] = useState('Español');
  const navigate = useNavigate();

  const manejarCambioIdioma = (e) => {
    setIdioma(e.target.value);
    // Aquí podrías agregar lógica adicional para cambiar el idioma
    console.log(`Idioma cambiado a: ${e.target.value}`);
  };

  const manejarCerrarSesion = () => {
    // Aquí podrías agregar lógica para cerrar sesión del usuario
    // Por ejemplo, limpiar token, redirigir a página de inicio de sesión, etc.
    navigate('/login');
  };

  return (
    <div className="encabezado">
      <nav className='navbar'>
        <h2 className='logo'>NetTV</h2>
        <div className='botones'>
          <ul>
            <select
              value={idioma}
              onChange={manejarCambioIdioma}
              className="boton-idioma"
            >
              <option value="Español">Español</option>
              <option value="English">English</option>
              {/* Agrega más idiomas según sea necesario */}
            </select>
            <button
              onClick={manejarCerrarSesion}
              className="boton-cerrar-sesion"
            >
              Cerrar sesión
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Encabezado;
