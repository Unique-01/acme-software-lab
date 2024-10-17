interface Testimonial {
    image: string;
    name: string;
    role: string;
    content: string;
}

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
    return (
        <div className="bg-white rounded-lg p-7 text-gray-600">
            <div className="flex gap-3 items-center">
                <div>
                    <img
                        src={testimonial.image}
                        alt="Testimonial"
                        className="rounded-full w-24 h-24"
                    />
                </div>
                <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p>{testimonial.role}</p>
                </div>
            </div>
            <p className="font-normal mt-4 tracking-wider">{testimonial.content}</p>
        </div>
    );
};

export default TestimonialCard;
