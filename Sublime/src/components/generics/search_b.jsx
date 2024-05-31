import React from 'react';
import lupa from '../../assets/LUPA.png';

export default function SearchBar() {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Buscar" id='Searchbararea'/>
            <button type="submit">
                <img src={lupa} alt="Buscar" />
            </button>
        </div>
    );
}
