import { FaPlus } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import SearchBar from "../SearchBar";

const students = [
    {
        id: 1,
        name: "John Doe",
        class: "Grade 10",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        id: 2,
        name: "Jane Smith",
        class: "Grade 11",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
        id: 3,
        name: "Alice Johnson",
        class: "Grade 12",
        image: "https://randomuser.me/api/portraits/women/3.jpg",
    },
    {
        id: 4,
        name: "Bob Brown",
        class: "Grade 9",
        image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
        id: 5,
        name: "Charlie Davis",
        class: "Grade 8",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
];

interface StudentProps {
    student: {
        id: string | number;
        name: string;
        image?: string;
        contact?: string;
        class: string;
    };
}

const StudentCard: React.FC<StudentProps> = ({ student }) => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
                <img src={student.image} alt="" className="w-16 h-16 rounded-full" />
                <div>
                    <p className="text-blue-800 font-bold text-xl">
                        {student.name}
                    </p>
                    <p className="text-gray-400">{student.class}</p>
                </div>
            </div>

            <div className="border text-gray-400 p-4 rounded-full ">
                <FaRegEnvelope size={30} />
            </div>
        </div>
    );
};

const StudentList: React.FC = () => {
    return (
        <div className="bg-white p-5 pt-7 rounded-2xl space-y-5">
            <div className="flex justify-between items-center">
                <div className="space-y-3">
                    <h1 className="text-blue-900 font-bold text-2xl">
                        Students
                    </h1>
                    <p className="text-gray-500 font-normal ">
                        You have{" "}
                        <span className="text-blue-800 font-semibold">741</span>{" "}
                        contacts
                    </p>
                </div>
                <button className="bg-blue-900 rounded-full text-white w-14 h-14 flex items-center justify-center">
                    <FaPlus size={20} />
                </button>
            </div>
            <div>
                <SearchBar placeholder="Search students..." />
            </div>
            <div className="space-y-5">
                {students.map((student) => (
                    <StudentCard key={student.id} student={student} />
                ))}
            </div>
        </div>
    );
};

export default StudentList;
