import AcmeLogo from "assets/acmeLogo2.png";
import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
} from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <div className="bg-gray-800 text-gray-300 py-16">
            <div className="container">
                {/* Grid Layout for Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="">
                        <img
                            src={AcmeLogo}
                            alt="acme-logo"
                            className="w-40 mb-10"
                        />
                        <p className="text-gray-300 text-lg tracking-wider font-normal leading-9">
                            Where your journey towards technological excellence
                            begins.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:pl-5">
                        <h3 className="text-white font-semibold mb-4 text-2xl">
                            Quick Links
                        </h3>
                        <ul className="space-y-3 text-lg font-normal tracking-wider">
                            <li>
                                <Link to="" className="hover:text-white">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-white">
                                    Our Class
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-2xl">
                            Resources
                        </h3>
                        <ul className="space-y-3 text-lg font-normal tracking-wider">
                            <li>
                                <Link to="" className="hover:text-white">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-white">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="hover:text-white">
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-2xl">
                            Social Media
                        </h3>
                        <div className="flex space-x-7 text-2xl font-normal">
                            <a
                                href=" "
                                aria-label="Facebook"
                                className="hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a
                                href=" "
                                aria-label="Twitter"
                                className="hover:text-white">
                                <FaTwitter />
                            </a>
                            <a
                                href=" "
                                aria-label="Instagram"
                                className="hover:text-white">
                                <FaInstagram />
                            </a>
                            <a
                                href=" "
                                aria-label="LinkedIn"
                                className="hover:text-white">
                                <FaLinkedinIn />
                            </a>
                            <a
                                href=" "
                                aria-label="YouTube"
                                className="hover:text-white">
                                <FaYoutube />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
