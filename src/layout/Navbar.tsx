import React, { useState } from "react";
import {
    RiSearchLine,
    RiArrowDownSLine,
    RiMenu3Line,
    RiCloseLine,
} from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
// import AcmeLogo from "assets/acme-logo.png";
import Acme from "assets/acmeLogo.png";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="container mx-auto mt-3 py-4">
            <div className="flex flex-wrap md:gap-4 lg:gap-0 md:justify-center lg:justify-between items-center">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <img src={Acme} alt="ACME Logo" className="w-32 mb-3" />
                    <div className="flex items-center md:hidden ">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-2xl transition-all duration-500 ease-in-out">
                            {menuOpen ? <RiCloseLine /> : <RiMenu3Line />}
                        </button>
                    </div>
                </div>

                <div className="flex items-center border border-indigo-700 p-1 rounded-md w-full md:w-auto  lg:w-1/3 mt-3 md:mt-0">
                    <div className="px-2">
                        <RiSearchLine className="text-xl text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Want to learn?"
                        className="outline-none w-full h- mr-4 text-sm"
                    />
                    <button className="text-indigo-700 text-sm font-semibold bg-blue-50 px-4 py-1.5 rounded-md flex items-center gap-2">
                        Explore <RiArrowDownSLine className="text-xl" />
                    </button>
                </div>
                <div
                    className={`w-full transition-all duration-500 ease-in-out  md:flex md:items-center md:w-auto mt-3 lg:mt-0 ${
                        menuOpen
                            ? "max-h-[500px] opacity-100"
                            : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
                    }`}>
                    <ul className="flex flex-col md:flex-row gap-4  my-3 md:my-0 text-center  w-full md:w-auto text-xs">
                        <li>
                            <NavLink to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                onClick={() => setMenuOpen(false)}>
                                About us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/courses"
                                onClick={() => setMenuOpen(false)}>
                                Courses
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                onClick={() => setMenuOpen(false)}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/faq"
                                onClick={() => setMenuOpen(false)}>
                                FAQ'S
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="flex justify-center row gap-4 mt-5 md:mt-0 md:ml-6 text-center  w-full md:w-auto text-xs">
                        <li>
                            <Link
                                to="/signup"
                                className="bg-gray-50 p-3 rounded-md shadow-sm"
                                onClick={() => setMenuOpen(false)}>
                                Sign up
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="bg-blue-700 text-white p-3 rounded-md shadow"
                                onClick={() => setMenuOpen(false)}>
                                Log in
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
