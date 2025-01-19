import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";

interface Event {
    id: number;
    title: string;
    date: string; // Format: YYYY-MM-DD
    color: string; // Event color
}

const Calendar: React.FC = () => {
    const today = new Date();
    const [currentMonth, setCurrentMonth] = useState<number>(today.getMonth()); // Default to current month
    const [currentYear, setCurrentYear] = useState<number>(today.getFullYear()); // Default to current year

    useEffect(() => {
        updateHeaderTitle("Events");
    }, []);

    // Sample events
    const events: Event[] = [
        { id: 1, title: "Karen", date: "2025-01-10", color: "bg-blue-500" },
        { id: 2, title: "Tony", date: "2025-01-18", color: "bg-red-500" },
        { id: 3, title: "Meeting", date: "2025-01-10", color: "bg-green-500" },
        { id: 4, title: "Johnny", date: "2025-01-29", color: "bg-yellow-500" },
    ];

    // Helper function to generate days for a month
    const generateDays = (month: number, year: number) => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDayIndex = new Date(year, month, 1).getDay();
        const prevMonthDays = firstDayIndex === 0 ? 6 : firstDayIndex - 1;

        const totalCells = daysInMonth + prevMonthDays;
        return Array.from({ length: totalCells }, (_, i) => {
            const day = i - prevMonthDays + 1;
            return day > 0 ? day : null;
        });
    };

    const days = generateDays(currentMonth, currentYear);

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow">
            <div className="flex justify-between mb-10 items-center">
                <div>
                    <h2 className="text-2xl text-blue-800 font-bold">
                        Calendar
                    </h2>
                </div>
                <div className="flex space-x-5">
                    <select
                        className="border-2 text-blue-800 font-semibold border-blue-800 p-8 py-3 rounded-full"
                        value={currentMonth}
                        onChange={(e) =>
                            setCurrentMonth(Number(e.target.value))
                        }>
                        {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={i}>
                                {new Date(2021, i).toLocaleString("default", {
                                    month: "long",
                                })}
                            </option>
                        ))}
                    </select>
                    <select
                        className="border-2 text-blue-800 font-semibold border-blue-800 p-8 py-3 rounded-full"
                        value={currentYear}
                        onChange={(e) =>
                            setCurrentYear(Number(e.target.value))
                        }>
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={today.getFullYear() + i}>
                                {today.getFullYear() + i}
                            </option>
                        ))}
                    </select>
                    <button className="bg-blue-800 text-white px-8 py-3 rounded-full flex items-center gap-2">
                        <FaPlus /> New Event
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-7 gap-5">
                {[
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                ].map((day) => (
                    <div
                        key={day}
                        className="text-center text-gray-400 font-normal text-sm">
                        {day}
                    </div>
                ))}
                {days.map((day, index) => (
                    <div
                        key={index}
                        className={`relative border rounded-lg h-28 flex flex-col justify-between  p-3 ${
                            day ? "bg-white" : "bg-gray-100"
                        }`}>
                        {day && (
                            <span className="text-blue-900 text-lg font-bold">
                                {day}
                            </span>
                        )}
                        <div className="flex flex-wrap gap-1 justify-center mt-1 mb-3">
                            {day &&
                                events
                                    .filter((event) => {
                                        const eventDate = new Date(event.date);
                                        return (
                                            eventDate.getFullYear() ===
                                                currentYear &&
                                            eventDate.getMonth() ===
                                                currentMonth &&
                                            eventDate.getDate() === day
                                        );
                                    })
                                    .map((event) => (
                                        <div
                                            key={event.id}
                                            className={`w-3 h-3 rounded-full ${event.color} relative group`}>
                                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-black text-white text-xs rounded-md px-2 py-1">
                                                {event.title}
                                            </div>
                                        </div>
                                    ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
