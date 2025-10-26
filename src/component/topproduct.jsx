import React, { useState } from "react";
import MyImage from "../assets/images/product1.png";

const TopProducts = () => {
    const products = [
        {
            id: 1,
            label: "New",
            image: MyImage,
            title: "Beautya Capture Total Dreamskin Care & Perfect",
            description:
                "Plumping Gloss • Instant Anti-Aging • Term Volume Effect • 24h Hydration",
            price: "৳760.00",
        },
        {
            id: 2,
            image: MyImage,
            title: "Beautya Capture Total Dreamskin Care & Perfect",
            description:
                "Plumping Gloss • Instant Anti-Aging • Term Volume Effect • 24h Hydration",
            price: "৳768.00",
        },
        {
            id: 3,
            image: MyImage,
            title: "Beautya Capture Total Dreamskin Care & Perfect",
            description:
                "Plumping Gloss • Instant Anti-Aging • Term Volume Effect • 24h Hydration",
            price: "৳976.00",
        },
        {
            id: 4,
            image: MyImage,
            title: "Beautya Capture Total Dreamskin Care & Perfect",
            description:
                "Plumping Gloss • Instant Anti-Aging • Term Volume Effect • 24h Hydration",
            price: "৳976.00",
        },
        {
            id: 5,
            image: MyImage,
            title: "Beautya Capture Total Dreamskin Care & Perfect",
            description:
                "Plumping Gloss • Instant Anti-Aging • Term Volume Effect • 24h Hydration",
            price: "৳768.00",
        }


    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev === products.length - 1 ? 1 : prev + 1
        );
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden bg-gray-50 py-10 ">
            <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8  ">
                Our Top Products
            </h2>

            {/* Carousel */}
            <div className="relative   max-w-7xl mx-auto overflow-hidden ">
                <div
                    className="flex transition-transform duration-500  justify-normal gap-11 p-9  w-screen"
                    style={{
                        transform: `translateX(-${currentIndex * 50}%)`,
                    }}
                >
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-full flex flex-col items-center "
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className=" max-w-4xl object-cover rounded-lg"
                            />
                            <div className=" bg-gray-900 text-white p-4 rounded-lg">
                                {/* {product.label && (
                                    <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                                        {product.label}
                                    </span>
                                )} */}
                                <h3 className="text-sm font-medium  mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-xs mb-4">{product.description}</p>
                                <p className="text-lg font-semibold">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-[#fa8232]"
                >
                    ❮
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-black p-3 rounded-full shadow-md hover:bg-[#fa8232]"
                >
                    ❯
                </button>

                {/* Indicators */}

            </div>
        </div>
    );
};

export default TopProducts;
