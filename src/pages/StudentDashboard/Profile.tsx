import CoverImg from "./assets/coverImg.jpeg";
import UserImg from "./assets/user.png";

const Profile: React.FC = () => {
    return (
        <div className="py-5 poppins">
            <div className="ms-5">
                <h1 className="poppins text-xl">Profile</h1>
            </div>
            <div className="container py-10">
                <div className="">
                    <div className="relative mb-16">
                        <img
                            src={CoverImg}
                            alt=""
                            className="max-h-40 w-full object-cover rounded-lg"
                        />
                        <img
                            src={UserImg}
                            alt=""
                            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-28 h-28 border-2 border-white rounded-full object-cover "
                        />
                    </div>
                    <div className="flex justify-center text-center flex-col gap-2">
                        <p className="text-blue-900 text-xl">Kelvin Yeboah</p>
                        <p className="font-normal text-gray-500">
                            @kelvin_yeboah
                        </p>
                        <p className="font-normal text-blue-900">
                            Computer Science
                        </p>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="border-s-8 rounded-lg border-s-blue-800">
                        <div className="p-2 px-4 bg-slate-200 rounded-tr-lg border-b border-b-slate-400">
                            <h3 className="text-blue-800 text-xl">Personal</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 font-normal">
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Surname
                                    </p>
                                    <p className="text-2xl">Yeboah</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500">
                                        Other Names
                                    </p>
                                    <p className="text-2xl">Kelvin</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Gender
                                    </p>
                                    <p className="text-2xl">Male</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500 ">
                                        Date of Birth
                                    </p>
                                    <p className="text-2xl">01/01/2001</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Country
                                    </p>
                                    <p className="text-2xl">Ghana</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500 ">
                                        Region
                                    </p>
                                    <p className="text-2xl">Eastern</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Religion
                                    </p>
                                    <p className="text-2xl">Christianity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-s-8 rounded-lg border-s-blue-800 mt-10">
                        <div className="p-2 px-4 bg-slate-200 rounded-tr-lg border-b border-b-slate-400">
                            <h3 className="text-blue-800 text-xl">Contact</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-5 p-5 font-normal">
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Email
                                    </p>
                                    <p className="text-2xl">
                                        kelvin.yeboah@gmail.com
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500">
                                        Mobile Number
                                    </p>
                                    <p className="text-2xl">0234567891</p>
                                </div>
                                <div>
                                    <p className="text-lg text-gray-500">
                                        Alternate Mobile Number
                                    </p>
                                    <p className="text-2xl">0234567891</p>
                                </div>
                            </div>
                            <div>
                                <div className="mb-4">
                                    <p className="text-lg text-gray-500 ">
                                        Postal Address
                                    </p>
                                    <p className="text-2xl">
                                        c/o Kelvin Yeboah P. O. Box 1122 Ile Ife
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
