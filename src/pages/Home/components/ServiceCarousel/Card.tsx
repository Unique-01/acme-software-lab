import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode; // to pass the icon dynamically
    bgColor: string; // for the background color
}

const Card: React.FC<CardProps> = ({ title, description, icon, bgColor }) => {
    return (
        <div
            className={`carousel-card rounded-lg py-6 transition-all px-8  shadow  w-full hover:bg-blue-600`}>
            <div className="flex items-center mb-4">
                <div
                    className={`w-10 h-10 rounded-lg ${bgColor} flex items-center justify-center`}>
                    {icon}
                </div>
                <h2 className="ml-3  card-title  font-bold">{title}</h2>
            </div>
            <p className="mb-4 text-xs text-gray-600 font-normal card-text">
                {description}
            </p>
            <Link
                to=""
                className="text-blue-700 font-medium card-btn flex items-center">
                Learn More{" "}
                <span className="ml-2">
                    <IoIosArrowForward />
                </span>
            </Link>
        </div>
    );
};

export default Card;
