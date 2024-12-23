import { useState } from "react";
import AvatarUpload from "../AvatarUpload";

const SettingsTab: React.FC = () => {
    const [avatar, setAvatar] = useState<string | null>(null);

    const handleImageUpload = (file: File | null) => {
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setAvatar(reader.result as string);
            reader.readAsDataURL(file);
        }
    };
    return (
        <div>
            <div>
                <h1 className="text-2xl font-semibold">Account Settings</h1>
                <div className="my-7">
                    <form action="">
                        <div className="grid grid-cols-2">
                            <div className="me-24">
                                <AvatarUpload
                                    onImageUpload={handleImageUpload}
                                    imagePreview={avatar || undefined}
                                />
                            </div>
                            <div className="font-normal -ms-5">
                                <div className="space-y-1 mb-5">
                                    <label
                                        htmlFor="full_name"
                                        className="text-sm">
                                        Full Name
                                    </label>
                                    <br />

                                    <input
                                        type="text"
                                        name="full_name"
                                        placeholder="Full Name"
                                        className="border p-3 w-full px-4"
                                    />
                                </div>
                                <div className="space-y-1 mb-5">
                                    <label
                                        htmlFor="username"
                                        className="text-sm">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        className="border p-3 w-full px-4"
                                    />
                                </div>
                                <div className="space-y-1 mb-5">
                                    <label
                                        htmlFor="full_name"
                                        className="text-sm">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        className="border p-3 w-full px-4"
                                    />
                                </div>
                                <div className="space-y-1 mb-5">
                                    <label htmlFor="title" className="text-sm">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="title"
                                        className="border p-3 w-full px-4"
                                    />
                                </div>
                                <div>
                                    <button className="text-white bg-blue-800 p-4 px-6 font-semibold">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
