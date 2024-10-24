import Header from "./components/Header";
// import CourseImg1 from "assets/course.jpeg";
// import CourseImg2 from "assets/course2.jpeg";
import CourseCard from "components/CourseCard";
import courses from "components/course.json";
// import CurriculumCard from "./components/CurriculumCard";
// import { useState } from "react";

const courseCategory = [
    "computer basics",
    "data",
    "design",
    "cybersecurity",
    "networking",
    "web development",
];
const CourseList: React.FC = () => {
    // State to keep track of which course is hovered
    // const [hoveredCourseId, setHoveredCourseId] = useState<string | null>(null);

    return (
        <div>
            <Header />
            <div className="container">
                <div className="mb-20">
                    {courseCategory.map((category, index) => (
                        <div className="mt-20" key={index}>
                            <h3 className="capitalize">{category}</h3>
                            <div className="grid lg:grid-cols-3 gap-5">
                                {courses
                                    .filter(
                                        (course) =>
                                            course.category.toLowerCase() ===
                                            category.toLowerCase()
                                    )
                                    .map((course) => (
                                        <div
                                            key={course._id}
                                            className="relative">
                                            <div>
                                                <CourseCard course={course} />
                                            </div>
                                            {/* <div
                                className={`
                                    ${
                                        hoveredCourseId === course._id
                                            ? "block"
                                            : "hidden"
                                    }`}>
                                <CurriculumCard
                                    curriculum={course.curriculum}
                                />
                            </div> */}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseList;
