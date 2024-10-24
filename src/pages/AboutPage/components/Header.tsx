import headerImg1 from "../assets/headerImg1.jpeg";
import headerImg2 from "../assets/headerImg2.jpeg";

const Header: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2 ">
            <div>
                <h1 className="text-blue-800 text-5xl font-bold mb-5">
                    About Us
                </h1>
                <h2 className="capitalize font-semibold text-4xl leading-[58px] mb-4">
                    Training and consulting company.
                </h2>
                <p className="font-normal text-xl text-gray-900 leading-9 tracking-wide pr-6">
                    At ACME Software Lab, we are passionate about empowering
                    individuals and organizations through innovative training
                    and consulting services. As a leading provider in the tech
                    industry, our mission is to bridge the gap between
                    technology and talent, helping our clients achieve their
                    fullest potential.
                </p>
            </div>
            <div>
                <div className="bg-neutral-100 h-[474px] w-[450px] ms-10 rounded-lg relative">
                    <div className="absolute -right-10 -top-5">
                        <img
                            src={headerImg2}
                            alt=""
                            className="w-[376px] h-[246px] rounded-lg"
                        />
                    </div>
                    <div className="absolute -left-10 -bottom-5">
                        <img
                            src={headerImg1}
                            alt=""
                            className="w-[376px] h-[246px] rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
