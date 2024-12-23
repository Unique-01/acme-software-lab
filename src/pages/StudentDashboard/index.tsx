import HeroImg from "./assets/HeroImg.svg";
import { FaPlay, FaCheckSquare, FaTrophy, FaUserFriends } from "react-icons/fa";
import { MdOutlinePlayCircle } from "react-icons/md";
import { GoChecklist } from "react-icons/go";
import DashboardCard from "./components/DashboardCard";
import ClassComponent from "./components/ClassComponent";

const StudentDashboard: React.FC = () => {
    const cardsData = [
        {
            icon: <MdOutlinePlayCircle className="text-blue-500" size={20} />,
            count: 5,
            label: "Enrolled Courses",
            bgColor: "#f0f4ff",
        },
        {
            icon: <GoChecklist className="text-purple-500" size={20} />,
            count: 2,
            label: "Active Courses",
            bgColor: "#f0f4ff",
        },
        {
            icon: <FaTrophy className="text-green-500" size={20} />,
            count: 3,
            label: "Completed Courses",
            bgColor: "#e6f9ee",
        },
        {
            icon: <FaUserFriends className="text-orange-500" size={20} />,
            count: 2,
            label: "Course Instructors",
            bgColor: "#fff4e6",
        },
    ];

    const getCurrentDate = (): string => {
        const today = new Date();
        return today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };
    return (
        <div className="ps-5 pe-10 py-10 poppins ">
            <div className="flex justify-between flex-wrap items-center">
                <h1 className="text-xl font-medium">
                    Welcome to your Dashboard
                </h1>
                <div className="font-normal text-neutral-600">
                    {getCurrentDate()}
                </div>
            </div>
            <div
                className="w-full rounded-lg mt-10"
                style={{ backgroundColor: "#0E437E" }}>
                <div className="flex justify-between px-5 md:px-10 mb-0 py-5 lg:py-0 items-center">
                    <div className="text-white helvetica">
                        <p>Hello 👋</p>
                        <h2 className="font-bold text-4xl my-3 ">Jane Dara</h2>
                        <div className="font-normal tracking-wide">
                            <p>
                                You’ve learned{" "}
                                <span className="text-red-500">
                                    70% of your{" "}
                                </span>{" "}
                                goal this week!
                            </p>
                            <p>Keep it up and improve your results!</p>
                        </div>
                    </div>
                    <div className="h-64 mb-0 hidden lg:block">
                        <img src={HeroImg} alt="" className="h-full" />
                    </div>
                </div>
            </div>

            <div className="my-5">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {cardsData.map((card, index) => (
                        <DashboardCard
                            key={index}
                            icon={card.icon}
                            count={card.count}
                            label={card.label}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </div>

            <div>
                <ClassComponent />
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-5 gap-3 mt-7">
                <div className="bg-yellow-300 border-[1.5px] border-orange-500 py-6 text-center rounded-lg ">
                    <p className=" text-gray-800 font-semibold mb-3">
                        Total Classes
                    </p>
                    <p className="text-4xl text-orange-800">22</p>
                </div>
                <div className="bg-pink-200 border-[1.5px] border-pink-400 py-6 text-center rounded-lg ">
                    <p className=" text-gray-800 font-semibold mb-3">
                        Attendance
                    </p>
                    <p className="text-4xl text-red-800">60%</p>
                </div>
                <div className="bg-gray-200 border-[1.5px] border-gray-400 py-6 text-center rounded-lg ">
                    <p className=" text-gray-800 font-semibold mb-3">
                        Requested Leaves
                    </p>
                    <p className="text-4xl text-gray-800">17</p>
                </div>
                <div className="bg-purple-200 border-[1.5px] border-purple-400 py-6 text-center rounded-lg ">
                    <p className=" text-gray-800 font-semibold mb-3">
                        Total Task
                    </p>
                    <p className="text-4xl text-purple-900">10</p>
                </div>
                <div className="bg-blue-200 border-[1.5px] border-blue-400 py-6 text-center rounded-lg ">
                    <p className=" text-gray-800 font-semibold mb-3">
                        Total Classes
                    </p>
                    <p className="text-4xl text-blue-800">20%</p>
                </div>
            </div> */}
            <div></div>
            <div></div>
        </div>
    );
};

export default StudentDashboard;
