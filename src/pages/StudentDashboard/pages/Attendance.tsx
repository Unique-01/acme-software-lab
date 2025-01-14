import React from "react";
import { days, ClassItem } from "pages/StudentDashboard/types";
import DayButton from "pages/StudentDashboard/components/DayButton";
import AttendanceDisplay from "pages/StudentDashboard/components/AttendanceDisplay";
import LeaveRequest from "pages/StudentDashboard/components/LeaveRequest";
import useDateSelection from "pages/StudentDashboard/hooks/useDateSelection";

const attendanceRecords: ClassItem[] = [
    {
        id: "01",
        title: "Introduction to computers",
        tutor: "Mr Paul",
        time: "8:00 AM",
        date: new Date(2025, 0, 7),
        attended: true,
    },
    {
        id: "04",
        title: "Microsoft Office Suite",
        tutor: "Mr Paul",
        time: "10:30 AM",
        date: new Date(2025, 0, 7),
        attended: false,
    },
    // ...additional records...
];

const Attendance: React.FC = () => {
    const { selectedDate, dateRange, handleDateClick } = useDateSelection();

    // Filter attendance records based on the selected date
    const filteredRecords = attendanceRecords.filter(
        (record) =>
            record.date.toDateString() === selectedDate.toDateString()
    );

    return (
        <div className="p-5"> 
            <div>
                <h1 className="poppins text-xl text-blue-900">Attendance</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                <div className="p-4 rounded-lg md:col-span-3">
                    <div className="flex justify-between mb-4">
                        {dateRange.map((date, index) => {
                            const dayIndex = date.getDay();
                            const isCurrentDate =
                                date.toDateString() ===
                                selectedDate.toDateString();
                            return (
                                <DayButton
                                    key={index}
                                    day={days[dayIndex]}
                                    date={date.getDate()}
                                    isCurrentDate={isCurrentDate}
                                    onClick={() => handleDateClick(date)}
                                />
                            );
                        })}
                    </div>
                    <h2 className="text-lg font-bold mb-2">Attendance Records</h2>
                    <AttendanceDisplay records={filteredRecords} />
                </div>
                <div className="md:col-span-2">
                    <LeaveRequest />
                </div>
            </div>
        </div>
    );
};

export default Attendance;
