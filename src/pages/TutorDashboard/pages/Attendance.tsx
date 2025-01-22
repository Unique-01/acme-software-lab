import { Link } from "react-router-dom";
import ReusableTable from "../components/ReusableTable";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";
import React, { useEffect } from "react";
const Attendance: React.FC = () => {
    useEffect(() => {
        updateHeaderTitle("Attendance");
    }, []);
    const students = [
        { id: "1", name: "John Doe", studentId: "S123", status: "Present" },
        { id: "2", name: "Alice Johnson", studentId: "S124", status: "Absent" },
        { id: "3", name: "Bob Brown", studentId: "S125", status: "Present" },
        { id: "4", name: "Charlie Smith", studentId: "S126", status: "Late" },
        { id: "5", name: "David Wilson", studentId: "S127", status: "Present" },
        // ...more mock data...
    ];

    return (
        <div className="p-10 bg-white rounded-xl">
            <div className="space-y-3 mb-5">
                <div className="flex justify-end ">
                    <Link
                        to="/tutor/leave-request"
                        className="bg-orange-400 text-white font-semibold text-sm p-3 px-5 flex gap-3 items-center rounded-lg">
                        Leave Requests <MdOutlineKeyboardArrowRight />
                    </Link>
                </div>
                <div className="flex gap-3 items-end">
                    <div className="border bg-white p-2 rounded-lg shadow">
                        <label
                            htmlFor="course"
                            className="text-sm font-medium text-gray-500">
                            Course
                        </label>
                        <select
                            name="course"
                            id="course"
                            className="focus:border-0  w-full">
                            <option value="advance-java">Advanced Java</option>
                            <option value="html-beginners">
                                HTML for Beginners
                            </option>
                        </select>
                    </div>
                    <div className="border bg-white p-2 rounded-lg shadow">
                        <label
                            htmlFor="section"
                            className="text-sm font-medium text-gray-500">
                            Section
                        </label>
                        <select
                            name="section"
                            id="section"
                            className="focus:border-0  w-full">
                            <option value="a">A</option>
                            <option value="b">B</option>
                        </select>
                    </div>
                    <div className="border bg-white p-2 rounded-lg shadow">
                        <label
                            htmlFor="date"
                            className="text-sm font-medium text-gray-500">
                            Date
                        </label>
                        <select
                            name="date"
                            id="date"
                            className="focus:border-0  w-full">
                            <option value="2023-10-01">October 1, 2023</option>
                            <option value="2023-10-02">October 2, 2023</option>
                            <option value="2023-10-03">October 3, 2023</option>
                            <option value="2023-10-04">October 4, 2023</option>
                            <option value="2023-10-05">October 5, 2023</option>
                            {/* Add more dates as needed */}
                        </select>
                    </div>
                    <button className="bg-blue-800 p-3 px-7 rounded-lg text-white font-normal">
                        Generate
                    </button>
                </div>
            </div>
            <div>
                <h3 className="text-blue-800 text-xl mb-2">Attendance Sheet</h3>
                <div className="">
                    <ReusableTable students={students} />
                </div>
            </div>
        </div>
    );
};

export default Attendance;
