import React from "react";

interface StraightLineProgressBarProps {
    title: string;
    current: number;
    total: number;
    height?: number;
    color?: string;
    backgroundColor?: string;
}

const StraightLineProgressBar: React.FC<StraightLineProgressBarProps> = ({
    title,
    current,
    total,
    height = 7,
    color = "green",
    backgroundColor = "lightgray",
}) => {
    const percentage = (current / total) * 100;

    return (
        <div>
            <div className="flex justify-between pb-2 text-sm text-gray-600 font-normal">
                <span>{title}</span>
                <span className="text-gray-400">
                    {current}/{total}
                </span>
            </div>
            <div
                className="w-full rounded-full"
                style={{ height, backgroundColor }}>
                <div
                    className="rounded-full"
                    style={{
                        width: `${percentage}%`,
                        height: "100%",
                        backgroundColor: color,
                        transition: "width 0.35s",
                    }}
                />
            </div>
        </div>
    );
};

export default StraightLineProgressBar;
