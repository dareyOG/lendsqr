import React from 'react';
import './Ttable.css';

const Ttable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-200">
            <th className="border border-gray-300 px-4 py-2 text-center">Column 1</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Column 2</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Column 3</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Column 4</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 50 }, (_, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-4 py-2">Row {index + 1} Col 1</td>
              <td className="border border-gray-300 px-4 py-2">Row {index + 1} Col 2</td>
              <td className="border border-gray-300 px-4 py-2">Row {index + 1} Col 3</td>
              <td className="border border-gray-300 px-4 py-2">Row {index + 1} Col 4</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Ttable;
