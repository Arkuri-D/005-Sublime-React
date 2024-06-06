import React from 'react';
import Headers from './components/areas/header';
import Product_body from './components/areas/productbody.jsx';
import WhatsAppLink from './components/areas/aside.jsx';
import Footer from './components/areas/footer';
import './styles/global.css';

function Product_p() {
    return (
    <div>
        <Headers />
        <Product_body />
        <WhatsAppLink/>
        <Footer />
    </div>
    );
}

export default Product_p;
