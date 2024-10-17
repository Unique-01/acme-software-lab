import bgImage from "../assets/joinImg.jpeg";
import { FaArrowRight } from "react-icons/fa6";
const JoinUs: React.FC = () => {
    return (
        <div>
            <div
                className="relative bg-cover bg-center py-14"
                style={{ backgroundImage: `url(${bgImage})` }}>
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-neutral-900 bg-opacity-90"></div>

                {/* Content */}
                <div className="container relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                    <h2 className="text-lg mb-2 font-bold ">Join Us</h2>
                    <h1 className="text-4xl font-normal mb-6 poppins">
                        Holiday ICT Training for Students
                    </h1>
                    <p className="max-w-lg mb-8 font-normal text-sm">
                        Unlock the power of technology this holiday season with
                        our engaging and interactive ICT training program for
                        students. Designed to inspire and educate.
                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4 transition-all duration-500 ease-in-out">
                        <button className=" flex items-center gap-3 px-6 py-3 bg-blue-700 hover:bg-blue-800 rounded-full text-white font-normal transition">
                            Register <FaArrowRight />
                        </button>
                        <button className="flex gap-3 items-center px-6 py-3 border  hover:bg-neutral-900 rounded-full text-white font-normal transition">
                            More Enquiries <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUs;
