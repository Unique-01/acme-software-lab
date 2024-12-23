import { useState } from "react";
import SearchBar from "../SearchBar";
import SelectOption from "../SelectBar";
import StudentCourseCard from "../StudentCourseCard";
import CourseImg from "assets/j.jpeg";

const CoursesTab: React.FC = () => {
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

    const Courses = [
        {
            title: "31. Learn More About Web Design",
            subtitle: "Learn Ethical Hacking From Scratch",
            image: CourseImg,
        },
        {
            title: "31. Learn More About Web Design",
            subtitle: "Learn Ethical Hacking From Scratch",
            image: CourseImg,
        },
        {
            title: "31. Learn More About Web Design",
            subtitle: "Learn Ethical Hacking From Scratch",
            image: CourseImg,
        },
    ];

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">
                    Courses <span className="font-normal">(3)</span>
                </h1>
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
                <div className="grid grid-cols-3 gap-5 me-10 my-10">
                    {Courses.map((item, index) => (
                        <StudentCourseCard {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesTab;
