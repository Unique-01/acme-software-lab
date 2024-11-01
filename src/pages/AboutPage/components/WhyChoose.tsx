import Reasons from "./whyChoose.json";

interface ReasonProps {
    id: number;
    title: string;
    description: string;
}

const WhyChoose: React.FC = () => {
    return (
        <div className="pb-20">
            <div className="mb-10">
                <h2 className="text-4xl text-center font-semibold">
                    Why Choose Us?
                </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Reasons.map((reason) => (
                    <ReasonCard
                        id={reason.id}
                        title={reason.title}
                        description={reason.description}
                    />
                ))}
            </div>
        </div>
    );
};

const ReasonCard: React.FC<ReasonProps> = ({ id, title, description }) => {
    return (
        <div
            className={`p-5  rounded-lg ${
                id % 2 !== 0 ? "bg-green-50" : "border"
            } `}>
            <div className="relative">
                <div
                    className={`absolute -top-3  w-[27px] h-[54px] bg-blue-100 ${
                        id % 2 !== 0
                            ? "rounded-l-full rotate-45"
                            : "rounded-r-full -rotate-45 left-5"
                    }`}></div>
                <h5 className="text-blue-800 relative text-4xl mb-5">
                    {id < 10 ? `0${id}` : id}
                </h5>
            </div>
            <h3 className="text-xl font-medium mb-3">{title}</h3>
            <p className="mb-4 font-normal text-gray-900">{description}</p>
        </div>
    );
};

export default WhyChoose;
