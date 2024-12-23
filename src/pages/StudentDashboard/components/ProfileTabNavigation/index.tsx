import React, { useState } from "react";
import CoursesContent from "./CoursesTab";
import TeachersContent from "./TeachersTab";
import SettingsContent from "./SettingsTab";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

const ProfileTabNavigation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("courses");

    const tabs: Tab[] = [
        { id: "courses", label: "Courses", content: <CoursesContent /> },
        { id: "teachers", label: "Teachers", content: <TeachersContent /> },
        { id: "settings", label: "Settings", content: <SettingsContent /> },
    ];

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className=" flex justify-center border border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-10 py-5 font-medium ${
                            activeTab === tab.id
                                ? "text-black border-b-2 border-blue-500"
                                : "text-gray-500"
                        }`}>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
                {tabs.find((tab) => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};

export default ProfileTabNavigation;
