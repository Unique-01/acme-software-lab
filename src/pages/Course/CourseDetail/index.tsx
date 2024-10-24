import { useParams } from "react-router-dom";
import courses from "components/course.json";

const CourseDetail: React.FC = () => {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    if (!course) {
        return <div>Course not found</div>;
    }
    return (
        <div className="container my-16">
            <div>
                <div className="">
                    <div className="grid md:grid-cols-2 grid-cols-1 vietnam-font gap-5 px-5">
                        <h3 className="font-semibold text-3xl">
                            {course.title}
                        </h3>
                        <p className="text-neutral-500 text-sm font-normal tracking-wide leading-6">
                            {course.description}
                        </p>
                    </div>
                    <hr className="mt-5" />
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
