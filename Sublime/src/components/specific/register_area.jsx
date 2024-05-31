import React, { useState, useEffect, useRef } from 'react';
import Btn from '../generics/g_btns';
import Personita from '../../assets/PERSONA ICONO PERFIL.png';
import Bolsita from '../../assets/BOLSA ICONO  PARA CARRITO.png';

const AuthButtons = () => {
    const [loged, setLoged] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const registerFormRef = useRef(null);
    const loginFormRef = useRef(null);

    const handleRegisterClick = () => {
        setShowRegisterForm(true);
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowLoginForm(true);
        setShowRegisterForm(false);
    };

    const handleClickOutside = (event) => {
        if (registerFormRef.current && !registerFormRef.current.contains(event.target)) {
            setShowRegisterForm(false);
        }
        if (loginFormRef.current && !loginFormRef.current.contains(event.target)) {
            setShowLoginForm(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

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
                <div className='form-popup' ref={registerFormRef}>
                    <form className='register-form'>
                        <label>
                            <input type="email" placeholder='Tuemail@ejemplo.com' />
                        </label>
                        <label>
                            <input type="password" placeholder='Crear Contraseña' />
                        </label>
                        <label>
                            <input type="password" placeholder='Confirmar Contraseña'/>
                        </label>
                        <button type="submit">Registrarme</button>
                    </form>
                </div>
            )}

            {showLoginForm && (
                <div className='form-popup' ref={loginFormRef}>
                    <form className='login-form'>
                        <label>
                            <input type="email" placeholder='Tuemail@ejemplo.com'/>
                        </label>
                        <label>
                            <input type="password" placeholder='Contraseña' />
                        </label>
                        <button type="submit">Iniciar Sesión</button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AuthButtons;
