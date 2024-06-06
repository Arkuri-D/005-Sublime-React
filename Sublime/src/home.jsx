import React from 'react';
import Headers from './components/areas/header';
import Body from './components/areas/body';
import WhatsAppLink from './components/areas/aside.jsx';
import Footer from './components/areas/footer';
import './styles/global.css';

function Home() {
    return (
    <div>
        <Headers />
        <Body />
        <WhatsAppLink/>
        <Footer />
    </div>
    );
}

export default Home;