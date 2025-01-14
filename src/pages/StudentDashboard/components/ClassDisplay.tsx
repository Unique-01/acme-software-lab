// src/ClassDisplay.tsx
import React from "react";
import { ClassItem, backgroundColors } from "../types";

const ClassDisplay: React.FC<{ classes: ClassItem[] }> = ({ classes }) => {
    const getRandomBgColor = (): string => {
        const randomIndex = Math.floor(Math.random() * backgroundColors.length);
        return backgroundColors[randomIndex];
    };

    return (
        <div className="space-y-2">
            {classes.map((classItem, index) => (
                <div
                    key={index}
                    className={`p-4 rounded-lg ${getRandomBgColor()}`}>
                    <div className="text-sm font-bold">{classItem.id}</div>
                    <div className="text-base">{classItem.title}</div>
                    <div className="text-sm">Tutor: {classItem.tutor}</div>
                    <div className="text-right text-sm font-bold">
                        {classItem.time}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ClassDisplay;
