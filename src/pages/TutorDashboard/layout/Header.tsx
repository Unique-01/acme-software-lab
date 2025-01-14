import { Link } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { useHeaderTitle } from "../../hooks/useHeaderTitle"; // Import the custom hook
import { IoSettingsOutline } from "react-icons/io5";
import SearchBar from "../components/SearchBar"; // Import the reusable SearchBar component

const Header: React.FC = () => {
    const title = useHeaderTitle(); // Use the custom hook

    return (
        <div className="w-full p-5 pt-10">
            <div className="flex flex-col md:flex-row space-y-3 justify-between items-center">
                <h1 className="text-3xl text-blue-900 font-bold">{title}</h1>
                <SearchBar placeholder="Search here..." /> {/* Use the reusable SearchBar component */}
                <div className="flex gap-5 items-center">
                    <Link
                        to=""
                        className="bg-white p-3 rounded-full text-gray-500">
                        <BsBellFill size={20} />
                    </Link>
                    <Link
                        to=""
                        className="bg-white p-3 rounded-full text-gray-600">
                        <IoSettingsOutline size={20} />
                    </Link>
                    <Link to="" className="flex items-center gap-3">
                        <div className="flex flex-col text-end">
                            <span className="text-blue-800 text-sm">
                                Nabila A.
                            </span>
                            <span className="text-xs text-gray-500">Admin</span>
                        </div>
                        <div className="bg-white p-3 rounded-full text-gray-500">
                            <FaUser size={20} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
