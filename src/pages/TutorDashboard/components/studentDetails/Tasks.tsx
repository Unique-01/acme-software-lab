import React from 'react';

const TaskCard: React.FC<{ title: string; date: string }> = ({
    title,
    date,
}) => {
    return (
        <div className="flex items-center p-3 pb-4 border-b font-normal">
            <input type="checkbox" className="rounded-full mr-3 size-5" />
            <div>
                <div className="text-gray-700 text-sm">{title}</div>
                <div className="text-gray-500 text-xs">{date}</div>
            </div>
        </div>
    );
};

const Tasks: React.FC = () => {
    const tasks = [
        { title: 'Complete assignment', date: '2023-10-01' },
        { title: 'Attend meeting', date: '2023-10-02' },
        { title: 'Submit report', date: '2023-10-03' },
        // ...more mock tasks...
    ];

    return (
        <div className="shadow p-5 bg-white rounded-lg">
            <h3 className="font-semibold mb-3">Tasks</h3>
            <div>
                {tasks.map((task, index) => (
                    <TaskCard key={index} title={task.title} date={task.date} />
                ))}
            </div>
        </div>
    );
};

export default Tasks;
