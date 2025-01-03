import { FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

type CourseTableItem = {
    id: number;
    title: string;
    instructors: string[];
    rating: number;
    reviewsCount: number;
    currentPrice: number;
    originalPrice?: number;
    imageUrl: string;
};

type CourseTableProps = {
    tableTitle: string;
    items: CourseTableItem[];
    actionText: string;
};

const CourseTable: React.FC<CourseTableProps> = ({
    tableTitle,
    items,
    actionText,
}) => {
    return (
        <div className="rounded-md">
            <div className="w-full">
                <div className="grid grid-cols-[4fr_1fr_1.8fr] text-gray-700 text-sm uppercase  border ps-10  p-2">
                    <span>{tableTitle}</span>
                    <span>PRICES</span>
                    <span>ACTION</span>
                </div>
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="grid grid-cols-[4fr_1fr_1.8fr] gap-5 items-center p-2 py-5 border-b last:border-none">
                        {/* Course Details */}
                        <div className="flex items-center gap-4">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-40 h-32 object-cover"
                            />
                            <div className="space-y-3">
                                <div className="flex items-center gap-1 text-sm font-normal">
                                    <span className="  inline-flex items-center gap-1">
                                        <FaStar
                                            className="text-orange-400"
                                            size={18}
                                        />{" "}
                                        {item.rating}
                                    </span>
                                    <span className="text-gray-400">
                                        ({item.reviewsCount.toLocaleString()}{" "}
                                        Reviews)
                                    </span>
                                </div>
                                <h3 className=" font-normal">{item.title}</h3>
                                <p className="text-sm font-normal ">
                                    <span className="text-gray-400">
                                        Course by:
                                    </span>
                                    {"  "}
                                    {item.instructors.join(" • ")}
                                </p>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="text-blue-600">
                            <span className="text-lg">
                                ${item.currentPrice.toFixed(2)}
                            </span>
                            {item.originalPrice && (
                                <span className="text-gray-400 line-through ml-2">
                                    ${item.originalPrice.toFixed(2)}
                                </span>
                            )}
                        </div>

                        {/* Action */}
                        <div className="flex items-center gap-4">
                            <Link
                                to={`/student/payment/${item.title}`}
                                className="bg-blue-50 hover:bg-blue-100 text-black font-semibold py-3 px-10 capitalize">
                                {actionText}
                            </Link>
                            <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 text-lg p-3">
                                <FaHeart />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CourseTable;
