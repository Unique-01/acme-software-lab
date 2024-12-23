import React from "react";

interface CardProps {
    icon: React.ReactNode; // Accepts React elements (e.g., icons)
    count: number; // The number to display
    label: string; // The label text
    bgColor: string; // The background color for the card
}

const DashboardCard: React.FC<CardProps> = ({
    icon,
    count,
    label,
    bgColor,
}) => {
    return (
        <div
            className={`p-4 flex gap-4 items-center`}
            style={{ backgroundColor: bgColor }}>
            <div className="mb-2 bg-white p-3">{icon}</div>
            <div>
                <h2 className="text-xl">{count}</h2>
                <p className="text-xs text-gray-600 font-normal">{label}</p>
            </div>
        </div>
    );
};

export default DashboardCard;
