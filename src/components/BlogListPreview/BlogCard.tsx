import { Link } from "react-router-dom";

interface Blog {
    _id: string;
    image: string;
    date: string;
    title: string;
    content: string;
}

interface BlogCardProps {
    blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
                <div>
                    <img src={blog.image} alt="Blog" />
                </div>
                <div>
                    <p className="text-blue-800 text-xs font-semibold mb-3">
                        {blog.date}
                    </p>
                    <h2 className="font-semibold text-lg text-gray-900 capitalize mb-2">
                        {blog.title}
                    </h2>
                    <p className="text-gray-500 font-normal mb-5">
                        {blog.content}
                    </p>
                    <Link
                        to={`/blogs/${blog._id}`}
                        className="underline text-blue-800 font-bold">
                        Read More...
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
