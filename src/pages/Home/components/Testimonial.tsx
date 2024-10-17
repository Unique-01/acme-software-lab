import TestimonialCard from "components/TestimonialCard";
import TestimonialImg from "../assets/testimonialImg.jpeg";

const testimonials = [
    {
        name: "Micheal Wong",
        role: "Founder Cova",
        image: TestimonialImg,
        content:
            "Working with ACME has been a game-changer for our business. Their website development services transformed our online presence, and the tech training sessions equipped our team.",
    },
    {
        name: "Micheal Wong",
        role: "Founder Cova",
        image: TestimonialImg,
        content:
            "Working with ACME has been a game-changer for our business. Their website development services transformed our online presence, and the tech training sessions equipped our team.",
    },
    {
        name: "Micheal Wong",
        role: "Founder Cova",
        image: TestimonialImg,
        content:
            "Working with ACME has been a game-changer for our business. Their website development services transformed our online presence, and the tech training sessions equipped our team.",
    },
];

const Testimonial: React.FC = () => {
    return (
        <div className="bg-gray-50 py-14">
            <div className="container">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-5 mb-3">
                        <div className="bg-indigo-700 w-14 h-1"></div>
                        <p className="text-gray-600 text-2xl font-normal">
                            Testimonial
                        </p>
                    </div>
                    <p className="jakarta-font text-gray-900 text-4xl font-semibold">
                        Client & Student Testimonial
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 mt-14">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            testimonial={testimonial}
                            key={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
