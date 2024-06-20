import React from 'react';
import EventIcon from '@mui/icons-material/Event';
import PlaceIcon from '@mui/icons-material/Place';

function EventCard({ imageSrc, title, date, location }) {
  return (
    <div className='h-screen'>
        <div className="relative w-full max-w-sm mx-auto">
            <img src={imageSrc} alt="Event" className="w-full h-64 object-cover rounded-lg" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-11/12 bg-white bg-opacity-90 p-4 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <div className="flex items-center mb-1">
                    <EventIcon className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20"/>
                    <span>{date}</span>
                </div>
                <div className="flex items-center">
                    <PlaceIcon className="w-5 h-5 text-gray-600 mr-2" fill="currentColor" viewBox="0 0 20 20"/>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default EventCard;
