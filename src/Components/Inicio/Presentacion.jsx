import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Encabezado from './botones/cerrarSecionyidioma';
import './presentacion.css';

function Presentacion() {
  return (
    <Router>
      <div className="contenedor_mayor">
        <div className="contenedor">
          <div className="contenedor_imagen">
            <nav className="navmenu">
              <Encabezado />
            </nav>
            <div className="bienvenida">
              <h1>Películas y series ilimitadas y mucho más</h1>
              <p>Disfruta donde quieras. Cancela cuando quieras.</p>
              <h3>
                ¿Quieres ver Netflix ya? Ingresa tu email o número de celular
                para crear una cuenta o reiniciar tu membresía.
              </h3>
              <div className="botones">
                <div className="contenedor_input">
                  <form action="">
                    <input type="email" placeholder="Email o numero de celular" />
                  </form>
                </div>
                <button className="boton_empezar">Comenzar</button>
              </div>
            </div>
            <form>
              {/* Aquí podría ir otro componente de input */}
            </form>
          </div>
        </div>
        <div className="contenedor_2">
          <div className="container">
            <div className="subtitulo2">
              <h2>Disfruta en tu TV</h2>
              <p>
                Míralo en Smart TV, Playstation, Xbox, Chromecast, Apple TV,
                reproductores de Blu-ray y más.
              </p>
            </div>
            <div className="tv-container">
              <img
                alt="TV"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                className="tv-image"
              />
              <div className="video-container">
                <video className="video" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor_3">
          <div className="container">
            <div className="tv-container">
              <img
                alt="TV"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                className="tv-image"
              />
              <div className="default-ltr-cache-xfttou e15c37ii6" data-uia="nmhp-card-animation-asset-motion">
                <div className="default-ltr-cache-1cn8kex">
                  <img
                    alt=""
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                    className="default-ltr-cache-1t1z3a4"
                    data-uia="nmhp-card-animation-asset-animation"
                  />
                </div>
                <div className="default-ltr-cache-tcf860">
                  <div
                    id=""
                    className="default-ltr-cache-162uqtg e15c37ii4"
                    data-uia=""
                  >
                    Stranger Things
                  </div>
                  <div
                    id=""
                    className="default-ltr-cache-44ib4m e15c37ii3"
                    data-uia=""
                  >
                    Descargando...
                  </div>
                </div>
                <div
                  className="default-ltr-cache-1q4up1i e15c37ii5"
                  aria-hidden="true"
                  data-uia="nmhp-card-animation-asset-custom"
                ></div>
              </div>
            </div>
            <div className="subtitulo2">
              <h2>Disfruta en tu TV</h2>
              <p>
                Míralo en Smart TV, Playstation, Xbox, Chromecast, Apple TV,
                reproductores de Blu-ray y más.
              </p>
            </div>
          </div>
        </div>
        <div className="contenedor_4">
          <div className="container">
            <div className="subtitulo2">
              <h2>Disfruta en tu TV</h2>
              <p>
                Míralo en Smart TV, Playstation, Xbox, Chromecast, Apple TV,
                reproductores de Blu-ray y más.
              </p>
            </div>
            <div className="tv-container">
              <img
                alt="TV"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                className="tv-image"
              />
              <div className="video-container">
                <video className="video" autoPlay playsInline muted loop>
                  <source
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className="contenedor_5"></div>
        <div className="contenedor_6">
          <h3>Preguntas frecuentes</h3>
        </div>
        <footer></footer>
      </div>
    </Router>
  );
}

export default Presentacion;
