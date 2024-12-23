interface SelectOptionProps {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    label: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({
    options,
    value,
    onChange,
    label,
}) => {
    return (
        <div className="">
            <div className="mb-1">
                <label className="font-normal text-xs text-gray-500">
                    {label}
                </label>
            </div>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full  bg-white border  py-2 px-4 text-gray-700 focus:outline-none focus:border-gray-400 font-normal">
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectOption;
