import { Link } from "react-router-dom";
import UserImg from "./assets/user.png";
import { BsArrowRight } from "react-icons/bs";
import ProfileTabNavigation from "./components/ProfileTabNavigation";

interface UserProps {
    image: string;
    name: string;
    bio: string;
}

const Profile: React.FC = () => {
    const UserDetails: UserProps = {
        image: UserImg,
        name: "Kelvin Gilbert",
        bio: "Web Designer & Best-Selling Instructor",
    };

    return (
        <div className="ms-5 my-5">
            <div className="">
                <h1 className="poppins text-xl">Profile</h1>
                <div className="border p-10 flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <img
                            src={UserDetails.image}
                            alt=""
                            className="size-28 rounded-full"
                        />
                        <div>
                            <p className="font-semibold text-2xl mb-5">
                                {" "}
                                {UserDetails.name}
                            </p>
                            <p className="text-gray-600 font-normal text-xs">
                                {UserDetails.bio}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Link
                            to={""}
                            className="bg-blue-100 text-blue-700 p-3 px-5 font-semibold flex gap-3  items-center">
                            Become Instructor <BsArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
            <ProfileTabNavigation />
        </div>
    );
};

export default Profile;
