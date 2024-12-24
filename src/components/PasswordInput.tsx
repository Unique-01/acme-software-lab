// src/components/PasswordInput.tsx
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

interface PasswordInputProps {
    label?: string;
    placeholder?: string;
    value: string;
    name: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
    label = "Password",
    placeholder = "Enter your password",
    value,
    name,
    onChange,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col">
            {label && (
                <label className="mb-2 text-sm font-normal">{label}</label>
            )}
            <div className="relative">
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    className="w-full p-3 pr-10 text-sm border"
                />
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-gray-700">
                    {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
            </div>
        </div>
    );
};

export default PasswordInput;
