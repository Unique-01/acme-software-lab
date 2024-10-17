import ServiceCarousel from "./ServiceCarousel";

const Services: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="py-10">
            <div className="text-center">
                <h3 className="text-blue-800 text-2xl font-semibold">
                    Our Services
                </h3>
                <p className="text-xs text-gray-900 font-normal mt-3">
                    Empowering your future with cutting edge tech solutions and
                    personalized experience
                </p>
            </div>
            <div className="mt-5">
                <ServiceCarousel />
            </div>
        </div>
        </div>
    );
};

export default Services;
