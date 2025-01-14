import React from "react";
import { ClassItem } from "pages/StudentDashboard/types";

interface AttendanceDisplayProps {
    records: ClassItem[];
}

const AttendanceDisplay: React.FC<AttendanceDisplayProps> = ({ records }) => {
    return (
        <div>
            {records.length === 0 ? (
                <p>No attendance records for this date.</p>
            ) : (
                <ul>
                    {records.map((record) => (
                        <li key={record.id} className="mb-2">
                            <div className=" border rounded-lg ">
                                <div className="flex items-center justify-between p-4 rounded-t-lg bg-blue-50">
                                    <h3 className=" text-blue-600">
                                        {record.title}
                                    </h3>
                                    <p className="text-sm ">
                                        {record.attended ? (
                                            <span className="bg-lime-200 text-green-800 p-2 rounded-lg">
                                                Present
                                            </span>
                                        ) : (
                                            <span className="bg-red-200 text-red-800 p-2 rounded-lg">
                                                Absent
                                            </span>
                                        )}
                                    </p>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-gray-400">
                                        Check in time
                                    </p>
                                    <p className="text-sm text-blue-600">
                                        {" "}
                                        {record.time}
                                    </p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AttendanceDisplay;
