// import React from 'react';
import MyImage from '../assets/images/imageglo/1.png'; // Import the image file
// import MyImage2 from '../assets/images/1.png'; // Import the image file

import React, { useState } from "react";

const Imageimport = () => {
    const slides = [
        { id: 1, url: MyImage },
        { id: 2, url: MyImage },
        { id: 3, url: MyImage },
        { id: 4, url: MyImage },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden h-auto pb-20">
            {/* Slides */}
            <div
                className="flex transition-transform duration-500"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full">
                        <img
                            src={slide.url}
                            alt={`Slide ${slide.id}`}
                            className="w-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-700 text-white p-3 rounded-full shadow-md hover:bg-orange-400"
            >
                ❮
            </button>
            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-700 text-white p-3 rounded-full shadow-md hover:bg-orange-400"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-9 h-2 rounded-full ${index === currentIndex
                            ? "bg-orange-700"
                            : "bg-orange-200 hover:bg-orange-700"
                            }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Imageimport;
