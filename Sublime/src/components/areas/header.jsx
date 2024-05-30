import React from 'react';
import Logo from '../generics/logo_s';
import Search from '../generics/search_b';
import AuthButtons from '../specific/register_area';

function Headers() {
    return (
        <>
            <div className="Header">
                <Logo />
                <Search />
                <AuthButtons />
            </div>
        </>
    );
}

export default Headers;
