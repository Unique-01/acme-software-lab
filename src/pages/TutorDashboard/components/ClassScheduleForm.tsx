import React, { useState } from "react";
import "tailwindcss/tailwind.css";

const ClassSchedulePage = () => {
    const [tags, setTags] = useState<string[]>([]);
    const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState<string | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [classDetails, setClassDetails] = useState("");

    const allStudents = ["Alice", "Bob", "Charlie", "David", "Eve"]; // Example student list

    const handleAddTag = () => {
        const newTag = prompt("Enter a new tag:");
        if (newTag) {
            setTags([...tags, newTag]);
        }
    };

    const handleAddStudent = () => {
        const student = prompt(
            "Enter student name or choose from the dropdown"
        );
        if (student && !selectedStudents.includes(student)) {
            setSelectedStudents([...selectedStudents, student]);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center gap-8">
            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Form Card */}
                <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 col-span-2">
                    <h2 className="text-2xl font-semibold mb-4">
                        Class Details
                    </h2>
                    <textarea
                        className="w-full border rounded p-3 focus:outline-none focus:ring"
                        rows={5}
                        placeholder="Enter class details..."
                        value={classDetails}
                        onChange={(e) =>
                            setClassDetails(e.target.value)
                        }></textarea>

                    <div>
                        <h3 className="text-lg font-semibold">Tags</h3>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded shadow-sm">
                                    {tag}
                                </span>
                            ))}
                            <button
                                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                                onClick={handleAddTag}>
                                + Add Tag
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold">Students</h3>
                        <div className="flex gap-2 mt-2 flex-wrap">
                            {selectedStudents.map((student, index) => (
                                <span
                                    key={index}
                                    className="bg-green-100 text-green-600 px-3 py-1 rounded shadow-sm">
                                    {student}
                                </span>
                            ))}
                            <button
                                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition"
                                onClick={handleAddStudent}>
                                + Add Students
                            </button>
                        </div>
                    </div>
                </div>

                {/* Date Calendar */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Select Date</h3>
                    <input
                        type="date"
                        className="w-full border rounded p-3 focus:outline-none focus:ring"
                        onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    {selectedDate && (
                        <p className="mt-2 text-sm text-gray-600">
                            Selected Date: {selectedDate}
                        </p>
                    )}
                </div>

                {/* Time Picker */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Select Time</h3>
                    <input
                        type="time"
                        className="w-full border rounded p-3 focus:outline-none focus:ring"
                        onChange={(e) => setSelectedTime(e.target.value)}
                    />
                    {selectedTime && (
                        <p className="mt-2 text-sm text-gray-600">
                            Selected Time: {selectedTime}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ClassSchedulePage;
