import React from 'react';
import logoImage from '../../assets/LOGO-SUBLIME-COLORES.png';

export default function Logo() {
    return (
        <a href="/" className="Logo">
            <img src={logoImage} alt="Logo de Sublime" />
        </a>
    );
}

