import { CiSearch } from "react-icons/ci";

interface SearchBarProps {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
    placeholder,
    value,
    onChange,
}) => {
    return (
        <div>
            <div className="mb-1">
                <label className="font-normal text-xs text-gray-500">
                    Search:
                </label>
            </div>
            <div className="flex items-center w-full border  px-4 py-2  bg-white">
                <CiSearch size={25} className="text-gray-950" />
                <input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="ml-2 w-full outline-none border-none text-gray-700 placeholder-gray-400 font-normal focus:border-none placeholder:font-normal"
                />
            </div>
        </div>
    );
};

export default SearchBar;
