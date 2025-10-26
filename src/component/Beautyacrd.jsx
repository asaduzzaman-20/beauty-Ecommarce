
import MyImage11 from '../assets/images/imageglo/11.png'; // Import the image file

const Beautycard = ({ title, imageUrl }) => {
    return (
 


        <>

            <div className=" py-10 px-5 grid sm:content-center bg-gray-50 bodycolor">
               
                <div className=" inset-0 flex  justify-center items-start p-6 m-6">
                    <h2 className="text-xl text-black md:text-2xl font-bold">Free Shipping Beauty</h2>

                </div>
                {/* Card Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 sm:content-center">
                    {/* Single Card */}
                    {[MyImage11, MyImage11, MyImage11, MyImage11, MyImage11, MyImage11,MyImage11, MyImage11].map((item, index) => (
                        <div
                            key={index}
                            className="relative   overflow-hidden"
                        >
                            {/* Badge */}
                            {/* <span className="absolute top-3 left-3 bg-pink-200 text-pink-700 text-xs font-semibold px-2 py-1 rounded">
          New
        </span> */}
                            {/* Image */}
                            <img
                                src={item} // Replace with actual image paths or dynamic import
                                alt="Beauty Trend"
                                className=" w-full h-auto object-cover h-96 "
                            />
                            <div className="h1">
                                <h2 className="font-medium text-4xl flex justify-center p-4">this is product</h2>

                            </div>
                        </div>
                    ))}
                </div>
            </div>






        </>

    );
};

export default Beautycard;