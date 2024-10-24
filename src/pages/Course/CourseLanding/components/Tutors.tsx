import TutorImage from "assets/course.jpeg";
import TutorCard from "./TutorCard";
const tutors = [
    {
        image: TutorImage,
        name: "Theresa Webb",
        role: "Application Support Analyst Lead",
        experience:
            "Former co-founder of Opendoor. Early staff at Spotify and Clearbit.",
    },
    {
        image: TutorImage,
        name: "Theresa Webb",
        role: "Application Support Analyst Lead",
        experience:
            "Lead engineering teams at Figma, Pitch, and Protocol Labs.",
    },
    {
        image: TutorImage,
        name: "Theresa Webb",
        role: "Application Support Analyst Lead",
        experience: "Former PM for Linear, Lambda School, and On Deck.",
    },
    {
        image: TutorImage,
        name: "Theresa Webb",
        role: "Application Support Analyst Lead",
        experience: "Former frontend dev for Linear, Coinbase, and Postscript.",
    },
];

const Tutors: React.FC = () => {
    return (
        <div className="container py-10">
            <div className="text-center">
                <p className="text-xs font-semibold text-blue-800 mb-3">
                    Tutors
                </p>
                <h2 className="text-2xl font-semibold mb-4">Meet the Heroes</h2>
                <p className="text-neutral-500 font-normal">
                    On Weekend UX, instructors from all over the world instruct
                    millions of students.
                    <br /> We offer the knowledge and abilities.
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
                {tutors.map((tutor, index) => (
                    <div key={index}>
                        <TutorCard tutor={tutor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tutors;
