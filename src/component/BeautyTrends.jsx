
import image7 from '../assets/images/imageglo/7.png'; // Import the image file
import image8 from '../assets/images/imageglo/8.png'; // Import the image file
import image9 from '../assets/images/imageglo/dag.png'; // Import the image file
const BeautyTrends = () => {
    return (
        <div className="bg-gray-50 py-10 px-5 bg-gray-50 grid gap-10">
            <div className="text-center mb-8 relative p-20">
                <h1 className="text-3xl md:text-4xl font-bold text-black absolute inset-x-1/4">
                    Discover the Latest <br /> Beauty Trends
                </h1>
                <p className="mt-2 text-orange-500 text-lg font-semibold absolute top-28 end-96">
                    <img src={image9} alt="" />

                </p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">
                {/* First Card */}
                <div className="relative bg-black text-white rounded-[40px] overflow-hidden lg:col-span-6 h-auto">
                    <img
                        src={image7}
                        alt="Free Shipping Beauty"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold  px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-3 h-auto">
                    <img
                        src={image8}
                        alt="Beauty & Care"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold  px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-3 h-auto">
                    <img
                        src={image8}
                        alt="Beauty & Care"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold  px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10">


                {/* Second Card */}
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-3 h-auto">
                    <img
                        src={image8}
                        alt="Beauty & Care"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold  px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>
                <div className="relative bg-black rounded-[40px] overflow-hidden lg:col-span-3 h-auto">
                    <img
                        src={image8}
                        alt="Beauty & Care"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-6">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold  px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>
                {/* First Card */}
                <div className="relative bg-black text-white rounded-[40px] overflow-hidden lg:col-span-6 h-auto">
                    <img
                        src={image7}
                        alt="Free Shipping Beauty"
                        className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-start p-5">
                        <span className="absolute top-10 left-10 bg-[#F26B0F] text-white text-xx font-semibold px-6 py-3 rounded-full text-center">
                            New
                        </span>
                    </div>
                </div>
            </div>










        </div>
    );
};

export default BeautyTrends;
