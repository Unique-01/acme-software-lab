import { Outlet } from "react-router-dom";
import SideNav from "./SideNav";
import Header from "./Header";

const DashboardLayout: React.FC = () => {
    return (
        <div className="relative lg:grid lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-1">
                <SideNav />
            </div>

            {/* Main content */}
            <div className="lg:col-span-4">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
