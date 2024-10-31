import BlogImg from "assets/blogImg.jpeg";
import BlogCard, { BlogCardFirst } from "./components/BlogCard";
import Newsletter from "./components/Newsletter";

const blogs = [
    {
        id: 1,
        image: BlogImg,
        category: "Development",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        content:
            "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
        date: "16 March 2023",
    },
    {
        id: 2,
        image: BlogImg,
        category: "Development",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        content:
            "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
        date: "16 March 2023",
    },
    {
        id: 3,
        image: BlogImg,
        category: "Development",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        content:
            "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
        date: "16 March 2023",
    },
    {
        id: 4,
        image: BlogImg,
        category: "Development",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        content:
            "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
        date: "16 March 2023",
    },
    {
        id: 5,
        image: BlogImg,
        category: "Development",
        title: "How to make a Game look more attractive with New VR & AI Technology",
        content:
            "Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.",
        date: "16 March 2023",
    },
];

const BlogList: React.FC = () => {
    return (
        <div>
            <div className="container py-10">
                <div className="flex justify-center text-center mb-20">
                    <div>
                        <h1 className="raleway font-bold text-neutral-500">
                            OUR BLOGS
                        </h1>
                        <h2 className="raleway font-bold text-5xl my-5">
                            Find all our blogs from here
                        </h2>
                        <p className="text-neutral-500 font-normal max-w-[756px]">
                            our blogs are written from very research research
                            and well known writers writers so that we can
                            provide you the best blogs and articles articles for
                            you to read them all along
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className="text-4xl raleway font-bold mb-10">
                            Our Recent Post
                        </h3>
                        <div className="md:grid grid-cols-2 lg:grid-cols-3  gap-8 ">
                            {blogs.slice(0, 4).map((blog, index) =>
                                index === 0 ? (
                                    <div key={index} className="lg:col-span-3">
                                        <BlogCardFirst blog={blog} />
                                    </div>
                                ) : (
                                    <div key={index} className="lg:mt-10">
                                        <BlogCard blog={blog} />
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-4xl raleway font-bold mb-10">
                            Popular Post
                        </h3>
                        <div className="md:grid grid-cols-2 lg:grid-cols-3  gap-8 ">
                            {blogs.map((blog, index) => (
                                <div key={index}>
                                    <BlogCard blog={blog} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Newsletter />
            </div>
        </div>
    );
};

export default BlogList;
