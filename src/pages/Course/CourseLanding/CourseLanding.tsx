import Blog from "components/BlogListPreview/Blog";
import HeroSection from "./components/HeroSection";
import PopularCourse from "./components/PopularCourse";
import Testimonial from "./components/Testimonial";
import Tutors from "./components/Tutors";

const CourseLanding: React.FC = () => {
    return (
        <>
            <HeroSection />
            <PopularCourse />
            <Tutors />
            <Testimonial />
            <Blog />
        </>
    );
};

export default CourseLanding;
