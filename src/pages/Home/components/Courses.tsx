import CourseImg1 from "assets/course.jpeg";
import CourseImg2 from "assets/course2.jpeg";
import CourseCard from "components/CourseCard";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const courses = [
    {
        _id: "1",
        category: "computer basics",
        title: "Computer Proficiency",
        description:
            "Learn Basics of Computer Hardware and Software and Operating Systems Overview.",
        rating: 4,
        reviewCount: 500,
        instructor: {
            name: "Jane Cooper",
            enrolledCount: 200,
            profilePicture: CourseImg1,
        },
        price: 50000,
        image: CourseImg1,
    },
    {
        _id: "2",
        category: "Data",
        title: "Data Science",
        description:
            "Learn Basics of Computer Hardware and Software and Operating Systems Overview.",
        rating: 4,
        reviewCount: 500,
        instructor: {
            name: "Jane Cooper",
            enrolledCount: 200,
            profilePicture: CourseImg2,
        },
        price: 50000,
        image: CourseImg2,
    },
    {
        _id: "3",
        category: "computer basics",
        title: "Computer Proficiency",
        description:
            "Learn Basics of Computer Hardware and Software and Operating Systems Overview.",
        rating: 4,
        reviewCount: 500,
        instructor: {
            name: "Jane Cooper",
            enrolledCount: 200,
            profilePicture: CourseImg1,
        },
        price: 50000,
        image: CourseImg1,
    },
];

const Courses: React.FC = () => {
    return (
        <div className="container my-10 mb-20">
            <div className="text-center">
                <div className="flex items-center justify-center gap-5 mb-3">
                    <div className="bg-indigo-700 w-14 h-1"></div>
                    <p className="text-gray-600 text-2xl font-normal">
                        Our Courses
                    </p>
                </div>
                <p className="jakarta-font text-gray-950 text-4xl font-semibold">
                    Best selling courses
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10">
                {courses.map((course) => (
                    <CourseCard course={course} />
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Link
                    to=""
                    className="bg-blue-800 text-white p-5 px-7 gap-5 flex items-center rounded-xl font-bold text-lg">
                    View all Courses <FaArrowRight />
                </Link>
            </div>
        </div>
    );
};

export default Courses;
