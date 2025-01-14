import React, { useState } from "react";

interface LeaveRequestProps {
    startDate: string;
    endDate: string;
    reason: string;
    status: "Pending" | "Approved" | "Rejected";
}

const LeaveRequest: React.FC = () => {
    const [leaveRequests, setLeaveRequests] = useState<LeaveRequestProps[]>([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [reason, setReason] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newRequest: LeaveRequestProps = {
            startDate,
            endDate,
            reason,
            status: "Pending",
        };
        setLeaveRequests([...leaveRequests, newRequest]);
        setStartDate("");
        setEndDate("");
        setReason("");
    };

    return (
        <div className="space-y-3">
            <div className="border p-3 rounded-lg">
                <h1 className="text-center text-blue-800 font-semibold text-lg mb-3">
                    Requested Leave
                </h1>
                <ul className="mb-4">
                    {leaveRequests.map((request, index) => (
                        <li key={index} className="mb-2 border rounded-lg">
                            <div className="flex items-center justify-between p-4 rounded-t-lg bg-blue-50">
                                <h3 className="text-blue-600">
                                    {request.reason}
                                </h3>
                                <p className="text-sm">
                                    {request.status === "Approved" ? (
                                        <span className="bg-lime-200 text-green-800 p-2 rounded-lg">
                                            Approved
                                        </span>
                                    ) : request.status === "Rejected" ? (
                                        <span className="bg-red-200 text-red-800 p-2 rounded-lg">
                                            Rejected
                                        </span>
                                    ) : (
                                        <span className="bg-yellow-200 text-yellow-800 p-2 rounded-lg">
                                            Pending
                                        </span>
                                    )}
                                </p>
                            </div>
                            <div className="p-4">
                                <p className="text-xs text-gray-500">Date:</p>
                                <p className="text-sm text-blue-600">
                                    {new Date(
                                        request.startDate
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })}{" "}
                                    -{" "}
                                    {new Date(
                                        request.endDate
                                    ).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="border p-5 rounded-lg">
                <h2 className="text-lg  text-blue-700 text-center mb-2">Apply Leave</h2>

                <form onSubmit={handleSubmit} className="mb-4">
                    <div className="mb-2">
                        <label className="block text-sm text-blue-600 mb-1">
                            Start Date
                        </label>
                        <input
                            type="date"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm text-blue-600 mb-1">
                            End Date
                        </label>
                        <input
                            type="date"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-sm text-blue-600 mb-1">
                            Reason for Leave
                        </label>
                        <textarea
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter reason for leave"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-500 text-white rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LeaveRequest;
