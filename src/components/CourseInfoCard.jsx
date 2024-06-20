import React from 'react';
// import { FaCalendarAlt } from 'react-icons/fa';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function CourseCard({ imageSrc, date, title, description }) {
  return (
    <div className="flex border rounded-lg overflow-hidden shadow-lg max-w-md mx-auto my-20">
      <img src={imageSrc} alt={title} className="w-1/3 object-cover" />
      <div className="w-2/3 p-4 flex flex-col justify-between h-auto">
        <div className="flex items-center text-gray-600 mb-2">
          <CalendarMonthIcon className="mr-2" />
          <span>{date}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 flex-grow">{description}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
