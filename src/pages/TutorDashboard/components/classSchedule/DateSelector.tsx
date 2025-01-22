import React from 'react';

interface DateSelectorProps {
  onDateSelect: (date: Date) => void;
}

const DateSelector: React.FC<DateSelectorProps> = ({ onDateSelect }) => {
  // For simplicity, we'll simulate a date picker. In a real app, you might use a library like react-datepicker.
  const handleDateSelect = (date: Date) => {
    onDateSelect(date);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Select a Date & Time</h2>
      <div className="flex justify-between items-center mb-4">
        <button className="p-2 text-blue-500">←</button>
        <span className="text-lg">April 2024</span>
        <button className="p-2 text-blue-500">→</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
          <div key={index} className="text-sm text-gray-500">{day}</div>
        ))}
        {[...Array(30)].map((_, index) => (
          <button 
            key={index}
            className={`p-2 rounded-full ${index === 23 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-500'}`}
            onClick={() => handleDateSelect(new Date(2024, 3, index + 1))}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Time zone</label>
        <select id="timezone" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
          <option>Central European Time (8:11pm)</option>
          {/* Add more time zones here */}
        </select>
      </div>
      <button className="mt-4 w-full p-2 bg-blue-500 text-white rounded-lg">Update</button>
    </div>
  );
};

export default DateSelector;