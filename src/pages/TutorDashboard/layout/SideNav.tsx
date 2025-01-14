import { Link, NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { IoCalendar } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import AcmeLogo from "assets/acmeLogo.png";
import { useState } from "react";
import {
    TbLayoutSidebarLeftCollapse,
    TbLayoutSidebarRightExpand,
} from "react-icons/tb";

const SideNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle button for mobile */}
            <button
                className="lg:hidden absolute top-4 left-4 text-2xl"
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <TbLayoutSidebarLeftCollapse />
                ) : (
                    <TbLayoutSidebarRightExpand />
                )}
            </button>

            {/* Sidebar */}
            <div
                className={`fixed lg:sticky top-0 left-0 min-h-screen transition-transform duration-300 z-20 bg-blue-800 
                ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 py-10 w-64`}>
                <div className="flex flex-col items-center py-4">
                    {/* Logo */}
                    <div className="mb-14 bg-white p-3 rounded-lg">
                        <Link to="/">
                            <img
                                src={AcmeLogo}
                                alt="ACME"
                                className="max-w-40"
                            />
                        </Link>
                    </div>

                    {/* Nav links */}
                    <div className="w-full ps-10">
                        <ul className="grid gap-5 w-full">
                            <li>
                                <NavLink
                                    to="/tutor"
                                    end
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <FiHome size={24} />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tutor/students"
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <FaUserGraduate size={24} />
                                    <span>Students</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tutor/registration"
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <IoCalendar size={24} />
                                    <span>Schedule</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tutor/timetable"
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <IoChatbubblesOutline size={24} />
                                    <span>Chat</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tutor/attendance"
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <FaFilePen size={24} />
                                    <span>Assign Task</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/tutor/attendance"
                                    className={({ isActive }) =>
                                        `flex gap-3 items-center text-lg text-gray-200 p-3 px-5 w-full ${
                                            isActive ? "tutor-active" : ""
                                        }`
                                    }>
                                    <IoMdCheckmarkCircleOutline size={24} />
                                    <span>Attendance</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile when sidebar is open */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default SideNav;
