import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";

const DashboardLayout: React.FC = () => {
    return (
        <div className="grid grid-cols-5 gap-5">
            <div>
                <SideNav />
            </div>
            <div className="col-span-4">
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
