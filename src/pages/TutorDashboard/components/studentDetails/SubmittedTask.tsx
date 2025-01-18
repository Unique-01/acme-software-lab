import React from "react";
import { CiCalendar } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";

interface SubmittedTaskCardProps {
    title: string;
    category: string;
    date: string;
    time: string;
    image: string;
    color: string;
}

const borderColors = [
    "border-s-red-500",
    "border-s-yellow-500",
    "border-s-gray-600",
    "border-s-blue-800",
];

const SubmittedTaskCard: React.FC<SubmittedTaskCardProps> = ({
    title,
    category,
    date,
    time,
    image,
    color,
}) => {
    return (
        <div className={`border-s-8 rounded-xl   mb-4 bg-white ${color}`}>
            <div className={`border-s-8 ${color} p-4`}>
                <div>
                    <h2 className="text-blue-800 text-xl font-semibold">
                        {title}
                    </h2>
                    <p className="text-gray-400 font-normal text-sm">
                        {category}
                    </p>
                </div>
                <div className="flex justify-between items-center mt-5">
                    <div className="text-gray-400 font-normal space-y-2 text-sm">
                        <p className="flex items-center gap-3">
                            <CiCalendar size={25} className="text-pink-500" />
                            {date}
                        </p>
                        <p className="flex items-center gap-3">
                            <IoTimeOutline
                                size={25}
                                className="text-orange-500"
                            />
                            {time}
                        </p>
                    </div>
                    <div>
                        <img
                            src={image}
                            alt=""
                            className="size-16 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const SubmittedTask: React.FC = () => {
    const tasks = [
        {
            title: "Math Homework",
            category: "Homework",
            date: "2023-10-01",
            time: "10:00 AM",
            image: "https://example.com/image1.jpg",
        },
        {
            title: "Science Project",
            category: "Project",
            date: "2023-10-02",
            time: "2:00 PM",
            image: "https://example.com/image2.jpg",
        },
        {
            title: "History Essay",
            category: "Essay",
            date: "2023-10-03",
            time: "4:00 PM",
            image: "https://example.com/image3.jpg",
        },
        {
            title: "History Essay",
            category: "Essay",
            date: "2023-10-03",
            time: "4:00 PM",
            image: "https://example.com/image3.jpg",
        },
    ];

    return (
        <div className=" space-y-5">
            <div className="bg-white p-6 rounded-xl space-y-3">
                <h2 className="font-bold text-2xl text-blue-800">
                    Submitted Tasks
                </h2>
                <p className="font-normal text-xsm text-gray-400">
                    Thursday, 24, 2025
                </p>
            </div>
            <div>
                {tasks.map((task, index) => (
                    <SubmittedTaskCard
                        key={index}
                        title={task.title}
                        category={task.category}
                        date={task.date}
                        time={task.time}
                        image={task.image}
                        color={borderColors[index % borderColors.length]}
                    />
                ))}
            </div>
        </div>
    );
};

export default SubmittedTask;
