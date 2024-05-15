import React from 'react';

const MenuD = ({ elementos }) => {
    return (
        <div className='MenuD'>
            <h3>{elementos[0].texto}</h3>
            <ul>
                {elementos.slice(1).map((elemento, index) => (
                    <React.Fragment key={index}>
                        {Array.isArray(elemento) ? (
                            <li key={index} className='SubMenuD'>
                                {elemento[0].texto}
                                <ul>
                                    {elemento.slice(1).map((subElemento, subIndex) => (
                                        <li key={subIndex}>
                                            {subElemento.url ? (
                                                <a href={subElemento.url}>{subElemento.texto}</a>
                                            ) : (
                                                subElemento.texto
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li key={index}>
                                {elemento.url ? (
                                    <a href={elemento.url}>{elemento.texto}</a>
                                ) : (
                                    elemento.texto
                                )}
                            </li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default MenuD;
