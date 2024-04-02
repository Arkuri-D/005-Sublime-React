import React from 'react';
import Logo from '../generics/logo_s';
import Search from '../generics/search_b';
import Btn from '../generics/g_btns';

function Headers() {
    return (
    <>
        <div className="Header">
    <Logo/>
    <Search/>
<div>
    <Btn contet= "Registrarme"/>
    <Btn contet= "Iniciar sesión"/>
</div>
        </div>
    </>
    );
}

export default Headers;