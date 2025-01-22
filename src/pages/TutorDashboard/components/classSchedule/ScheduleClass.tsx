import React from 'react';
import TimeSlot from './TimeSlot';
import DateSelector from './DateSelector';
import StudentList from './StudentList';
import ClassDescription from './ClassDescription';

const ScheduleClassPage: React.FC = () => {
  const handleTimeSelect = (time: string) => {
    console.log(`Selected time: ${time}`);
  };

  const handleDateSelect = (date: Date) => {
    console.log(`Selected date: ${date.toDateString()}`);
  };

  const handleClassDescriptionSubmit = (description: string, className: string, assignee: string) => {
    console.log(`Class Description: ${description}, Class Name: ${className}, Assignee: ${assignee}`);
  };

  const students = [
    { name: 'Angela Smith', tasksInProgress: 16 },
    { name: 'Karen William', tasksInProgress: 25 },
    { name: 'Samantha William', tasksInProgress: 35 },
    { name: 'Andy Hope', tasksInProgress: 12 },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Schedule Class</h1>
      <div className="w-full max-w-md mb-4">
        <DateSelector onDateSelect={handleDateSelect} />
      </div>
      <div className="w-full max-w-md mb-4">
        <TimeSlot time="12:00" onClick={() => handleTimeSelect('12:00')} />
        <TimeSlot time="12:30" onClick={() => handleTimeSelect('12:30')} />
        {/* Add more time slots as needed */}
      </div>
      <div className="w-full max-w-md mb-4">
        <StudentList students={students} />
      </div>
      <div className="w-full max-w-md mb-4">
        <ClassDescription onSubmit={handleClassDescriptionSubmit} />
      </div>
    </div>
  );
};

export default ScheduleClassPage;