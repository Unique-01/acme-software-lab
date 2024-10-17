import LandingImg from "../assets/landingImg2.png";
import { FaLaptopCode } from "react-icons/fa";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaChartPie } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import Duolingo from "../assets/duolingo.svg";
import CodeCov from "../assets/codecov.svg";
import UserTesting from "../assets/userTesting.svg";
import MagicLeap from "../assets/magicLeap.svg";
const HeroSection: React.FC = () => {
    return (
        <div className="pb-10">
            <div className="container relative  mt-0 lg:mt-10">
                <div className="absolute -left-5 hidden lg:block z-0">
                    <div className="w-[414px] h-[414px] border rounded-full flex justify-center items-center">
                        <div className="w-[344px] h-[344px] border rounded-full flex justify-center items-center">
                            <div className="w-[265px] h-[265px] border rounded-full flex justify-center items-center">
                                <div className="w-[186px] h-[186px] border rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:grid lg:grid-cols-2 relative gap-10">
                    <div className="mt-0 lg:mt-10 mb-10 lg:m-0">
                        <h1 className="font-bold text-6xl capitalize leading-snug  text-gray-900">
                            Elevate your{" "}
                            <span className="text-blue-800">tech skills</span>{" "}
                            at ACME
                        </h1>
                        <p className="font-normal text-neutral-500 pr-10 mt-5">
                            Our comprehensive training programs are designed to
                            equip you with the skills needed to thrive in the
                            digital age.
                        </p>
                        <div className="flex justify-between items-center mt-8">
                            <div className="flex gap-2 items-center">
                                <span className="text-yellow-400">
                                    <FaChartPie size={25} />
                                </span>
                                <span className="font-normal text-xs text-neutral-500">
                                    Data Science
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-orange-600">
                                    <HiOutlineBriefcase size={25} />
                                </span>
                                <span className="font-normal text-xs text-neutral-500">
                                    Web Development
                                </span>
                            </div>
                            <div className="flex gap-2 items-center">
                                <span className="text-purple-700">
                                    <TbBulb size={25} />
                                </span>
                                <span className="font-normal text-xs text-neutral-500">
                                    Creative Design
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <div className="relative">
                            <div className="absolute bottom-5 -left-5 ">
                                <div className="w-[495px] h-[495px] border border-blue-800 rounded-full"></div>
                            </div>
                            <div className="z-20 absolute top-44 -left-20 ">
                                <div className="border border-blue-800 flex gap-5 items-center bg-white rounded-lg p-3 px-5">
                                    <div className="bg-blue-800 text-white p-1 rounded-lg">
                                        <FaLaptopCode size={30} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">
                                            2K+
                                        </h4>
                                        <p className="font-normal text-neutral-500 text-xs">
                                            Video Courses
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="z-20 absolute right-5 ">
                                <div className="border border-blue-800 flex flex-col gap-4 items-center text-center bg-white rounded-2xl p-4 px-5">
                                    <div className="w-16 h-16 rounded-full border-t-blue-800 border-r-blue-800 border-8"></div>
                                    <div>
                                        <h4 className="font-bold text-lg mb-2">
                                            5K+
                                        </h4>
                                        <p className="font-normal text-neutral-500 text-xs">
                                            Online Courses
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-800 relative rounded-full w-[495px] h-[495px] flex justify-center  items-end z-10 ">
                                <img
                                    src={LandingImg}
                                    alt="Girl"
                                    className="w-full h-[432px] rounded-b-full object-contain  "
                                />
                            </div>
                            <div className="z-20 absolute right-14 bottom-10">
                                <div className="border border-blue-800 flex gap-4 items-center bg-white rounded-2xl p-3 px-4">
                                    <div className="bg-blue-800 text-white p-1 rounded-lg">
                                        <LiaChalkboardTeacherSolid size={30} />
                                    </div>
                                    <div>
                                        <p className="font-normal text-neutral-500 text-xs">
                                            Tutors
                                        </p>
                                        <h4 className="font-bold text-lg">
                                            250+
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-44 right-0">
                            <div className="w-[414px] h-[414px] border rounded-full flex justify-center items-center">
                                <div className="w-[344px] h-[344px] border rounded-full flex justify-center items-center">
                                    <div className="w-[265px] h-[265px] border rounded-full flex justify-center items-center">
                                        <div className="w-[186px] h-[186px] border rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center  gap-x-14 gap-y-5 flex-wrap mt-20 relative">
                    <div className="">
                        <p className="text-blue-800 font-bold text-2xl">250+</p>
                        <p className="font-light">Collaborations</p>
                    </div>
                    <div className="">
                        <img src={Duolingo} alt="Duolingo" className="h-8" />
                    </div>
                    <div className="">
                        <img src={CodeCov} alt="CodeCov" className="h-8" />
                    </div>
                    <div className="">
                        <img
                            src={UserTesting}
                            alt="User Testing"
                            className="h-8"
                        />
                    </div>
                    <div className="">
                        <img src={MagicLeap} alt="Magic Leap" className="h-8" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
