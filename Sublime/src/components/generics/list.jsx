import React from 'react';
import PropTypes from 'prop-types';
//listas comolas del footer
const List = ({ elements }) => {
    if (!elements || elements.length === 0) {
        return null; // Retorna null si no hay elementos en el array
    }

    return (
        <div className="list">
            <h3>{elements[0].name}</h3>
            <div className="listlinks">
                {elements.slice(1).map((element, index) => (
                    <a key={index} href={element.url} target="_blank" rel="noopener noreferrer">
                        {element.name}
                    </a>
                ))}
            </div>
        </div>
    );
};

List.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default List;
