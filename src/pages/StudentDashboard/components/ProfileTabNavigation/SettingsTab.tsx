import { useState } from "react";
import AvatarUpload from "../AvatarUpload";
import AccountSettingForm from "../AccountSettingsForm";
import PasswordChangeForm from "../PasswordChangeForm";

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
                            <div>
                                <AccountSettingForm />
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <PasswordChangeForm />
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
