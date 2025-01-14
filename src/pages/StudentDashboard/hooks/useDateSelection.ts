import { useState, useEffect } from "react";

const useDateSelection = () => {
    const [currentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    useEffect(() => {
        // Set the selected date to the current date on initial load
        setSelectedDate(currentDate);
    }, [currentDate]);

    const handleDateClick = (date: Date) => {
        setSelectedDate(date);
    };

    // Generate dates for display (3 days before to 3 days after the current date)
    const dateRange = Array.from({ length: 7 }, (_, i) => {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i - 3); // -3 to +3 around current date
        return date;
    });

    return { currentDate, selectedDate, dateRange, handleDateClick };
};

export default useDateSelection;
