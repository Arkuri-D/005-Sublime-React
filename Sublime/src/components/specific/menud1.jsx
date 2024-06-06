import React, { useState } from 'react';
import MenuD from '../generics/menues_d';
import preciosImg from '../../assets/ICONO DINERO LISTA DE PRECIOS.png';

const Menud1 = () => {
    const [showPrices, setShowPrices] = useState(false);

    const ArticulosP = [
        {
            elementos: [
                { texto: 'Artículos Personalizables' },
                [
                    { texto: 'Ceámica', url: '/ceramica' },
                    { texto: 'Tazas', url: '/tazas' },
                    { texto: 'Tazas magicas', url: '/tazas-magicas' },
                ],
                [
                    { texto: 'Madera', url: '/madera' },
                    { texto: 'Bandejas', url: '/bandejas' },
                    { texto: 'Carteles', url: '/carteles' },
                    { texto: 'Rompe Cabezas', url: '/rompe-cabezas' },
                    { texto: 'Porta Retratos', url: '/porta-retratos' },
                ],
                [
                    { texto: 'Plastico', url: '/plastico' },
                    { texto: 'Taza de plastico', url: '/taza-de-plastico' },
                    { texto: 'Cantimploras ', url: '/cantimploras' },
                    { texto: 'Jarro Térmico', url: '/jarro-termico' },
                    { texto: 'Mates', url: '/mates' },
                    { texto: 'Mates Listos', url: '/mates-listos' },
                    { texto: 'Vaso', url: '/Vaso' },
                    { texto: 'LLaveros', url: '/llaveros' },
                ],
                [
                    { texto: 'Remeras', url: '/remeras' },
                    { texto: 'Remera Blanca Unisexs', url: '/remera-blanca-unisex' },
                    { texto: 'Remera Gris Unisexs', url: '/remera-gris-unisex' },
                    { texto: 'Remera Blanca Mangas Negras Unisexs', url: '/remera-blanca-mangas-negras-unisex' },
                    { texto: 'Remera Gris Mangas Negras Unisexs', url: '/remera-gris-mangas-negras-unisex' },
                    { texto: 'Remera Blanca Niños', url: '/remera-blanca-niños' },
                ],
                { texto: 'Vidrio', url: '/vidrio' },
                { texto: 'Aluminio', url: '/aluminio' },
            ]
        }
    ];

    const Combos = [
        {
            elementos: [
                { texto: 'Combos' },
                { texto: 'Arreglos con Dulces', url: '/arreglos-dulces' },
                { texto: 'Arreglos para Desayunos', url: '/arreglos-desayunos' },
            ]
        }
    ];

    const TematicaMes = [
        {
            elementos: [
                { texto: 'Tematica del Mes' },
                { texto: 'Sorpresa para Mamá', url: '/sorpresa-mama' },
                { texto: 'Descuento Especial', url: '/descuento-especial' },
                { texto: 'Regalo Abuelita', url: '/regalo-abuelita' },
            ]
        }
    ];

    const Precios = [
        { nombre: 'Producto1', precio: 10 },
        { nombre: 'Producto2', precio: 20 },
        { nombre: 'Producto3', precio: 30 }
    ];

    const handleOutsideClick = (e) => {
        if (e.target.className === 'modal') {
            setShowPrices(false);
        }
    };

    return (
        <div className='menucontainer'>
            {ArticulosP.map((elemento, index) => (
                <MenuD key={index} elementos={elemento.elementos} />
            ))}
            {Combos.map((elemento, index) => (
                <MenuD key={index} elementos={elemento.elementos} />
            ))}
            {TematicaMes.map((elemento, index) => (
                <MenuD key={index} elementos={elemento.elementos} />
            ))}

<button className='lista_precios' onClick={() => setShowPrices(true)}>
                <img src={preciosImg} alt="Lista de Precios" style={{ marginRight: '8px' }} />
                Lista de Precios
            </button>

            {showPrices && (
                <div className='modal' onClick={handleOutsideClick}>
                    <div className='modal-content'>
                        <h3>Lista de Precios</h3>
                        <ul>
                            {Precios.map((precio, index) => (
                                <li key={index}>{precio.nombre}: ${precio.precio}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Menud1;
