import { Link } from "react-router-dom";
import { useState } from "react";
import "./signUp.css";
import { IoArrowForward } from "react-icons/io5";

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        course: "",
        surname: "",
        firstName: "",
        otherName: "",
        gender: "Male",
        contactAddress: "",
        dob: "",
        nationality: "Nigeria",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
        modeOfStudy: "Full-time",
        computerSkill: "Yes",
        specialty: "",
        nextOfKinFirstName: "",
        nextOfKinLastName: "",
        nextOfKinRelationship: "",
        nextOfKinAddress: "",
        nextOfKinPhoneNumber: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     console.log(formData);
    //     // Add logic to handle the form data (e.g., sending it to a backend)
    // };
    return (
        <div className="container py-10 pb-20">
            <div className="shadow-lg py-20 px-12">
                <div className="text-center">
                    <h1 className="text-blue-800 font-semibold text-3xl raleway mb-5">
                        ACME Training Form
                    </h1>
                    <p className="font-bold mb-10">
                        Kindly complete this form correctly
                    </p>
                    <p className="text-xs font-normal text-gray-900">
                        Already registered?{" "}
                        <Link to="/login" className="text-blue-600">
                            Login here
                        </Link>
                    </p>
                </div>
                <div className="mt-10">
                    <form>
                        <div className="grid md:grid-cols-2 gap-x-10 gap-y-7 open-sans">
                            {/* Preferred Course */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800  text-sm">
                                    Select Preferred Course:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="border p-2 rounded bg-transparent font-normal text-sm"
                                    required>
                                    <option value="">--Select Course--</option>
                                    <option value="Course1">Course 1</option>
                                    <option value="Course2">Course 2</option>
                                    <option value="Course3">Course 3</option>
                                </select>
                            </div>

                            {/* Surname */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Surname:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="surname"
                                    value={formData.surname}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your surname"
                                    required
                                />
                            </div>

                            {/* First Name */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    First Name:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your first name"
                                    required
                                />
                            </div>

                            {/* Other Name */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Other Name:
                                </label>
                                <input
                                    type="text"
                                    name="otherName"
                                    value={formData.otherName}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your other name"
                                />
                            </div>

                            {/* Gender */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Gender:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm bg-transparent"
                                    required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>

                            {/* Contact Address */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Contact Address:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="contactAddress"
                                    value={formData.contactAddress}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your contact address"
                                    required
                                />
                            </div>

                            {/* Nationality */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Nationality:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your nationality"
                                    required
                                />
                            </div>

                            {/* Date of Birth */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Date of Birth (Optional):
                                </label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                />
                            </div>

                            {/* Phone Number */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Phone Number:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Email Address:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Password (at least 6 characters):{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Create your password"
                                    required
                                />
                            </div>

                            {/* Confirm Password */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Confirm Password:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Confirm your password"
                                    required
                                />
                            </div>

                            {/* Mode of Study */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Mode of Study:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="modeOfStudy"
                                    value={formData.modeOfStudy}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm bg-transparent"
                                    required>
                                    <option value="Full-time">Full-time</option>
                                    <option value="Part-time">Part-time</option>
                                </select>
                            </div>

                            {/* Previous Computer Skill */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Do you have any previous computer skill?{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <select
                                    name="computerSkill"
                                    value={formData.computerSkill}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm bg-transparent"
                                    required>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            {/* Area of Specialty */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    If you have previous computer skill, please
                                    state your area of specialty:
                                </label>
                                <input
                                    type="text"
                                    name="specialty"
                                    value={formData.specialty}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your area of specialty (if any)"
                                />
                            </div>

                            {/* Next of Kin */}
                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    First name of next of kin:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nextOfKinFirstName"
                                    value={formData.nextOfKinFirstName}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your next of kin's first name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Surname of next of kin:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nextOfKinLastName"
                                    value={formData.nextOfKinLastName}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your next of kin's last name"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Relationship with next of kin:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nextOfKinRelationship"
                                    value={formData.nextOfKinRelationship}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your relationship with your next of kin"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Address of next of kin:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="nextOfKinAddress"
                                    value={formData.nextOfKinAddress}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your next of kin's address"
                                    required
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className=" mb-2 font-normal text-gray-800 text-sm">
                                    Phone number of next of kin:{" "}
                                    <span className="text-red-600">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="nextOfKinPhoneNumber"
                                    value={formData.nextOfKinPhoneNumber}
                                    onChange={handleChange}
                                    className="border p-2 rounded font-normal text-sm"
                                    placeholder="Enter your next of kin's phone number"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-20 flex justify-center">
                            <button className="flex gap-3 items-center bg-blue-800 text-white font-bold px-20 text-lg py-4 rounded-xl">
                                Submit <IoArrowForward />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
