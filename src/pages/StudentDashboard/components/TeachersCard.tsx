import { FaStar } from "react-icons/fa";

interface TeacherCardProps {
    name: string;
    role: string;
    students: number;
    rating: number;
    image: string;
}

const TeachersCard: React.FC<TeacherCardProps> = ({
    name,
    role,
    students,
    rating,
    image,
}) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200  shadow-md overflow-hidden">
            <img src={image} alt={name} className="w-full h-80 object-cover" />
            <div className="text-center p-3">
                <h3 className="text-lg ">{name}</h3>
                <h3 className="font-normal text-sm  text-gray-500">{role}</h3>
            </div>
            <div className="border p-4">
                <div className="pb-3 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1">
                        <FaStar className="text-orange-500" size={19} />
                        <span className="font-normal">{rating.toFixed(1)}</span>
                    </div>
                    <div className="font-normal">
                        <p className="text-gray-800">{students.toLocaleString()} <span className="text-gray-400 text-sm">students</span></p>
                    </div>
                </div>
                <button className="w-full py-2 px-4 bg-blue-50 text-blue-700 font-semibold  hover:bg-blue-100  transition-colors ease-in-out duration-200">
                    Send Message
                </button>
            </div>
        </div>
    );
};

export default TeachersCard;
