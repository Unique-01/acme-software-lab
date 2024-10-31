import { Link } from "react-router-dom";

interface BlogProps {
    blog: {
        id: number | string;
        image?: string;
        title: string;
        date: string;
        content: string;
        category: string;
    };
}

export const BlogCardFirst: React.FC<BlogProps> = ({ blog }) => {
    return (
        <div className="lg:grid grid-cols-3 gap-10 items-center">
            <div className="col-span-2">
                <img
                    src={blog?.image}
                    alt="Blog"
                    className="w-full rounded-lg :max-h-[456px]"
                />
            </div>
            <div className="mt-5 lg:mt-0">
                <div className="flex gap-3 text-xs mb-5">
                    <span className="uppercase ">{blog.category}</span>
                    <span className="text-neutral-500">{blog.date}</span>
                </div>
                <h3 className="raleway font-bold text-2xl mb-5">
                    {blog.title}
                </h3>
                <p className="font-normal text-neutral-600 text-sm">
                    {blog.content}
                </p>
                <div className="my-8">
                    <Link
                        to=""
                        className="border-[1.5px] text-blue-800 font-bold text-sm rounded-lg border-blue-800 p-3 px-6  hover:bg-blue-800 hover:text-white transition-all ease-in-out duration-300">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

const BlogCard: React.FC<BlogProps> = ({ blog }) => {
    return (
        <div className="">
            <div className="">
                <img
                    src={blog?.image}
                    alt="Blog"
                    className="w-full rounded-lg :max-h-[456px]"
                />
            </div>
            <div className="mt-5">
                <div className="flex gap-3 text-xs mb-5">
                    <span className="uppercase ">{blog.category}</span>
                    <span className="text-neutral-500">{blog.date}</span>
                </div>
                <h3 className="raleway font-bold text-2xl mb-5">
                    {blog.title}
                </h3>
                <p className="font-normal text-neutral-600 text-sm">
                    {blog.content}
                </p>
                <div className="my-8">
                    <Link
                        to=""
                        className="border-[1.5px] text-blue-800 font-bold text-sm rounded-lg border-blue-800 p-3 px-6  hover:bg-blue-800 hover:text-white transition-all ease-in-out duration-300">
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
