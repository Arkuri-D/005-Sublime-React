import React from 'react';
import MenuD from '../generics/menues_d';

const Menud1 = () => {
    const ArticulosP = [
        { elementos: ['Artículos', 'Tazas', 'Remeras', 'Gorras', ['Entrega rápida', 'Envío gratuito', 'Pan con queso'] ] },
    ];
    const ArticulosS = [
        { elementos: ['Entrega rápida', 'Envío gratuito', 'Pan con queso'] },
    ];

    return (
        <div>
            {ArticulosP.map((elemento, index) => (
                <MenuD key={index} elementos={elemento.elementos}>
                    {/* Aquí anidamos otro MenuD dentro de este */}
                    {ArticulosS.map((subElemento, subIndex) => (
                        <MenuD key={subIndex} elementos={subElemento.elementos} />
                    ))}
                </MenuD>
            ))}
        </div>
    );
};

export default Menud1;

