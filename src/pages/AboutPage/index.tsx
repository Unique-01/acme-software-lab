import Header from "./components/Header";
import MissionSection from "./components/MissionSection";
import WhyChoose from "./components/WhyChoose";

const AboutPage: React.FC = () => {
    return (
        <div className="container my-10">
            <Header />
            <MissionSection />
            <WhyChoose />
        </div>
    );
};

export default AboutPage;
