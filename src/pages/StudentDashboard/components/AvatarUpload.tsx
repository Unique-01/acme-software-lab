// src/components/AvatarUpload.tsx
import React, { useState } from "react";
import { GoShare } from "react-icons/go";

interface AvatarUploadProps {
    onImageUpload: (file: File | null) => void;
    imagePreview?: string;
    maxSizeMB?: number;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({
    onImageUpload,
    imagePreview,
    maxSizeMB = 1,
}) => {
    const [error, setError] = useState<string>("");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (file) {
            if (file.size > maxSizeMB * 1024 * 1024) {
                setError(`File size should be under ${maxSizeMB}MB.`);
                onImageUpload(null);
                return;
            }

            setError("");
            onImageUpload(file);
        }
    };

    return (
        <div className="flex flex-col items-center border p-12">
            <div className="relative w-full h-72 overflow-hidden bg-gray-200">
                <img
                    src={imagePreview || "https://via.placeholder.com/150"}
                    alt="Avatar Preview"
                    className="w-full h-full object-cover"
                />
                <label
                    htmlFor="avatar-upload"
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white cursor-pointer hover:bg-opacity-75">
                    <GoShare />
                    <span className="ml-2">Upload Photo</span>
                </label>
                <input
                    id="avatar-upload"
                    type="file"items-center
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                />
            </div>
            <p className="text-sm text-gray-500 mt-5 font-normal text-center">
                Image size should be under {maxSizeMB}MB and ratio needs to be
                1:1.
            </p>
            {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
};

export default AvatarUpload;
