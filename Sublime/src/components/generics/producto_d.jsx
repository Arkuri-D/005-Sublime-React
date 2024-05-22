import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ src, name, price, url }) => (
    <div className="product">
        <img src={src} alt={name} className="product-image" />
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price}</p>
        <a href={url} className="product-button">Ver</a>
    </div>
);

Product.propTypes = {
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
};

export default Product;

