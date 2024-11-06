import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import Header from "./Header";

const DashboardLayout: React.FC = () => {
    return (
        <div className="grid grid-cols-5 ">
            <div>
                <SideNav />
            </div>
            <div className="col-span-4 w-full">
                <Header />
                <Outlet />
            </div>
        </div>
    );
};

export default DashboardLayout;
