import React from 'react';
import Logo_w from '../../assets/WASAP MORADOP.png';
import Logo_f from '../../assets/FACEBOOK MORADO.png';
import Logo_i from '../../assets/INSTAGRAM MORADO.png';

export default function Smedia_area() {
    return (
        <div className='sm_area'>
            <a href="/" className="sm_logo">
                <img src={Logo_w} alt="Logo de whatsapp" />
            </a>
            <a href="/" className="sm_logo">
                <img src={Logo_f} alt="Logo de facebook" />
            </a>
            <a href="/" className="sm_logo">
                <img src={Logo_i} alt="Logo de instagram" />
            </a>
        </div>
    );
}