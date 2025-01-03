import { useState } from "react";
import SearchBar from "../SearchBar";
import SelectOption from "../SelectBar";
import Wishlist from "../CourseTable";
import CourseImg from "assets/k.jpeg";

const WishlistTab: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState("");
    const [selectedStatusOption, setSelectedStatusOption] = useState("");

    const sortOptions = [
        { value: "latest", label: "Latest" },
        { value: "alphabetically", label: "Alphabetically" },
    ];
    const statusOptions = [
        { value: "all_courses", label: "All Courses" },
        { value: "alphabetically", label: "Alphabetically" },
    ];
    const sampleWishlist = [
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
            <div className="mt-5 grid grid-cols-4 gap-5 me-5">
                <div className="col-span-2">
                    <SearchBar
                        placeholder="Search in your courses..."
                        value={searchQuery}
                        onChange={setSearchQuery}
                    />
                </div>
                <SelectOption
                    options={sortOptions}
                    value={selectedSortOption}
                    onChange={setSelectedSortOption}
                    label="Sort by:"
                />
                <SelectOption
                    options={statusOptions}
                    value={selectedStatusOption}
                    onChange={setSelectedStatusOption}
                    label="Status:"
                />
            </div>
            <div className="p-5">
                {" "}
                <h2 className="text-xl  mb-4">
                    <span className="font-bold">Wishlist</span> (
                    {sampleWishlist.length})
                </h2>
                <Wishlist
                    tableTitle="courses"
                    items={sampleWishlist}
                    actionText="buy now"
                />
            </div>
        </div>
    );
};

export default WishlistTab;
