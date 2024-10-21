const Header: React.FC = () => {
    return (
        <div className="container my-16">
            <div className="grid md:grid-cols-2 grid-cols-1 vietnam-font gap-5 px-5">
                <h3 className="font-semibold text-3xl">
                    Learn from industry professionals with real-world
                    experience.
                </h3>
                <p className="text-neutral-500 text-sm font-normal tracking-wide leading-6">
                    Welcome to ACME Tech Training, where we turn your passion
                    for technology into expertise. Our comprehensive training
                    programs are designed to equip you with the skills needed to
                    thrive in the digital age. Whether you're a beginner looking
                    to break into the tech industry or a professional seeking to
                    enhance your abilities.
                </p>
            </div>
            <hr className="mt-5"/>
        </div>
    );
};

export default Header;
