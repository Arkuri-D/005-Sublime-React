import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdIndex(prevIndex => (prevIndex + 1) % ads.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleButtonClick = (index) => {
        setCurrentAdIndex(index);
    };

    const getPreviousIndex = () => (currentAdIndex - 1 + ads.length) % ads.length;
    const getNextIndex = () => (currentAdIndex + 1) % ads.length;

    return (
        <div className="mainads">
            <div className="image-container">
                <img src={ads[getPreviousIndex()].src} alt={ads[getPreviousIndex()].alt} className="side-image left" />
                <img src={ads[currentAdIndex].src || TestAdd} alt={ads[currentAdIndex].alt} className="main-image" />
                <img src={ads[getNextIndex()].src} alt={ads[getNextIndex()].alt} className="side-image right" />
            </div>
            <div className="buttons-container">
                {ads.map((_, index) => (
                    <button key={index} onClick={() => handleButtonClick(index)} className={index === currentAdIndex ? 'active' : ''}></button>
                ))}
            </div>
        </div>
    );
}
