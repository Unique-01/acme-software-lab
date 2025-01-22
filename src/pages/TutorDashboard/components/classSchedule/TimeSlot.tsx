import React from 'react';

interface TimeSlotProps {
  time: string;
  onClick: () => void;
}

const TimeSlot: React.FC<TimeSlotProps> = ({ time, onClick }) => {
  return (
    <button 
      className="w-full p-2 mb-2 text-center border-2 border-blue-500 rounded-lg hover:bg-blue-100"
      onClick={onClick}
    >
      {time}
    </button>
  );
};

export default TimeSlot;