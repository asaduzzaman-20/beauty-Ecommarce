import MyImage10 from '../assets/images/imageglo/10.png'; // Import the image file
import MyImage from '../assets/images/imageglo/back.png'; // Import the image file



const Productcard = ({ title, imageUrl }) => {
  return (
    <>
      <div className=" py-10 px-5 grid sm:content-center bg-gray-50">
            <div className="text-center mb-8 relative p-20">
                <h1 className="text-3xl md:text-4xl font-bold text-black absolute inset-x-1/4">
            SHOP BY CONCERN
                </h1>
                <p className="mt-2 text-orange-500 text-lg font-semibold absolute top-0 end-96">
            <img src={MyImage} alt="" />

                </p>
            </div>
        {/* Card Grid */}
        <div className=" max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 sm:content-center ">
          {/* Single Card */}
          {[MyImage10, MyImage10, MyImage10, MyImage10, MyImage10, MyImage10, MyImage10, MyImage10].map((item, index) => (
            <div
              key={index}
              className="relative  rounded-t-full  rounded-b-2xl overflow-hidden "
            >
              {/* Badge */}
              {/* <span className="absolute top-3 left-3 bg-pink-200 text-pink-700 text-xs font-semibold px-2 py-1 rounded">
          New
        </span> */}
              {/* Image */}
              <img
                src={item} // Replace with actual image paths or dynamic import
                alt="Beauty Trend"
                className=" w-full  object-cover h-auto shadow-2xl"
              />
              <div className="p-5 text-center bg-transparent">
                
                <a href="#" className="inline-flex items-center p-2 font-medium text-4xl  text-[#525659] font-medium   rounded-lg ">
                  facewash
                  
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
};

export default Productcard;