import CircularProgressBar from "../CircularProgressBar";
const WeeklyProgress: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-5 pb-10 ">
            <div className="space-y-3">
                <p className="font-semibold">Weekly progress</p>
                <p className="text-gray-400 text-xs font-normal">
                    Start from Nov 1-14, 2020
                </p>
            </div>
            <div className="flex justify-center mt-8">
                <CircularProgressBar
                    percentage={75}
                    additionalText="Tasks Completed"
                />
            </div>
        </div>
    );
};

export default WeeklyProgress;
