import TestimonialCard from "components/TestimonialCard";
import TestimonialImg from "assets/course.jpeg";

const testimonials = [
    {
        name: "Micheal Wong",
        role: "Web Development Student",
        image: TestimonialImg,
        content:
            "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
    {
        name: "Micheal Wong",
        role: "Web Development Student",
        image: TestimonialImg,
        content:
            "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
    {
        name: "Micheal Wong",
        role: "Web Development Student",
        image: TestimonialImg,
        content:
            "ACME's tech training program was incredible! The instructors were knowledgeable and approachable, making complex topics easy to understand. I gained practical skills in coding.",
    },
];

const Testimonial: React.FC = () => {
    return (
        <div className="bg-slate-50 py-14">
            <div className="container">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-5 mb-3">
                        <div className="bg-indigo-700 w-14 h-1"></div>
                        <p className="text-gray-600 text-xl font-normal">
                            Testimonial
                        </p>
                    </div>
                    <p className="jakarta-font text-gray-900 text-3xl font-semibold">
                        Student Testimonial
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
