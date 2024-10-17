import React from "react";
import AboutSection from "./components/AboutSection";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import JoinUs from "./components/JoinUs";
import WhyChoose from "./components/WhyChoose";
import Courses from "./components/Courses";
import Testimonial from "./components/Testimonial";
import Blog from "components/BlogListPreview/Blog";

const Homepage: React.FC = () => {
    return (
        <>
            <Carousel />
            <AboutSection />
            <Services />
            <JoinUs />
            <WhyChoose />
            <Courses />
            <Testimonial />
            <Blog />
        </>
    );
};
export default Homepage;
