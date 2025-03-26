import React, { useState, useEffect } from 'react';

const Hero = () => {
    const images = [
        '/img/imgOne.jpg',
        '/img/imgTwo.jpg',
        '/img/imgThree.jpg',
        '/img/imgFour.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-auto h-screen overflow-hidden">
            <div className="w-full h-[80%] flex justify-center items-center">
                <img
                    src={images[currentIndex]}
                    alt={`Image ${currentIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                />
            </div>
        </div>
    );
};

export default Hero;
