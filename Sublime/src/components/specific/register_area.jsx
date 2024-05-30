import React, { useState } from 'react';
import Btn from '../generics/g_btns';
import Personita from '../../assets/PERSONA ICONO PERFIL.png';
import Bolsita from '../../assets/BOLSA ICONO  PARA CARRITO.png';

const AuthButtons = () => {
    const [loged, setLoged] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleRegisterClick = () => {
        setShowRegisterForm(true);
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegisterForm(false);
    };

    return (
        <div>
            <div>
                {loged ? (
                    <div className='auth_area'>
                        <Btn content={<a href="https://example.com/profile">Nombre</a>} imgBefore={Personita} />
                        <Btn content={<a href="https://example.com/cart">Carrito</a>} imgAfter={Bolsita} />
                    </div>
                ) : (
                    <div className='auth_area'>
                        <Btn content="Registrarme" onClick={handleRegisterClick} />
                        <Btn content="Iniciar sesión" onClick={handleLoginClick} />
                    </div>
                )}
                {/* Botón para alternar el estado de loged */}
                {/*<button onClick={() => setLoged(!loged)}>Toggle Login State</button>*/}
            </div>

            {showRegisterForm && (
                <div className='form-popup'>
                    <form className='register-form'>
                        <h2>Registrarme</h2>
                        <label>
                            Email:
                            <input type="email" />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" />
                        </label>
                        <label>
                            Confirmar Contraseña:
                            <input type="password" />
                        </label>
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={() => setShowRegisterForm(false)}>Cerrar</button>
                    </form>
                </div>
            )}

            {showLoginForm && (
                <div className='form-popup'>
                    <form className='login-form'>
                        <h2>Iniciar Sesión</h2>
                        <label>
                            Email:
                            <input type="email" />
                        </label>
                        <label>
                            Contraseña:
                            <input type="password" />
                        </label>
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={() => setShowLoginForm(false)}>Cerrar</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AuthButtons;
