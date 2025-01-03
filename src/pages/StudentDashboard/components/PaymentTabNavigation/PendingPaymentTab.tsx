import CourseImg from "assets/k.jpeg";
import CourseTable from "../CourseTable";

const PendingPaymentTab: React.FC = () => {
    const samplePendingPayments = [
        {
            id: 1,
            title: "The Ultimate Drawing Course - Beginner to Advanced",
            instructors: ["Harry Potter", "John Wick"],
            rating: 4.6,
            reviewsCount: 451444,
            currentPrice: 37.0,
            originalPrice: 49.0,
            imageUrl: CourseImg,
        },
        {
            id: 2,
            title: "Digital Marketing Masterclass - 23 Courses in 1",
            instructors: ["Nobody"],
            rating: 4.8,
            reviewsCount: 451444,
            currentPrice: 24.0,
            imageUrl: CourseImg,
        },
        {
            id: 3,
            title: "Angular - The Complete Guide (2021 Edition)",
            instructors: ["Kevin Gilbert"],
            rating: 4.7,
            reviewsCount: 451444,
            currentPrice: 13.0,
            imageUrl: CourseImg,
        },
    ];
    return (
        <div>
            <div className="p-5">
                {" "}
                <h2 className="text-xl  mb-4">
                    <span className="font-bold">Pending</span> (
                    {samplePendingPayments.length})
                </h2>
                <CourseTable
                    tableTitle="courses"
                    items={samplePendingPayments}
                    actionText="buy now"
                />
            </div>
        </div>
    );
};

export default PendingPaymentTab;
