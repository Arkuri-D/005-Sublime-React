import React from 'react';
import MenuD1 from '../specific/menud1';
import MainAds from '../generics/main_ads';
import Productarea from '../specific/product_d_area';

function Body() {
    return (
        <div className='Body'>
            <MenuD1 />
            <MainAds />
            <Productarea />
        </div>
    );
}

export default Body;
