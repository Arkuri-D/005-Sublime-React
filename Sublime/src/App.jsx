import React from 'react';
import Headers from './components/areas/header';
import Body from './components/areas/body';
import './styles/global.css';

function App() {
    return (
    <div>
        <Headers />
        <Body />
        <h1>Hola, mundo!</h1>
        <p>Este es mi primer componente de React.</p>
    </div>
    );
}

export default App;
