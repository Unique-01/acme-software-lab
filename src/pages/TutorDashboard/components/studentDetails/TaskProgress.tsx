import StraightLineProgressBar from "../StraightLineProgressBar";

const TaskProgress: React.FC = () => {
    return (
        <div className="shadow p-5 bg-white rounded-lg">
            <h3 className="font-semibold mb-3">Task Progress</h3>
            <div className="space-y-5">
                <div>
                    <StraightLineProgressBar
                        title="Copywriting"
                        current={3}
                        total={8}
                        color="#D459E8"
                    />
                </div>
                <div>
                    <StraightLineProgressBar
                        title="Illustrations"
                        current={6}
                        total={10}
                    />
                </div>
                <div>
                    <StraightLineProgressBar
                        title="Ui Design"
                        current={2}
                        total={7}
                        color="blue"
                    />
                </div>
            </div>
        </div>
    );
};

export default TaskProgress;
