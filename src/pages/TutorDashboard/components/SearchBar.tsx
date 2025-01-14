import React from "react";
import { IoSearch } from "react-icons/io5";

interface SearchBarProps {
    placeholder: string;
    onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, onSearch }) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onSearch) {
            onSearch(event.target.value);
        }
    };

    return (
        <div className="relative w-full md:w-auto">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:border-blue-500 placeholder:font-normal"
                onChange={handleSearch}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <IoSearch size={22} className="text-blue-800" />
            </div>
        </div>
    );
};

export default SearchBar;
