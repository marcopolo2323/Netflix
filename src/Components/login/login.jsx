import React from 'react';
import './Login.css';
import LoginForm from './loginForm';


function Login() {
  return (
    <div className="contenedor_login">
      <LoginForm />
      <div className="bottom">
        <div className="bottom-width">
          Questions? Call <a href="tel:1-844-542-4813" className="tel-link">1-844-542-4813</a>
          <div>
            <ul className="bottom-flex">
              <li className="list-bottom">
                <a href="https://desmotivaciones.es/" className="link-bottom">
                  FAQ
                </a>
              </li> 
              <li className="list-bottom"> 
                <a href="https://desmotivaciones.es/" className="link-bottom">
                  Help Center
                </a>
              </li>
              <li className="list-bottom">
                <a href="https://www.rankeen.com/Rankings/rank_google_curioso.php" className="link-bottom">
                  Terms of Use
                </a>
              </li>
              <li className="list-bottom">
                <a href="https://www.rankeen.com/Rankings/rank_google_curioso.php" className="link-bottom">
                  Privacy
                </a>
              </li>
              <li className="list-bottom">
                <a href="https://www.rankeen.com/Rankings/rank_google_curioso.php" className="link-bottom">
                  Cookie Preferences
                </a>
              </li>
              <li className="list-bottom">
                <a href="https://desmotivaciones.es/" className="link-bottom">
                  Corporate information
                </a>
              </li>
            </ul>
          </div>
          <div>
            <select className="fa select-language">
              <option> &#xf0ac; &nbsp;&nbsp;&nbsp;English</option>
              <option> &#xf0ac; &nbsp;&nbsp;&nbsp;Fran&ccedil;ais</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
