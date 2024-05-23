import React from 'react';
import List from '../generics/list';
import Smedia_area from '../specific/socialmedia_f.jsx';

const Contactos = [
    { name: 'Contactos'},
    { name: 'Whatsapp', url: 'http://example.com/link1' },
    { name: 'Dirección', url: 'http://example.com/link2' },
];

const Informacón = [
    { name: 'Informacón'},
    { name: 'Medios de pago', url: 'http://example.com/link1' },
    { name: 'Envíos', url: 'http://example.com/link2' },
    { name: 'Política de devoluciones', url: 'http://example.com/link3' },
];

const Conócenos = [
    { name: 'Conócenos'},
    { name: '¿Quiénes somos?', url: 'http://example.com/link1' },
    { name: '¿Qué ofrecemos?', url: 'http://example.com/link2' },
];

function Footer() {
    return (
        <div className='Footer'>
            <List elements={Contactos}/>
            <List elements={Informacón}/>
            <List elements={Conócenos}/>
            <Smedia_area/>
        </div>
    );
}

export default Footer;
