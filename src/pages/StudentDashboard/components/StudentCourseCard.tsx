interface CourseCardProps {
    title: string;
    subtitle: string;
    image: string;
}

const StudentCourseCard: React.FC<CourseCardProps> = ({
    title,
    subtitle,
    image,
}) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200  shadow-md overflow-hidden">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h5 className="text-xs font-normal  text-neutral-500">
                    {subtitle}
                </h5>
                <h3 className="mt-2 text-lg  text-gray-800">{title}</h3>
            </div>
            <div className="border p-4">
                <button className="w-full py-2 px-4 bg-blue-50 text-blue-700 font-semibold  hover:bg-blue-100  transition-colors ease-in-out duration-200">
                    Watch Lecture
                </button>
            </div>
        </div>
    );
};

export default StudentCourseCard;
