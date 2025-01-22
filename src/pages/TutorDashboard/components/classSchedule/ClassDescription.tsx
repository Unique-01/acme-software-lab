import React, { useState } from 'react';

interface ClassDescriptionProps {
  onSubmit: (description: string, className: string, assignee: string) => void;
}

const ClassDescription: React.FC<ClassDescriptionProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [className, setClassName] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = () => {
    onSubmit(description, className, assignee);
  };

  return (
    <div className="p-4 border border-gray-300 rounded-lg">
      <h2 className="text-lg font-bold mb-2">Class description</h2>
      <textarea 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="What class is this?" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      />
      <input 
        type="text" 
        value={className} 
        onChange={(e) => setClassName(e.target.value)} 
        placeholder="Class Name" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-2"
      />
      <input 
        type="text" 
        value={assignee} 
        onChange={(e) => setAssignee(e.target.value)} 
        placeholder="Assignee" 
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />
      <button className="w-full p-2 bg-blue-500 text-white rounded-lg" onClick={handleSubmit}>Done</button>
    </div>
  );
};

export default ClassDescription;