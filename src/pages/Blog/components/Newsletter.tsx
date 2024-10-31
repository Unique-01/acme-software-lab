const Newsletter: React.FC = () => {
    return (
        <div className="bg-blue-800 text-white">
            <div className="flex justify-center text-center py-20 ">
                <div className="max-w-[768px]">
                    <h3 className="raleway font-bold text-5xl">
                        Get our blog posts delivered to your inbox weekly.
                    </h3>
                    <div className="flex gap-5 justify-center mt-10">
                        <input
                            type="text"
                            placeholder="Your Email"
                            className="font-normal py-3 px-5 rounded-lg text-gray-700"
                        />
                        <button className="border border-white py-3 px-5 rounded-lg hover:bg-white hover:text-blue-800 font-bold raleway transition-all ease-in-out duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
