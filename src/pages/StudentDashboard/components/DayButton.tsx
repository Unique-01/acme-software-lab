// src/DayButton.tsx
import React from 'react';
import { DayButtonProps } from '../types';

const DayButton: React.FC<DayButtonProps> = ({ day, date, isCurrentDate, onClick }) => {
  return (
    <button onClick={onClick} className={`w-16 h-16 flex flex-col items-center justify-center rounded-lg ${isCurrentDate ? 'bg-blue-600 text-white' : 'bg-indigo-100 text-blue-800'}`}>
      <div className="text-2xl font-bold">{date}</div>
      <div className="text-xs">{day}</div>
    </button>
  );
};

export default DayButton;