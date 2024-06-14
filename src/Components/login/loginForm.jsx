import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailTouched, setEmailTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);

    const validateEmailOrPhone = (value) => {
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const phoneRegex = /^\[()?\[0-9]{3}\]?\[-\s]?\[0-9]{3}\[-\s]?\[0-9]{4,6}$/;
        return emailRegex.test(value.toLowerCase()) || phoneRegex.test(value.toLowerCase());
    }

    const validatePassword = (value) => {
        return value.length >= 4 && value.length <= 60;
    }

    const handleBlur = () => {
        setEmailTouched(true);
        setPasswordTouched(true);
    }

    const isEmailValid = validateEmailOrPhone(email);
    const isPasswordValid = validatePassword(password);

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que el formulario haga submit
        // Aquí podrías implementar la lógica para enviar los datos a tu servidor
    }

    return (
        <div className="upper">
            <div className="logo">
                <nav>
                    <Link to="/">
                        <h2>Logo</h2>
                    </Link>
                </nav>
            </div>
            <div className="login-div">
                <form className="login" onBlur={handleBlur} onSubmit={handleSubmit}>
                    <h1>Iniciar Sesion</h1>
                    <div className="input-text">
                        <input
                            type="text"
                            name="email"
                            placeholder="Correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setEmailTouched(true)}
                        />
                        {emailTouched && !isEmailValid && (
                            <div className="warning-input">
                                Por favor ingresa un correo electrónico o número de teléfono válido.
                            </div>
                        )}
                    </div>

                    <div className="input-text">
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setPasswordTouched(true)}
                        />
                        {passwordTouched && !isPasswordValid && (
                            <div className="warning-input">
                                La contraseña debe tener entre 4 y 60 caracteres.
                            </div>
                        )}
                    </div>

                    <div>
                        <button type="submit" className="signin-button">Iniciar Sesión</button>
                    </div>
                    <div className='contrasena'>
                        <a href="https://www.netflix.com/pe/LoginHelp">¿Has olvidado tu contraseña?</a>
                    </div>
                    <div className="remember-flex">
                        <div>
                            <input type="checkbox" />
                            <label className="color_text">Recuérdame</label>
                        </div>
                    </div>
                    <div className="new-members">
                        ¿Nuevo en Netflix? <Link to="/" className="signup-link">Regístrate ahora</Link>.
                    </div>
                    <div className="protection color_link help">
                        Esta página está protegida por Google reCAPTCHA para asegurar que no eres un robot. <span className='learn'>Aprende más</span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
