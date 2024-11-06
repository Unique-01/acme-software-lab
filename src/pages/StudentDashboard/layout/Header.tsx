import { RiHome5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className="bg-white shadow-lg w-full p-5 text-neutral-500">
            <div className="container">
                <div className="flex justify-end">
                    <div className="flex gap-5 items-center">
                        <Link to="">
                            <BsBellFill />
                        </Link>
                        <Link to="" className="text-blue-800">
                            <RiHome5Fill />
                        </Link>
                        <Link to="">
                            <FaUser />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
