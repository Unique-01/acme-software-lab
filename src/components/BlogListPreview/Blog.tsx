import BlogImg from "assets/blogImg.jpeg";
import BlogCard from "./BlogCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
const blogs = [
    {
        _id: "1",
        image: BlogImg,
        date: "November 16, 2024",
        title: "Three Pillars of user delight",
        content:
            "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    },
    {
        _id: "1",
        image: BlogImg,
        date: "November 16, 2024",
        title: "Three Pillars of user delight",
        content:
            "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    },
    {
        _id: "1",
        image: BlogImg,
        date: "November 16, 2024",
        title: "Three Pillars of user delight",
        content:
            "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    },
    {
        _id: "1",
        image: BlogImg,
        date: "November 16, 2024",
        title: "Three Pillars of user delight",
        content:
            "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    },
];

const Blog: React.FC = () => {
    return (
        <div className="py-16 container">
            <div>
                <div className="text-center">
                    <div className="flex items-center justify-center gap-5 mb-3">
                        <div className="bg-indigo-700 w-14 h-1"></div>
                        <p className="text-gray-600 text-xl font-normal">
                            Blog
                        </p>
                    </div>
                    <p className="jakarta-font text-gray-900 text-3xl font-semibold">
                        Browse Articles
                    </p>
                </div>
                <div className="mt-5">
                    <p className="font-semibold text-xl">Our recent blogs</p>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5">
                        {blogs.map((blog, index) => (
                            <BlogCard blog={blog} key={index} />
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-16">
                    <Link
                        to=""
                        className="bg-blue-800 text-white p-5 px-24 gap-5 flex items-center rounded-xl font-bold text-lg">
                        View all <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;
