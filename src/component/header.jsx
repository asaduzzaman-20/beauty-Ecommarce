import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-900 shadow-lg">
            <div className="container mx-auto  py-3 lg:max-w-full items-center  ">
                {/* Logo */}
                <div className=' lg:grid lg:grid-cols-12 lg:max-w-7xl mx-auto p-4'>
                    <div className="text-white font-bold text-xl lg:col-span-4">
                        <div className="">
                            LOGO AREA
                        </div>
                    </div>

                    {/* Search Bar (Visible on larger screens) */}
                    <div className="hidden lg:block  lg:col-span-4">
                        <div className=''>
                            <form className="">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-8 py-2 rounded-full text-sm bg-white text-gray-700 placeholder-gray-400 border focus:outline-none focus:ring-2 focus:ring-blue-300 w-96"
                                />
                                {/* <button
                            type="submit"
                            className="absolute right-2 top-2 text-blue-600 hover:text-blue-800 focus:outline-none"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 10h.01M21 21l-4.35-4.35m1.24-4.1a7 7 0 11-1.24 1.24z"
                                />
                            </svg>
                        </button> */}
                            </form>
                        </div>
                    </div>

                    {/* Hamburger Menu for Mobile */}
                    <div className="lg:hidden  ">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="icon lg:col-span-4 lg:flex lg:justify-end hidden">
                        <div className='text-white '>
                            <span className='p-1 '>icon</span>
                            <span className='p-1'>icon</span>
                            <span className='p-1'>icon</span>
                        </div>

                    </div>
                </div>
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } w-full lg:w-auto lg:flex lg:items-center lg:border-t  p-4`}
                >

                    <ul className=" lg:space-x-6 text-white text-sm mt-4 lg:mt-0 w-full lg:flex  lg:justify-center sm:block">
                        <li>
                            <a href="#" className="sm:block px-2 py-1 hover:bg-slate-700 rounded">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-slate-700 rounded">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-slate-700 rounded">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="block px-2 py-1 hover:bg-slate-700 rounded">
                                Contact
                            </a>
                        </li>

                        {/* Search Bar (Visible on small screens) */}
                        {/* <li className="block lg:hidden mt-2">
                            <form className="flex items-center">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="px-4 py-2 rounded-l-full text-sm bg-white text-gray-700 placeholder-gray-400 border focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-white rounded-r-full text-blue-600 hover:text-blue-800 focus:outline-none"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 10h.01M21 21l-4.35-4.35m1.24-4.1a7 7 0 11-1.24 1.24z"
                                        />
                                    </svg>
                                </button>
                            </form>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
