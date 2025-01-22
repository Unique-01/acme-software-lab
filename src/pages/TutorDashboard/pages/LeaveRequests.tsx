import ReusableTable from "../components/ReusableTable";
import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const LeaveRequests: React.FC = () => {
    useEffect(() => {
        updateHeaderTitle("Leave Requests");
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
            <div>
                <Link to="/tutor/attendance" className="text-blue-800 mb-2">
                    <TiArrowBack size={25} />
                </Link>
            </div>
            <div>
                <h3 className="text-blue-800 text-xl mb-2">Leave Requests</h3>
                <div className="">
                    <ReusableTable students={students} />
                </div>
            </div>
        </div>
    );
};

export default LeaveRequests;
