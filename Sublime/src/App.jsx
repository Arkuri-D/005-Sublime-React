import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';  // Asegúrate de que este componente exista
import ProductP from './ProductP';  // Asegúrate de que este componente exista
import CustomLink from './links.jsx';  // Asegúrate de que este componente exista

function App() {
    return (
        <Router>
        <div>
            <CustomLink to="/product">
                <button>Go to Product Page</button>
            </CustomLink>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product" element={<ProductP />} />
                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </div>
        </Router>
    );
}

export default App;
