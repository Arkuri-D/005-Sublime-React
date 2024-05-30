import React, { useState } from 'react';
import logowspverde from '../../assets/WASAP EN VERDE.png';

const WhatsAppLink = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="whatsapp-container"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <a href="https://wa.me/5493447546985?text=¡Hola!%20Vengo%20desde%20su%20página%20web" target="_blank" rel="noopener noreferrer">
                <img
                    src={logowspverde}
                    alt="WhatsApp"
                    className="whatsapp-image"
                />
            </a>
            <div className={`whatsapp-tooltip ${isHovered ? 'visible' : ''}`}>
                ¡Contáctanos por WhatsApp!
            </div>
        </div>
    );
};

export default WhatsAppLink;
