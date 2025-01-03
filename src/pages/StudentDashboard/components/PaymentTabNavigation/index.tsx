import React, { useState } from "react";
import WishlistContent from "./WishlistTab";
import PendingPaymentContent from "./PendingPaymentTab";
import PurchaseHistoryContent from "./PurchaseHistoryTab";

interface Tab {
    id: string;
    label: string;
    content: React.ReactNode;
}

const ProfileTabNavigation: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("wishlist");

    const tabs: Tab[] = [
        { id: "wishlist", label: "Wishlist", content: <WishlistContent /> },
        {
            id: "pendingPayment",
            label: "Pending Payment",
            content: <PendingPaymentContent />,
        },
        {
            id: "purchaseHistory",
            label: "Purchase History",
            content: <PurchaseHistoryContent />,
        },
    ];

    return (
        <div className="w-full">
            {/* Tab Headers */}
            <div className=" flex justify-center border-t border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-10 py-4 font-medium ${
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
