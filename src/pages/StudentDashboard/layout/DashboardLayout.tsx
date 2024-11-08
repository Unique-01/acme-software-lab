// import { Outlet } from "react-router-dom";
// import SideNav from "../components/SideNav";
// import Header from "./Header";

// const DashboardLayout: React.FC = () => {
//     return (
//         <div className="grid grid-cols-2 lg:grid-cols-5 ">
//             <div className="">
//                 <SideNav />
//             </div>
//             <div className="lg:col-span-4 w-full">
//                 <Header />
//                 <Outlet />
//             </div>
//         </div>
//     );
// };

// export default DashboardLayout;

import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
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
