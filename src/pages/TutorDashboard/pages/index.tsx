import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";
import React, { useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import StudentList from "../components/dashboard/StudentList";
import MessageList from "../components/dashboard/MessageList";

const TutorDashboard: React.FC = () => {
    useEffect(() => {
        updateHeaderTitle("Tutor Dashboard");
    }, []);
    return (
        <div className="p-5">
            <div className="grid lg:grid-cols-3">
                <div className="col-span-2 space-y-10">
                    <div className="rounded-lg  relative bg-white">
                        <div className="bg-blue-800 p-5 rounded-t-lg h-28 relative z-10"></div>
                        <div className="absolute top-10 left-10 z-10 h-32 w-32 rounded-full border-4 border-white bg-gray-400"></div>
                        <div className="mt-10 p-10 grid md:grid-cols-3 items-end space-y-3">
                            <div className="space-y-3">
                                <p className="text-blue-800 text-3xl font-bold">
                                    Nabila Azalea
                                </p>
                                <p className="text-lg font-semibold text-blue-800">
                                    Admin
                                </p>
                                <p className="text-gray-500 inline-flex items-center gap-2">
                                    <span>
                                        <MdOutlineLocationOn size={20} />
                                    </span>
                                    <span className="text-lg">
                                        Jakarta, Indonesia
                                    </span>
                                </p>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-500 font-normal text-lg">
                                    Phone
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-400 rounded-full p-3 inline-flex  text-white">
                                        <LuPhone size={20} />
                                    </div>
                                    <p className="text-blue-900 font-semibold">
                                        +263373673737
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <p className="text-gray-500 font-normal text-lg">
                                    Email
                                </p>
                                <div className="flex items-center gap-3">
                                    <div className="bg-orange-400 rounded-full p-3 inline-flex  text-white">
                                        <HiOutlineEnvelope size={20} />
                                    </div>
                                    <p className="text-blue-900 font-semibold">
                                        jordan@mail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <div>
                            <StudentList />
                        </div>
                        <div>
                            <MessageList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TutorDashboard;
