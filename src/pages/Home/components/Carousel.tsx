import React, { useState, useEffect } from "react";
import { PiLightningFill } from "react-icons/pi";
import CarouselImg from "../assets/carousel-img1.jpeg";
import Carousel2 from "../assets/joinImg.jpeg";

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fade, setFade] = useState(true);

    const slides = [
        {
            title: "Slide 1",
            description:
                "At Acme, we create stunning, responsive websites that are tailored to meet your business goals.",
            backgroundImage: CarouselImg,
        },
        {
            title: "Slide 2",
            description:
                "Empower yourself with our comprehensive tech training programs. And gain the skills needed to excel in today's digital world.",
            backgroundImage: Carousel2,
        },
        {
            title: "Slide 3",
            description:
                "We help businesses make informed decisions by transforming raw data into actionable insights.",
            backgroundImage: CarouselImg,
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
                setFade(true);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
            <div className="carousel overflow-hidden h-full">
                <div className="relative w-full h-full">
                    <div
                        style={{
                            backgroundImage: `url(${slides[currentIndex].backgroundImage})`,
                        }}
                        className="w-full h-full bg-cover bg-center"></div>
                    <div
                        className={`absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-4 transition-opacity duration-500 ${
                            fade ? "opacity-100" : "opacity-0"
                        }`}>
                        <div className="flex items-center bg-white p-3 rounded-lg">
                            <div className="bg-indigo-700 p-3 rounded-lg">
                                <PiLightningFill className="text-2xl" />
                            </div>
                            <h1 className="text-2xl md:text-4xl text-black mx-3 vietnam-font">
                                <span className="text-blue-700">
                                    Where&nbsp;
                                </span>
                                Tech Dreams Take Flight
                            </h1>
                        </div>
                        <p className="mt-6 text-sm md:text-lg text-center max-w-xl md:max-w-2xl">
                            {slides[currentIndex].description}
                        </p>
                        <button className="mt-6 md:mt-14 transition ease-in-out delay-150 bg-blue-700 py-2 px-4 md:py-3 md:px-6 rounded-md hover:bg-blue-800">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 md:h-3 rounded-full transition-all duration-500 ${
                            index === currentIndex
                                ? "bg-blue-800 w-8 md:w-10"
                                : "bg-white w-2 md:w-3"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
