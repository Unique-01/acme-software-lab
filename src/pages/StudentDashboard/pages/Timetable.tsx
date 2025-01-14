import React from "react";
import { days, ClassItem } from "pages/StudentDashboard/types";
import DayButton from "pages/StudentDashboard/components/DayButton";
import ClassDisplay from "pages/StudentDashboard/components/ClassDisplay";
import EventCalender from "pages/StudentDashboard/components/EventCalender";
import useDateSelection from "pages/StudentDashboard/hooks/useDateSelection";

const classes: ClassItem[] = [
    {
        id: "01",
        title: "Introduction to computers",
        tutor: "Mr Paul",
        time: "8:00 AM",
        date: new Date(2025, 0, 7),
    },
    {
        id: "04",
        title: "Microsoft Office Suite",
        tutor: "Mr Paul",
        time: "10:30 AM",
        date: new Date(2025, 0, 7),
    },
    {
        id: "03",
        title: "Introduction to computers",
        tutor: "Mr Paul",
        time: "8:00 AM",
        date: new Date(2025, 0, 7),
    },
    {
        id: "04",
        title: "Microsoft Office Suite",
        tutor: "Mr Paul",
        time: "10:30 AM",
        date: new Date(2025, 0, 7),
    },
];

const Timetable: React.FC = () => {
    const { selectedDate, dateRange, handleDateClick } = useDateSelection();

    // Filter classes based on the selected date
    const filteredClasses = classes.filter(
        (classItem) =>
            classItem.date.toDateString() === selectedDate.toDateString()
    );

    return (
        <div className="p-5"> 
            <div>
                <h1 className="poppins text-xl text-blue-900">Timetable</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-4 rounded-lg">
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
                    <h2 className="text-lg font-bold mb-2">Classes</h2>
                    {filteredClasses.length === 0 ? (
                        <p>No classes for this day.</p>
                    ) : (
                        <ClassDisplay classes={filteredClasses} />
                    )}
                </div>
                <div>
                    <EventCalender />
                </div>
            </div>
        </div>
    );
};

export default Timetable;
