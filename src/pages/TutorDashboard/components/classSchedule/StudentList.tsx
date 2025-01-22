import React from 'react';

interface Student {
  name: string;
  tasksInProgress: number;
}

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = ({ students }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
          <option>Student</option>
          {/* Add more options here */}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 7 L 20 7 L 10 16" /></svg>
        </div>
      </div>
      <div className="mt-4">
        <input type="text" placeholder="Search" className="w-full p-2 border border-gray-300 rounded-lg" />
      </div>
      <ul className="mt-4">
        {students.map((student, index) => (
          <li key={index} className="flex items-center justify-between p-2 border-b">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div> {/* Placeholder for avatar */}
              <span>{student.name}</span>
            </div>
            <span className="text-gray-500">{student.tasksInProgress} tasks on progress</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;