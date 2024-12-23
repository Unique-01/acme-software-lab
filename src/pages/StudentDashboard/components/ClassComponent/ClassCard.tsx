import React from "react";

interface ClassCardProps {
    id: number;
    title: string;
    tutor: string;
    time: string;
    status?: string;
    bgColor: string;
    statusColor?: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
    id,
    title,
    tutor,
    time,
    status,
    bgColor,
    statusColor,
}) => {
    return (
        <div
            className={`p-4 rounded-lg flex justify-between items-center shadow-sm ${bgColor}`}>
            <div>
                <p className="text-xs font-semibold text-gray-500">{`0${id}`}</p>
                <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
                <p className="text-xs text-gray-600">{`Tutor: ${tutor}`}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className="text-sm font-bold text-gray-800">{time}</p>
                {status && (
                    <p className={`text-xs font-semibold ${statusColor}`}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ClassCard;
