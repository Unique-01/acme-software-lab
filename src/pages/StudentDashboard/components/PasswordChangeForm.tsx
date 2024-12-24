import PasswordInput from "components/PasswordInput";
import { useState } from "react";

const PasswordChangeForm: React.FC = () => {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
        <div className="grid grid-cols-2 my-10">
            <div>
                <div className="mb-5">
                    <h1 className="text-2xl font-semibold">Change Password</h1>
                </div>
                <form action="">
                    <div className="space-y-5">
                        <PasswordInput
                            label="Current Password"
                            name="oldPassword"
                            value={formData.oldPassword}
                            onChange={handlePasswordChange}
                            placeholder="Old Password"
                        />
                        <PasswordInput
                            label="New Password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="New Password"
                        />
                        <PasswordInput
                            label="Confirm New Password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm New Password"
                        />
                        <div className="flex justify-center">
                            <button className="text-white bg-blue-800 p-4 px-6 font-semibold hover:bg-blue-900 transition-all ease-in-out">
                                Change Password
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PasswordChangeForm;
