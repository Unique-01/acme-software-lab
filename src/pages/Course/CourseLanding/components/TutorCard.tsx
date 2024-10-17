import { FaLinkedin, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface Tutor {
    image: string;
    name: string;
    role: string;
    experience: string;
    twitter?: string;
    linkedin?: string;
}

interface TutorProps {
    tutor: Tutor;
}

const TutorCard: React.FC<TutorProps> = ({ tutor }) => {
    return (
        <div className="bg-neutral-100 p-8">
            <div className="flex flex-col items-center text-center">
                <img
                    src={tutor.image}
                    alt="Tutor"
                    className="w-20 h-20 rounded-full mb-5"
                />
                <p className="font-medium text-lg">{tutor.name}</p>
                <p className="text-blue-600 font-normal text-sm mb-4 tracking-wide">
                    {tutor.role}
                </p>
                <p className="text-gray-500 font-normal text-sm leading-6 tracking-wide">
                    {tutor.experience}
                </p>
                <div className="text-gray-400 flex gap-4 mt-5">
                    <Link to={tutor.twitter ? tutor.twitter : ""}>
                        <FaTwitter />
                    </Link>
                    <Link to={tutor.linkedin ? tutor.linkedin : ""}>
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TutorCard;
