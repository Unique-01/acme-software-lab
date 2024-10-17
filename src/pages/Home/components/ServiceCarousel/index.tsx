import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { FaComputer } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GiChart } from "react-icons/gi";
import "./ServiceCarousel.css";

const ServiceCarousel: React.FC = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust according to your needs
        slidesToScroll: 3,
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
        <div className="w-full ">
            <Slider {...settings}>
                <div className="p-6 ">
                    <Card
                        title="Website Development"
                        description="We create dynamic, user-friendly websites tailored to your business needs."
                        icon={
                            <FaComputer size={24} className="text-blue-600" />
                        }
                        bgColor="bg-blue-100"
                    />
                </div>
                <div className="p-6">
                    <Card
                        title="Tech Trainings"
                        description="Learn from industry experts and gain the skills needed to excel in today's digital world."
                        icon={
                            <LiaLaptopCodeSolid
                                size={24}
                                className="text-blue-500"
                            />
                        }
                        bgColor="bg-blue-100 "
                    />
                </div>
                <div className="p-6">
                    <Card
                        title="Data Analysis"
                        description="We help businesses make informed decisions by transforming raw data into actionable insights."
                        icon={<GiChart size={24} className="text-pink-600" />}
                        bgColor="bg-pink-100"
                    />
                </div>
                <div className="p-6">
                    <Card
                        title="Project Development"
                        description="ACME offers end-to-end project development services."
                        icon={
                            <FaComputer size={24} className="text-blue-600" />
                        }
                        bgColor="bg-blue-100"
                    />
                </div>
                <div className="p-6">
                    <Card
                        title="Product Management"
                        description="Our experts guide you through the entire product lifecycle, from ideation to launch and beyond."
                        icon={
                            <LiaLaptopCodeSolid
                                size={24}
                                className="text-blue-500"
                            />
                        }
                        bgColor="bg-blue-100"
                    />
                </div>
                <div className="p-6">
                    <Card
                        title="Personalized Mentorship"
                        description="Our mentors provide one-on-one guidance tailored to your unique needs and aspirations."
                        icon={<GiChart size={24} className="text-pink-600" />}
                        bgColor="bg-pink-100"
                    />
                </div>
            </Slider>
        </div>
    );
};

export default ServiceCarousel;
