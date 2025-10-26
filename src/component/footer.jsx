// import React from 'react';

// const futter = () => {
//     return (
//         <>



//         </>
//     );
// };

// export default futter;



// import React from 'react';

// const futter = () => {
//     return (
//         <>



//         </>
//     );
// };

// export default futter;



import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-8">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">How Can We Help?</h3>
                    <ul className="space-y-2">
                        <li>Glowthentic Branches</li>
                        <li>Contact Us</li>
                        <li>FAQ</li>
                        <li>Our Brand</li>
                        <li>Blog</li>
                    </ul>
                </div>

                {/* Middle Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li>Women Make Up</li>
                        <li>Women Skincare</li>
                        <li>Gifts & Sets</li>
                    </ul>
                </div>

                {/* Right Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">
                        Keep In Touch With Glowthentic
                    </h3>
                    <p className="mb-4">
                        Join The Glowthentic Newsletter And Be First To Hear About News,
                        Offers, And Skincare Advice.
                    </p>
                    <div className="flex items-center mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="flex-grow p-2 text-white bg-transparent  border-b-2"
                        />
                        <button className="bg-transparent text-white px-4 py-2 rounded border-2">
                            Subscribe
                        </button>
                    </div>
                    <label className="flex items-center space-x-2 text-sm">
                        <input type="checkbox" />
                        <span>
                            By Submitting Your Email, You Agree To Receive Advertising Emails
                            From Glowthentic. Please Review Our Privacy Policy.
                        </span>
                    </label>
                </div>
            </div>

            {/* Bottom Section */}
            <div className=" mt-8 p-4 text-sm">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <p>📍 House 41, Block E, Road 06, Banasree, Dhaka, Bangladesh</p>
                        <span className="hidden md:inline">|</span>
                        <p>📞 1-802-526-2463</p>
                    </div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-blue-400">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            facebook
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            Pinterest
                        </a>
                        <a href="#" className="hover:text-blue-400">
                            Reddit
                        </a>
                    </div>
                </div>
                <div className="text-start mt-4 border-t bg-gray-950 pt-4">
                    <p className="inline-block ">© 2023 sobrokom. All Rights Reserved.</p>
                    <p className="mt-1 inline-block">
                        <a href="#" className="hover:text-blue-400">
                            Terms & Conditions
                        </a>{" "}
                        |{" "}
                        <a href="#" className="hover:text-blue-400">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


