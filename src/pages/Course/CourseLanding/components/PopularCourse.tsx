import Slider from "react-slick";
import CourseImg1 from "assets/course.jpeg";
import CourseImg2 from "assets/course2.jpeg";
import CourseCard from "components/CourseCard";
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
        _id: "5",
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
        _id: "6",
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

const PopularCourse: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust according to your needs
        slidesToScroll: 2,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="bg-gray-50 py-10">
            <div className="container">
                <div>
                    <p className="text-blue-800 text-sm font-semibold mb-3">
                        Explore Programs
                    </p>
                    <h2 className="font-semibold text-2xl mb-3">
                        Our Most Popular Courses
                    </h2>
                    <p className="text-neutral-500 font-normal ">
                        Join our famous courses, the knowledge provided will
                        definitely be useful for you.
                    </p>
                </div>
                <div className="my-10">
                    <Slider {...settings}>
                        {courses.map((course, index) => (
                            <div className="px-2 mb-5" key={index}>
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="text-center mt-16">
                    <Link
                        to=""
                        className="bg-neutral-100 border-gray-300 border rounded font-semibold text-sm p-3 px-5 hover:bg-neutral-200 transition ">
                        Explore All Programs
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default PopularCourse;
