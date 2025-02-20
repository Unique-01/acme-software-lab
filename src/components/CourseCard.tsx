import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

interface Course {
    _id: number | string;
    category: string;
    title: string;
    description: string;
    rating?: number;
    reviewCount?: number;
    instructor: {
        name: string;
        enrolledCount: number;
        profilePicture?: string;
    };
    price: number;
    image?: string;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className="shadow-lg p-5 rounded-lg bg-white hover:border-blue-800 hover:border-[1.5px] transition-all">
            <div className="mb-7">
                <img
                    src={course.image}
                    alt="Course"
                    className="rounded h-60 w-full "
                />
            </div>
            <p className="capitalize text-blue-800 text-sm font-semibold mb-2">
                {course.category}
            </p>
            <Link to={`/courses/list/${course._id}`}>
                <h3 className="font-semibold text-xl flex justify-between">
                    <span className="capitalize">{course.title}</span>
                    <span>
                        <FiArrowUpRight />
                    </span>
                </h3>
            </Link>
            <p className="font-normal text-gray-500 text-sm mt-3">
                {course.description}
            </p>
            <div className="flex justify-between items-baseline mt-5">
                <div className="flex items-center gap-2">
                    <img
                        src={course.instructor.profilePicture}
                        alt="Instructor"
                        className="w-10 h-10 rounded-full"
                    />
                    <div className="text-sm">
                        <p>{course.instructor.name}</p>
                        <p className="text-gray-500 font-normal text-xs">
                            {course.instructor.enrolledCount} Enrolled
                        </p>
                    </div>
                </div>
                <p className="text-2xl text-blue-800 font-bold">
                    ₦{course.price.toLocaleString()}
                </p>
            </div>
        </div>
    );
};

export default CourseCard;
