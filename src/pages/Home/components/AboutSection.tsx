// import React from "react";
// import { LuArrowRight } from "react-icons/lu";

// const AboutSection: React.FC = () => {
//     return (
//         <div className="container mx-auto my-20">
//             <div className="grid grid-cols-2 justify-center">
//                 <div className="w-3/4 mx-auto">
//                     <img src="/assets/image.png" alt="about" className="" />
//                 </div>
//                 <div>
//                     <div className="flex items-center gap-5">
//                         <div className="bg-indigo-700 w-14 h-1"></div>{" "}
//                         <p className="text-gray-600 text-xl font-normal">
//                             About Us
//                         </p>
//                     </div>
//                     <div className="max-w-[400px]">
//                         <h1 className="text-3xl jakarta-font font-semibold  text-wrap text-indigo-950 mt-3 ">
//                             Training and consulting company
//                         </h1>
//                         <p className="text-gray-500 mt-6 text-base font-normal leading-8 ">
//                             At ACME Software Lab, we are passionate about
//                             empowering individuals and organizations through
//                             innovative training and consulting services. As a
//                             leading provider in the tech industry, our mission
//                             is to bridge the gap between technology and talent,
//                             helping our clients achieve their fullest potential.
//                         </p>
//                     </div>
//                     <div className="mt-3">
//                         <button className="flex items-center bg-blue-700 text-white p-4 px-5 font-semibold rounded-xl gap-4">
//                             Learn more <LuArrowRight />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutSection;

import React from "react";
import { LuArrowRight } from "react-icons/lu";
import AboutImg from "../assets/aboutImg.jpeg"

const AboutSection: React.FC = () => {
    return (
        <div className="bg-gray-50">
            <div className="container mx-auto py-20">
                <div className="grid grid-flow-col gap-20 justify-center items-center">
                    <div className="mx-auto hidden lg:block">
                        <img
                            src={AboutImg}
                            alt="about"
                            className="w-[500px] h-[450px] rounded-2xl object-cover"
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-5 mb-5">
                            <div className="bg-indigo-700 w-14 h-1"></div>
                            <p className="text-gray-600 text-2xl font-normal">
                                About Us
                            </p>
                        </div>
                        <div className="max-w-[500px]">
                            <h1 className="text-4xl jakarta-font font-semibold  text-wrap text-indigo-950 mt-3 ">
                                Training and consulting company
                            </h1>
                            <p className="text-gray-500 mt-8 text-xl font-normal tracking-wide leading-9 ">
                                At ACME Software Lab, we are passionate about
                                empowering individuals and organizations through
                                innovative training and consulting services. As
                                a leading provider in the tech industry, our
                                mission is to bridge the gap between technology
                                and talent, helping our clients achieve their
                                fullest potential.
                            </p>
                        </div>
                        <div className="mt-3">
                            <button className="flex items-center bg-blue-800 text-white p-5 px-7 text-xl font-bold rounded-2xl gap-4">
                                Learn more <LuArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 grid-cols-2 gap-14 md:gap-y-14 md:gap-0 justify-center mt-16 ">
                    <div className=" text-center">
                        <h1 className="text-5xl jakarta-font font-bold">5<span className="text-blue-800">+</span></h1>
                        <p className="text-gray-500 font-normal mt-5">Years of <br/>experience</p>
                    </div>
                    <div className=" text-center">
                        <h1 className="text-5xl jakarta-font font-bold">1<span className="text-blue-800">k+</span></h1>
                        <p className="text-gray-500 font-normal mt-5">Clients <br/> worldwide</p>
                    </div>
                    <div className=" text-center">
                        <h1 className="text-5xl jakarta-font font-bold text-blue-800">20+</h1>
                        <p className="text-gray-500 font-normal mt-5">Courses</p>
                    </div>
                    <div className=" text-center">
                        <h1 className="text-5xl jakarta-font font-bold text-blue-800">100%</h1>
                        <p className="text-gray-500 font-normal mt-5">Student <br/> satisfactions</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
