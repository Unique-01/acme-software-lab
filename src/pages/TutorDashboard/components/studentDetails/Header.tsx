import { FaRegUser } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";

const Header: React.FC = () => {
    return (
        <div>
            <div className="rounded-lg  relative bg-white">
                <div className="bg-blue-800 p-5 rounded-t-lg h-28 relative z-10"></div>
                <div className="absolute top-10 left-10 z-10 h-32 w-32 rounded-full border-4 border-white bg-gray-400"></div>
                <div className="mt-10 p-8">
                    <div className="space-y-3">
                        <p className="text-blue-800 text-3xl font-bold">
                            Nabila Azalea
                        </p>
                        <p className=" text-gray-500">Student</p>
                    </div>
                    <div className="flex justify-between mt-5">
                        <div className="space-y-3">
                            <p className="text-gray-500 font-normal">Course</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 rounded-full p-2 inline-flex  text-white">
                                    <FaRegUser size={18} />
                                </div>
                                <p className="text-blue-900 font-semibold">
                                    Data Analysis
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-500 font-normal">Address</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 rounded-full p-2 inline-flex  text-white">
                                    <MdOutlineLocationOn size={18} />
                                </div>
                                <p className="text-blue-900 font-semibold">
                                    Jakarta Indonesia
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <p className="text-gray-500 font-normal">Phone</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 rounded-full p-2 inline-flex  text-white">
                                    <LuPhone size={18} />
                                </div>
                                <p className="text-blue-900 font-semibold">
                                    +34878472378
                                </p>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-gray-500 font-normal">Email</p>
                            <div className="flex items-center gap-2">
                                <div className="bg-orange-400 rounded-full p-2 inline-flex  text-white">
                                    <HiOutlineEnvelope size={18} />
                                </div>
                                <p className="text-blue-900 font-semibold">
                                    jordan@mail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Header