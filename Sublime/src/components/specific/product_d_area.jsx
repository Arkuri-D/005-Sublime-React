import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Product from '../generics/producto_d'; // Asumiendo que esta ruta es correcta
import TestAdd from '../../assets/TestAdd.jpeg';

// Componente ProductList
const ProductList = ({ products }) => (
    <div className="product-list">
        {products.map((product, index) => (
            <Product
                key={index}
                src={product.src}
                name={product.name}
                price={product.price}
                url={product.url}
            />
        ))}
    </div>
);

ProductList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            src: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            url: PropTypes.string,
        })
    ).isRequired,
};

// Datos de ejemplo
const products = [
    { src: TestAdd, name: 'Taza cerámica', price: 1800, url: 'http://example.com/product1' },
    { src: TestAdd, name: 'Remera Unisex', price: 1800, url: 'http://example.com/product2' },
    { src: TestAdd, name: 'Remera infantil', price: 1800, url: 'http://example.com/product3' },
    { src: TestAdd, name: 'Taza Mágica', price: 1800, url: 'http://example.com/product4' },
    // Más productos...
];

// Componente principal
const Productarea = () => (
    <div className="Productarea">
        <ProductList products={products} />
    </div>
);

export default Productarea; // Añadimos esta línea para exportar el componente Productarea

// También puedes exportar products si es necesario para otras partes de tu aplicación
export { products };
