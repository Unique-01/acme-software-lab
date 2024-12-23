import React from "react";
import ClassCard from "./ClassCard";

const ClassComponent: React.FC = () => {
    const classesData = {
        past: [
            {
                id: 1,
                title: "Introduction to computers",
                tutor: "Mr Paul",
                time: "8:00 AM",
                status: "Absent",
                bgColor: "bg-purple-200",
                statusColor: "text-red-500",
            },
            {
                id: 2,
                title: "Microsoft Office Suite",
                tutor: "Mr Paul",
                time: "10:30 AM",
                status: "Attended",
                bgColor: "bg-lime-200",
                statusColor: "text-green-500",
            },
        ],
        upcoming: [
            {
                id: 3,
                title: "Introduction to Web Development",
                tutor: "Mr Paul",
                time: "1:00 PM",
                bgColor: "bg-purple-100",
            },
            {
                id: 4,
                title: "Computer Architecture",
                tutor: "Mr Paul",
                time: "3:00 PM",
                bgColor: "bg-purple-200",
            },
        ],
    };

    const { past, upcoming } = classesData;

    return (
        <div className="max-w-md p-6 rounded-lg shadow">
            <h2 className="text-xl font-normal text-blue-950 mb-4">
                Today's Classes
            </h2>

            <section>
                <h3 className="text-sm font-normal text-gray-600 mb-2">Past</h3>
                <div className="space-y-3">
                    {past.map((item) => (
                        <ClassCard key={item.id} {...item} />
                    ))}
                </div>
            </section>

            <section className="mt-6">
                <h3 className="text-sm font-normal text-gray-600 mb-2">
                    Upcoming
                </h3>
                <div className="space-y-3">
                    {upcoming.map((item) => (
                        <ClassCard key={item.id} {...item} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ClassComponent;
