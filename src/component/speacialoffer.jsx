import MyImage13 from '../assets/images/imageglo/13.png'; // Import the image file



const Special = ({ title, imageUrl }) => {
    return (
        <>
            <div className=" w-full bg-[#faedf1] p-2 ">


                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 m-10 flex">
                    {/* First Card */}
                    <div className=" bg-black text-white  overflow-hidden lg:col-span-6 h-auto">
                        <img
                            src={MyImage13}
                            alt="Free Shipping Beauty"
                            className="w-full h-full object-cover opacity-80"
                        />

                    </div>

                    {/* Second Card */}
                    <div className="   overflow-hidden lg:col-span-6 h-auto flex justify-center align-center  ">

                        <div className="inset-0 flex flex-col justify-center align-center text-center  p-6 h-auto">
                            <h2 className="text-xl text-center md:text-2xl font-bold"> Special offers</h2>
                            <h2 className="text-xl text-center md:text-4xl font-bold  text-[#F26B0F] font-medium ">Save up to 50%</h2>
                            <p > Mother’s Day is coming! <br />
                                For everything she’s given you, it's time to give back. Shower her with love,<br />
                                happiness, and the best of Beautya. </p>
                            <p className="text-[#F26B0F] ">visit your local beautya branches to find out more about our special offers <br />                            in make up and skincare products. </p>
                        </div>
                    </div>
                </div>
            </div>




        </>

    )
}

export default Special;