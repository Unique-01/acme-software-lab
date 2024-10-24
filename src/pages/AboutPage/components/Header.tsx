const Header: React.FC = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div>
                <h1 className="text-blue-800 text-5xl font-bold mb-5">
                    About Us
                </h1>
                <h2 className="capitalize font-semibold text-4xl leading-[58px] mb-4">
                    Training and consulting company.
                </h2>
                <p className="font-normal text-xl text-gray-900 leading-9 tracking-wider">
                    At ACME Software Lab, we are passionate about empowering
                    individuals and organizations through innovative training
                    and consulting services. As a leading provider in the tech
                    industry, our mission is to bridge the gap between
                    technology and talent, helping our clients achieve their
                    fullest potential.
                </p>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Header;
