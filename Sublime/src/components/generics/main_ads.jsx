import React, { useState } from 'react';
import TestAdd from '../../assets/TestAdd.jpeg';
import TestAdd1 from '../../assets/TestAdd1.png';
import TestAdd2 from '../../assets/TestAdd2.png';
import TestAdd3 from '../../assets/TestAdd3.png';
import TestAdd4 from '../../assets/TestAdd4.png';
import TestAdd5 from '../../assets/TestAdd5.png';

const ads = [
    { src: TestAdd1, alt: 'Image 1' },
    { src: TestAdd2, alt: 'Image 2' },
    { src: TestAdd3, alt: 'Image 3' },
    { src: TestAdd4, alt: 'Image 4' },
    { src: TestAdd5, alt: 'Image 5' },
];

export default function MainAds() {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentAdIndex(index);
    };

    return (
        <div className="mainads">
            <div className="image-container">
                {ads.map((ad, index) => (
                    <img
                        key={index}
                        src={ad.src || TestAdd}
                        alt={ad.alt}
                        style={{ display: index === currentAdIndex ? 'block' : 'none', margin: '0 auto' }}
                    />
                ))}
            </div>
            <div className="buttons-container">
                {ads.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)}>
                        {`Button ${index + 1}`}
                    </button>
                ))}
            </div>
        </div>
    );
}
