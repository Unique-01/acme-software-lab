import { updateHeaderTitle } from "pages/hooks/useHeaderTitle";
import React, { useEffect } from "react";

import WeeklyProgress from "../components/studentDetails/WeeklyProgress";
import Tasks from "../components/studentDetails/Tasks";
import TaskProgress from "../components/studentDetails/TaskProgress";
import Header from "../components/studentDetails/Header";
import SubmittedTask from "../components/studentDetails/SubmittedTask";

const StudentDetails: React.FC = () => {
    useEffect(() => {
        updateHeaderTitle("Student Details");
    }, []);
    return (
        <div className="p-5">
            <div className="grid lg:grid-cols-7 gap-10">
                <div className="col-span-5 space-y-10">
                    <div>
                        <Header />
                    </div>
                    <div className="grid md:grid-cols-3 gap-5 items-start">
                        <div>
                            <WeeklyProgress />
                        </div>
                        <div>
                            <Tasks />
                        </div>
                        <div>
                            <TaskProgress />
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <SubmittedTask/>
                </div>
            </div>
        </div>
    );
};

export default StudentDetails;
