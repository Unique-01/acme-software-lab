import React from "react";

interface CircularProgressBarProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
    additionalText?: string;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
    percentage,
    size = 150,
    strokeWidth = 7,
    color = "#37cc37",
    additionalText = "",
}) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size} className="circular-progress-bar">
            <circle
                stroke="lightgray"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <circle
                stroke={color}
                fill="transparent"
                strokeWidth={strokeWidth}
                r={radius}
                cx={size / 2}
                cy={size / 2}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: "stroke-dashoffset 0.35s" }}
            />
            <text
                x="50%"
                y="45%"
                dy=".3em"
                textAnchor="middle"
                fontSize="1.5em"
                fontWeight={'bold'}
                fill={color}>
                {`${percentage}%`}
            </text>
            {additionalText && (
                <text
                    x="50%"
                    y="60%"
                    dy=".3em"
                    textAnchor="middle"
                    fontSize={size / 10}
                    fill="gray">
                    {additionalText}
                </text>
            )}
        </svg>
    );
};

export default CircularProgressBar;
