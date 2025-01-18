import React, { useEffect } from "react";
import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { Link } from "react-router-dom";

const cellStyle = "text-center py-10";
const headerCellStyle = "py-7";
const colors = ["bg-red-500", "bg-blue-700", "bg-yellow-400"];

const StudentRow: React.FC<{ student: any; color: string }> = ({
    student,
    color,
}) => {
    useEffect(() => {
        updateHeaderTitle("Students");
    }, []);

    return (
        <tr className="border-b transition duration-150">
            <td className={`${headerCellStyle} text-center ps-5`}>
                <input type="checkbox" className="cursor-pointer size-5" />
            </td>
            <td className={`${cellStyle} text-blue-800 font-bold`}>
                {student.name}
            </td>
            <td className={`${cellStyle} text-blue-700 font-bold`}>
                #{student.id}
            </td>
            <td className={cellStyle}>
                {" "}
                {new Date(student.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </td>
            <td className={`${cellStyle} text-blue-800`}>
                {student.referenceName}
            </td>
            <td className={`${cellStyle} text-blue-800`}>{student.city}</td>
            <td className={`${cellStyle} text-blue-800 font-bold`}>
                <div className="flex items-center justify-center gap-3">
                    <div className="bg-blue-50 p-3 rounded-full">
                        <LuPhone size={22} />
                    </div>
                    <div className="bg-blue-50 p-3 rounded-full">
                        <FaRegEnvelope size={22} />
                    </div>
                </div>
            </td>
            <td className={`${cellStyle}`}>
                <div className={`${color} py-2 rounded-full text-white`}>
                    {student.track}
                </div>
            </td>
            <td className={`${cellStyle} text-gray-700  cursor-pointer`}>
                <Link
                    to={`/tutor/students/${student.id}`}
                    className="flex justify-center">
                    <IoEllipsisHorizontalSharp size={20} />
                </Link>
            </td>
        </tr>
    );
};

const StudentList: React.FC = () => {
    const students = [
        {
            id: "12342378",
            name: "John Doe",
            date: "2023-01-01",
            referenceName: "Jane Smith",
            city: "New York",
            contact: "123-456-7890",
            track: "Science",
            action: "Edit",
            image: "https://example.com/john-doe.jpg",
        },
        {
            id: "232827842",
            name: "Alice Johnson",
            date: "2023-02-01",
            referenceName: "Bob Brown",
            city: "Los Angeles",
            contact: "987-654-3210",
            track: "Math",
            action: "Edit",
            image: "https://example.com/alice-johnson.jpg",
        },
        {
            id: "232827842",
            name: "Alice Johnson",
            date: "2023-02-01",
            referenceName: "Bob Brown",
            city: "Los Angeles",
            contact: "987-654-3210",
            track: "Math",
            action: "Edit",
            image: "https://example.com/alice-johnson.jpg",
        },
        {
            id: "232827842",
            name: "Alice Johnson",
            date: "2023-02-01",
            referenceName: "Bob Brown",
            city: "Los Angeles",
            contact: "987-654-3210",
            track: "Math",
            action: "Edit",
            image: "https://example.com/alice-johnson.jpg",
        },
        {
            id: "232827842",
            name: "Alice Johnson",
            date: "2023-02-01",
            referenceName: "Bob Brown",
            city: "Los Angeles",
            contact: "987-654-3210",
            track: "Math",
            action: "Edit",
            image: "https://example.com/alice-johnson.jpg",
        },
        // ...more mock data...
    ];

    return (
        <div className="p-5">
            <div className="overflow-x-auto  rounded-xl">
                <table className="min-w-full bg-white  rounded-2xl table-auto">
                    <thead className="border-b text-blue-900 capitalize text-sm leading-normal ">
                        <tr className="">
                            <th
                                className={`${headerCellStyle} text-center ps-5`}>
                                <input
                                    type="checkbox"
                                    className="cursor-pointer size-5"
                                />
                            </th>
                            <th className={headerCellStyle}>Name</th>
                            <th className={headerCellStyle}>ID</th>
                            <th className={headerCellStyle}>Date</th>
                            <th className={headerCellStyle}>Reference Name</th>
                            <th className={headerCellStyle}>City</th>
                            <th className={headerCellStyle}>Contact</th>
                            <th className={headerCellStyle}>Track</th>
                            <th className={`${headerCellStyle} pe-5`}>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-normal text-gray-600">
                        {students.map((student, index) => (
                            <StudentRow
                                key={student.id}
                                student={student}
                                color={colors[index % colors.length]}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
