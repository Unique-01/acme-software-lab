// // src/components/CurriculumCard.tsx
// import React from 'react';

// interface CurriculumCardProps {
//   curriculum: string[];
// }

// const CurriculumCard: React.FC<CurriculumCardProps> = ({ curriculum }) => {
//   return (
//     <div className=" w-full bg-white p-6 flex flex-col justify-center items-center  transition-opacity duration-300">
//       <div className="uppercase text-sm font-semibold text-gray-600 mb-4">
//         Curriculum
//       </div>
//       <div className="flex justify-between w-full">
//         {curriculum.map((item, index) => (
//           <div key={index} className="text-center flex-1 p-2 border">
//             <div className="text-xl font-bold mb-1">
//               {index + 1 < 10 ? `0${index + 1}` : index + 1}
//             </div>
//             <div className="text-gray-700">
//               {item}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CurriculumCard;

import React from "react";

interface CurriculumCardProps {
    curriculum: string[];
}

const CurriculumCard: React.FC<CurriculumCardProps> = ({ curriculum }) => {
    return (
        <div className=" bg-white p-6 flex flex-col justify-center items-center shadow-lg z-10 transition-opacity duration-300">
            <div className="uppercase text-sm font-semibold text-gray-600 mb-4">
                Curriculum
            </div>
            <div className="flex justify-between w-full max-w-screen-lg mx-auto">
                {curriculum.map((item, index) => (
                    <div key={index} className="text-center flex-1 p-2 border">
                        <div className="text-xl font-bold mb-1">
                            {index + 1 < 10 ? `0${index + 1}` : index + 1}
                        </div>
                        <div className="text-gray-700">{item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CurriculumCard;
