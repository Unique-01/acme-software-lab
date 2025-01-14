import React, { useState } from "react";
import { HiTicket } from "react-icons/hi2";

type PaymentOption = "part" | "full";

const PaymentCheckout: React.FC = () => {
    const [selected, setSelected] = useState<PaymentOption | null>("full");

    const handleSelect = (option: PaymentOption) => {
        setSelected(option);
    };
    return (
        <div className="poppins mb-5">
            <div className="p-8 ps-10">
                <h1 className="poppins text-xl">Payment</h1>
            </div>
            <div className="w-3/4 md:w-1/2 mx-auto  space-y-5">
                <div
                    className={`flex justify-between mx-auto w-full  p-5 py-3 rounded-lg cursor-pointer ${
                        selected === "full"
                            ? "border-2 border-blue-700 bg-gray-200"
                            : "bg-neutral-200"
                    }`}
                    onClick={() => handleSelect("full")}>
                    <p className="font-normal">Full payment</p>
                    <p className="font-semibold">₦50,000.00</p>
                </div>
                <div
                    className={`flex justify-between mx-auto w-full  p-5 py-3 rounded-lg cursor-pointer ${
                        selected === "part"
                            ? "border-2 border-blue-700 bg-gray-200"
                            : "bg-neutral-200"
                    }`}
                    onClick={() => handleSelect("part")}>
                    <p className="font-normal">Part payment</p>
                    <p className="font-semibold">₦25,000.00</p>
                </div>
                <div className="space-y-2 text-sm ">
                    <label htmlFor="learningMode" className=" font-semibold">
                        Mode of learning
                    </label>
                    <select
                        name="learningMode"
                        id=""
                        className="capitalize border bg-white p-3 w-full rounded-lg text-gray-500 ">
                        <option value="">select mode of learning</option>
                        <option value="onsite">Onsite</option>
                        <option value="online">Online</option>
                    </select>
                </div>
                <div className="space-y-2 text-sm ">
                    <label htmlFor="course" className=" font-semibold">
                        Course
                    </label>
                    <select
                        name="learningMode"
                        id=""
                        className="capitalize border bg-white p-3 w-full rounded-lg text-gray-500 ">
                        <option value="dataAnalysis">Data Analysis</option>
                        <option value="webDevelopment">Web Development</option>
                    </select>
                </div>
                <hr />
                <div className="shadow-md p-5">
                    <div className="inline-flex gap-5 items-center border p-1 px-5 w-full">
                        <HiTicket className="text-blue-800" size={40} />
                        <span className="text-sm font-normal"> Summary</span>
                    </div>
                    <div className="mt-3 space-y-3">
                        <p className="text-sm">
                            {selected === "full"
                                ? "Full Payment"
                                : "Part Payment"}
                        </p>
                        <p className="font-normal text-sm text-gray-600 flex justify-between w-full">
                            <span>Course</span>
                            <span>Data Analysis</span>
                        </p>
                        <p className="font-normal text-sm text-gray-600 flex justify-between w-full">
                            <span>Mode of Learning</span>
                            <span>Online</span>
                        </p>
                        <hr />
                        <p className=" flex justify-between w-full">
                            <span>Total</span>
                            <span>N25,000</span>
                        </p>
                    </div>
                </div>
                <div>
                    <button className="bg-blue-800 hover:bg-blue-900 transition-all ease-in-out font-semibold rounded text-white w-full text-center p-3">
                        Pay N25,000
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentCheckout;
