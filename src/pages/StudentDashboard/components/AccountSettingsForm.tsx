const AccountSettingForm: React.FC = () => {
    return (
        <div className="font-normal -ms-5">
            <div className="space-y-1 mb-5">
                <label htmlFor="full_name" className="text-sm">
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
                <label htmlFor="username" className="text-sm">
                    Username
                </label>
                <input
                    type="text"
                    placeholder="Username"
                    className="border p-3 w-full px-4"
                />
            </div>
            <div className="space-y-1 mb-5">
                <label htmlFor="full_name" className="text-sm">
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
                <button className="text-white bg-blue-800 p-4 px-6 font-semibold hover:bg-blue-900 transition-all ease-in-out">
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default AccountSettingForm;
