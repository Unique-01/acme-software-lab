import { useState } from "react";
import SearchBar from "../SearchBar";
import SelectOption from "../SelectBar";
import TeacherImg from "assets/Teacher.jpeg";
import TeachersCard from "../TeachersCard";

const TeachersTab: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedSortOption, setSelectedSortOption] = useState("");

    const sortOptions = [
        { value: "all_teachers", label: "All Teachers" },
        { value: "alphabetically", label: "Alphabetically" },
    ];
    const Teachers = [
        {
            name: "Wade Warren",
            role: "Digital product Designer",
            image: TeacherImg,
            rating: 5,
            students: 878789,
        },
        {
            name: "Wade Warren",
            role: "Digital product Designer",
            image: TeacherImg,
            rating: 5,
            students: 687878,
        },
        {
            name: "Wade Warren",
            role: "Digital product Designer",
            image: TeacherImg,
            rating: 5,
            students: 687789,
        },
    ];

    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">
                    Instructors <span className="font-normal">(241)</span>
                </h1>
                <div className="mt-5 grid grid-cols-5 gap-5 ">
                    <div className="col-span-3">
                        <SearchBar
                            placeholder="Search in your teachers..."
                            value={searchQuery}
                            onChange={setSearchQuery}
                        />
                    </div>
                    <SelectOption
                        options={sortOptions}
                        value={selectedSortOption}
                        onChange={setSelectedSortOption}
                        label="Teacher:"
                    />
                </div>
                <div className="grid grid-cols-3 gap-5 me-5 my-5">
                    {Teachers.map((item, index) => (
                        <TeachersCard {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeachersTab;
