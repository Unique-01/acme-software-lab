import Person from "../assets/Person.svg";
import TV from "../assets/MonitorPlay.svg";
import Padlock from "../assets/LockKeyOpen.svg";
import Certificate from "../assets/Certificate.svg";
const WhyChoose: React.FC = () => {
    return (
        <div className="container py-12">
            <div className="text-center">
                <div className="flex items-center justify-center gap-5 mb-5">
                    <div className="bg-indigo-700 w-14 h-1"></div>
                    <p className="text-gray-600 text-2xl font-normal">
                        Why choose us
                    </p>
                </div>
                <p className="jakarta-font text-gray-950 text-4xl font-semibold">
                    Our Unique Approach to Innovation
                </p>
            </div>
            <div className="mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap-10">
                    <div className="shadow border pt-10 p-5 rounded-3xl text-center">
                        <div className="flex justify-center">
                            <img
                                src={Person}
                                alt="Person"
                                className="size-20"
                            />
                        </div>
                        <p className="jakarta-font mt-5 text-2xl font-semibold">
                            Holistic Expertise
                        </p>
                    </div>
                    <div className="shadow border pt-10 p-5 rounded-3xl text-center">
                        <div className="flex justify-center">
                            <img src={TV} alt="TV" className="size-20" />
                        </div>
                        <p className="jakarta-font mt-5 text-2xl font-semibold">
                            Customized Training Programs
                        </p>
                    </div>
                    <div className="shadow border pt-10 p-5 rounded-3xl text-center">
                        <div className="flex justify-center">
                            <img
                                src={Padlock}
                                alt="Padlock"
                                className="size-20"
                            />
                        </div>
                        <p className="jakarta-font mt-5 text-2xl font-semibold">
                            Proven Project Success
                        </p>
                    </div>
                    <div className="shadow border pt-10 p-5 rounded-3xl text-center">
                        <div className="flex justify-center">
                            <img
                                src={Certificate}
                                alt="Certificate"
                                className="size-20"
                            />
                        </div>
                        <p className="jakarta-font mt-5 text-2xl font-semibold">
                            Innovative Approaches
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;
