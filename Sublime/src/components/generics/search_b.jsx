import React from 'react';
import lupa from '../../assets/LUPA.png';

export default function SearchBar() {
    return (
            <form className="search-bar" action="">
            <input type="text" placeholder="Buscar" id='Searchbararea'/>
            <button type="submit">
                <img src={lupa} alt="Buscar" />
            </button>
            </form>
    );
}
