import React, { useState } from "react";
import {
    format,
    startOfMonth,
    endOfMonth,
    eachDayOfInterval,
    isSameDay,
    addMonths,
    isToday,
} from "date-fns";
import { FaCalendarAlt } from "react-icons/fa";

type Event = {
    date: string; // Format: "YYYY-MM-DD"
    title: string;
    time: string;
};

const events: Event[] = [
    { date: "2025-05-31", title: "Level-Up Seminar", time: "10:00 AM" },
    { date: "2025-06-13", title: "Innovation Fair", time: "9:00 AM" },
    { date: "2025-06-19", title: "Code Submit", time: "8:00 AM - 5:00 PM" },
];

const Calendar: React.FC = () => {
    const [currentMonth, setCurrentMonth] = useState<Date>(() => {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), 1);
    });
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const changeMonth = (months: number): void => {
        setCurrentMonth((prev) => addMonths(prev, months));
    };

    const days: Date[] = eachDayOfInterval({
        start: startOfMonth(currentMonth),
        end: endOfMonth(currentMonth),
    });

    const weekdays: string[] = ["M", "T", "W", "T", "F", "S", "S"];

    const eventsForSelectedDate: Event[] = selectedDate
        ? events.filter((event) =>
              isSameDay(new Date(event.date), selectedDate)
          )
        : [];

    return (
        <div className="p-4 max-w-sm mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4 text-blue-800 ">
                <button onClick={() => changeMonth(-1)} className="text-xl">
                    ◀
                </button>
                <h2 className="text-xl font-bold">
                    {format(currentMonth, "MMMM")}
                </h2>
                <button onClick={() => changeMonth(1)} className="text-xl">
                    ▶
                </button>
            </div>

            <div className="grid grid-cols-7 text-center bg-blue-800 rounded-lg">
                {weekdays.map((day, index) => (
                    <div
                        key={index}
                        className="font-semibold text-lg bg-blue-700 py-4 text-white">
                        {day}
                    </div>
                ))}
                {Array(days[0].getDay() === 0 ? 6 : days[0].getDay() - 1)
                    .fill(null)
                    .map((_, index) => (
                        <div key={`empty-${index}`}></div>
                    ))}
                {days.map((day: Date) => {
                    const isPrevMonth = day < startOfMonth(currentMonth);
                    const isNextMonth = day > endOfMonth(currentMonth);
                    const isPrevDayInMonth =
                        day < new Date() && !isPrevMonth && !isNextMonth;
                    const isUpcomingDayInMonth =
                        day >= new Date() && !isPrevMonth && !isNextMonth;

                    let buttonClass = "p-2 rounded ";
                    if (selectedDate && isSameDay(day, selectedDate)) {
                        buttonClass += "bg-white text-blue-800";
                    } else if (isToday(day)) {
                        buttonClass += "bg-yellow-500 text-white";
                    } else if (isPrevMonth) {
                        buttonClass += "text-gray-100";
                    } else if (isPrevDayInMonth) {
                        buttonClass += "text-gray-400 hover:bg-blue-300";
                    } else if (isUpcomingDayInMonth) {
                        buttonClass += "text-white hover:bg-blue-300";
                    } else {
                        buttonClass += "text-gray-800 hover:bg-blue-100";
                    }

                    return (
                        <button
                            key={day.toISOString()}
                            className={buttonClass}
                            onClick={() => setSelectedDate(day)}>
                            {format(day, "d")}
                        </button>
                    );
                })}
            </div>

            <div className="mt-6 border p-2 rounded-lg space-y-3 ">
                <h3 className=" text-blue-700 p-2 pb-0">Upcoming Events</h3>
                {eventsForSelectedDate.length > 0 ? (
                    eventsForSelectedDate.map((event, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-4 p-3 border rounded-lg mb-2 font-normal">
                            <FaCalendarAlt className="text-blue-800 text-xl" />
                            <div>
                                <h4 className="text-blue-800">{event.title}</h4>
                                <p className="text-xs  text-gray-500">
                                    {format(new Date(event.date), "MMMM d")} @{" "}
                                    {event.time}
                                </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">
                        No events for the selected date.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Calendar;
