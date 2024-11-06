import { Link, NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GrSchedulePlay } from "react-icons/gr";
import { MdOutlinePersonAdd } from "react-icons/md";
import { BsPersonFillCheck } from "react-icons/bs";
import AcmeLogo from "assets/acmeLogo.png";

const SideNav: React.FC = () => {
    return (
        <div className=" py-10 poppins font-medium text-neutral-600 bg-gray-100 sticky top-0 min-h-screen flex flex-col items-center">
            <div className="mb-14">
                <Link to="/">
                    <img src={AcmeLogo} alt="ACME" className="max-w-44" />
                </Link>
            </div>
            <div>
                <ul className="grid gap-8">
                    <li>
                        <NavLink
                            to="/student"
                            className="flex gap-3 items-center text-lg">
                            <span>
                                <MdDashboard size={24} />
                            </span>
                            <span>Dashboard</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/student/profile"
                            className="flex gap-3 items-center text-lg">
                            <span>
                                <CgProfile size={24} />
                            </span>
                            <span>Profile</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/student/registration"
                            className="flex gap-3 items-center text-lg">
                            <span>
                                <MdOutlinePersonAdd size={24} />
                            </span>
                            <span>Registration</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/student/timetable"
                            className="flex gap-3 items-center text-lg">
                            <span>
                                <GrSchedulePlay size={24} />
                            </span>
                            <span>Timetable</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/student/attendance"
                            className="flex gap-3 items-center text-lg">
                            <span>
                                <BsPersonFillCheck size={24} />
                            </span>
                            <span>Attendance</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideNav;
