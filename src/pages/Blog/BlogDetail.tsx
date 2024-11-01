import { Link, useParams } from "react-router-dom";
import blogList from "./components/blogs.json";
import BlogCard from "./components/BlogCard";
import Newsletter from "./components/Newsletter";

const BlogDetail: React.FC = () => {
    const { blogId } = useParams();
    const blog = blogList.find((blog) => blog.id.toString() === blogId);

    return (
        <div>
            <div className="container py-10">
                <div className="container mb-20">
                    <div className="text-xs flex gap-4 mb-5 ">
                        <span className="uppercase font-bold text-gray-800">
                            {blog?.category}
                        </span>
                        <span className="text-neutral-500">{blog?.date}</span>
                    </div>
                    <h1 className="raleway text-[43px] text-gray-800 font-bold ">
                        {blog?.title}
                    </h1>
                </div>
                <div>
                    <img
                        src={blog?.image}
                        alt=""
                        className="rounded-2xl max-h-[600px] w-full object-cover"
                    />
                </div>
                <div className="container mt-10">
                    <p className="font-normal text-neutral-600">
                        {blog?.content}
                    </p>
                </div>
                <div className="mt-20">
                    <div className="flex justify-between items-center flex-wrap mb-10">
                        <h3 className="text-4xl raleway font-bold ">
                            Similar Posts
                        </h3>
                        <Link
                            to="/blogs"
                            className="bg-blue-800 text-white rounded-lg p-3 px-10 font-bold">
                            View all
                        </Link>
                    </div>
                    <div className="md:grid grid-cols-2 lg:grid-cols-3  gap-8 ">
                        {blogList.slice(0, 3).map((blog, index) => (
                            <div key={index}>
                                <BlogCard blog={blog} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-20">
                <Newsletter />
            </div>
        </div>
    );
};

export default BlogDetail;
