import React from 'react';
import MenuD from '../generics/menues_d';

const Menud1 = () => {
    const ArticulosP = [
        { elementos: ['Artículos', ['Entrega rápida', 'Envío gratuito', 'Pan con queso', ],  'Tazas', 'Remeras', 'Gorras', ['Entrega rápida', 'Envío gratuito', 'Pan con queso', ] ] },
    ];
    

    return (
        <div>
            {ArticulosP.map((elemento, index) => (
                <MenuD key={index} elementos={elemento.elementos}>
                </MenuD>
            ))}
        </div>
    );
};

export default Menud1;

