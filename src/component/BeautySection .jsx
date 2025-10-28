import React from "react";
import MyImage2 from '../assets/images/imageglo/2.png'; // Import the image file
import MyImage3 from '../assets/images/imageglo/3.png'; // Import the image file
import MyImage4 from '../assets/images/imageglo/4.png'; // Import the image file
import MyImage5 from '../assets/images/imageglo/5.png'; // Import the image file
import MyImage6 from '../assets/images/imageglo/6.png'; // Import the image file


const BeautySection = () => {
    return (
        <div className="bg-gray-50 py-10 px-5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                {/* First Card */}
                <div className="relative bg-black text-white rounded-[40px] overflow-hidden lg:col-span-8 h-auto">
                    <img
                        src={MyImage2}
                        alt="Free Shipping Beauty"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6 top-36 left-1/4 right-1/4">
                        <h2 className="text-xl  md:text-2xl font-bold">Beauty & Care</h2>
                        <button className="mt-4 px-4 py-2 bg-white text-black rounded-full shadow hover:bg-gray-200">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-4 h-auto">
                    <img
                        src={MyImage3}
                        alt="Beauty & Care"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <h2 className="w-11/12 text-xl top-36 text-center absolute md:text-4xl font-bold text-white">Beauty & Care</h2>
                        <button className="mt-4 absolute bottom-36 left-1/4 right-1/4 px-4 py-2 bg-white text-black rounded-full shadow hover:bg-gray-800">
                            Discover Now
                        </button>
                    </div>
                </div>

                {/* Third Card */}
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-7 h-auto">
                    <img
                        src={MyImage4}
                        alt="Get Your 50% Off"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <h2 className="text-xl md:text-2xl font-bold text-white">Get Your 50% Off</h2>
                        <p className="mt-2 text-sm md:text-base text-white">
                            Nourish Your Skin With Toxin-Free Cosmetic Products.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-white text-black rounded-lg shadow hover:bg-gray-800">
                            Shop Now
                        </button>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="grid grid-cols-2 gap-6 lg:col-span-5 h-auto">
                    <div className="relative bg-black rounded-[40px] overflow-hidden">
                        <img
                            src={MyImage5}
                            alt="Check This Out"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                            <h2 className="text-lg md:text-xl font-bold text-white">Check <br />This Out</h2>
                            <p className="mt-2 text-sm md:text-base font-semibold text-white">FROM <br />$169</p>
                        </div>
                    </div>
                    <div className="relative bg-black rounded-[40px] overflow-hidden">
                        <img
                            src={MyImage6}
                            alt="Body Lotion"
                            className="w-full h-full object-cover opacity-80"
                        />
                        <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                            <h2 className="text-lg md:text-xl font-bold text-white">Body <br />Lotion</h2>
                            <p className="mt-2 text-sm md:text-base font-semibold text-white">FROM <br />$169</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BeautySection;
