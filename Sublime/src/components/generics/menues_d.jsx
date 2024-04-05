import React from 'react';

const MenuD = ({ elementos }) => {
    return (
        <div className='MenuD'>
            <h3>{elementos[0]}</h3>
            <ul>
                {elementos.slice(1).map((elemento, index) => (
                    <React.Fragment key={index}>
                        {Array.isArray(elemento) ? (
                            <li key={index} className='SubMenuD'>
                                <ul>{elemento[0]}
                                    {elemento.slice(1).map((subElemento, subIndex) => (
                                        <li key={subIndex}>{subElemento}</li>
                                    ))}
                                </ul>
                            </li>
                        ) : (
                            <li>{elemento}</li>
                        )}
                    </React.Fragment>
                ))}
            </ul>
        </div>
    );
};

export default MenuD;
