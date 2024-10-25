import MissionImg from "../assets/missionImg.jpeg";

const MissionSection: React.FC = () => {
    return (
        <div className="grid lg:grid-cols-2 py-20">
            <div className="">
                <div className="bg-neutral-100 h-[474px] w-[450px] rounded-lg relative">
                    <div className="absolute left-5 top-10">
                        <img
                            src={MissionImg}
                            alt=""
                            className="w-[410px] h-[471px] rounded-lg object-cover"
                        />
                    </div>
                </div>
            </div>
            <div className="pe-5">
                <div className="mb-10">
                    <h3 className="text-blue-800 font-bold text-xl mb-3">
                        Our Mission
                    </h3>
                    <p className="font-normal text-gray-900 text-sm leading-[26px]">
                        At ACME Software Lab, our mission is simple yet
                        profound: to cultivate a community of tech-savvy
                        professionals equipped with the expertise needed to
                        thrive in today's digital landscape. We strive to bridge
                        the gap between theoretical knowledge and practical
                        application, ensuring our clients are not only
                        well-versed in the latest technologies but also capable
                        of implementing them effectively.
                    </p>
                </div>
                <div>
                    <h3 className="text-blue-800 font-bold text-xl mb-3">
                        What We Offer
                    </h3>
                    <ol className="list-decimal list-inside">
                        <div className="mb-5">
                            <li className="font-semibold text-xl mb-3">
                                Comprehensive Training Programs
                            </li>
                            <p className="font-normal text-gray-900 text-sm leading-[26px]">
                                Our training programs are designed to cater to a
                                diverse range of needs, from beginners seeking
                                foundational skills to experienced professionals
                                looking to upskill. We offer courses in:
                                <ul className="list-disc list-inside ps-5">
                                    <li>Software development</li>
                                    <li>Data Science and Analytics</li>
                                    <li>Cloud Computing</li>
                                    <li>Cybersecurity</li>
                                    <li>Project Management</li>
                                </ul>
                            </p>
                        </div>
                        <div>
                            <li className="font-semibold text-xl mb-3">
                                Expert Consulting Services
                            </li>
                            <p className="font-normal text-gray-900 text-sm leading-[26px]">
                                Our team of seasoned consultants brings a wealth
                                of experience across various industries. We
                                provide tailored consulting services to help
                                organizations harness the full potential of
                                technology. Whether you need strategic advice,
                                project management, or hands-on implementation,
                                ACME Software Lab is your trusted
                            </p>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default MissionSection;
