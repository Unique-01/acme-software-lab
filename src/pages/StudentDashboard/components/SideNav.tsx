// import { Link, NavLink } from "react-router-dom";
// import { MdDashboard } from "react-icons/md";
// import { CgProfile } from "react-icons/cg";
// import { GrSchedulePlay } from "react-icons/gr";
// import { MdOutlinePersonAdd } from "react-icons/md";
// import { BsPersonFillCheck } from "react-icons/bs";
// import AcmeLogo from "assets/acmeLogo.png";
// import { useState } from "react";
// import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";

// const SideNav: React.FC = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <div className=" py-10 poppins font-medium text-neutral-600 bg-gray-100 sticky top-0 min-h-screen flex flex-col items-center">
//            <div> <TbLayoutSidebarLeftCollapse /></div>
//             <div className="mb-14">
//                 <Link to="/">
//                     <img src={AcmeLogo} alt="ACME" className="max-w-44" />
//                 </Link>
//             </div>
//             <div>
//                 <ul className="grid gap-8">
//                     <li>
//                         <NavLink
//                             to="/student"
//                             end
//                             className="flex gap-3 items-center text-lg">
//                             <span>
//                                 <MdDashboard size={24} />
//                             </span>
//                             <span>Dashboard</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/student/profile"
//                             className="flex gap-3 items-center text-lg">
//                             <span>
//                                 <CgProfile size={24} />
//                             </span>
//                             <span>Profile</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/student/registration"
//                             className="flex gap-3 items-center text-lg">
//                             <span>
//                                 <MdOutlinePersonAdd size={24} />
//                             </span>
//                             <span>Registration</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/student/timetable"
//                             className="flex gap-3 items-center text-lg">
//                             <span>
//                                 <GrSchedulePlay size={24} />
//                             </span>
//                             <span>Timetable</span>
//                         </NavLink>
//                     </li>
//                     <li>
//                         <NavLink
//                             to="/student/attendance"
//                             className="flex gap-3 items-center text-lg">
//                             <span>
//                                 <BsPersonFillCheck size={24} />
//                             </span>
//                             <span>Attendance</span>
//                         </NavLink>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default SideNav;
import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlinePersonAdd } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
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
                className={`fixed lg:sticky top-0 left-0 min-h-screen transition-transform duration-300 z-20 bg-gray-100 
                ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } lg:translate-x-0 py-10 w-64 lg:w-full`}>
                <div className="flex flex-col items-center py-4">
                    {/* Logo */}
                    <div className="mb-14">
                        <Link to="/">
                            <img
                                src={AcmeLogo}
                                alt="ACME"
                                className="max-w-44"
                            />
                        </Link>
                    </div>

                    {/* Nav links */}
                    <div>
                        <ul className="grid gap-8">
                            <li>
                                <NavLink
                                    to="/student"
                                    end
                                    className="flex gap-3 items-center text-lg">
                                    <MdDashboard size={24} />
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/student/profile"
                                    className="flex gap-3 items-center text-lg">
                                    <CgProfile size={24} />
                                    <span>Profile</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/student/registration"
                                    className="flex gap-3 items-center text-lg">
                                    <MdOutlinePersonAdd size={24} />
                                    <span>Registration</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/student/timetable"
                                    className="flex gap-3 items-center text-lg">
                                    <GrSchedulePlay size={24} />
                                    <span>Timetable</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/student/attendance"
                                    className="flex gap-3 items-center text-lg">
                                    <BsPersonFillCheck size={24} />
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
