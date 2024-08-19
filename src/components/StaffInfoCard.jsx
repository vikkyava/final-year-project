// File path: src/components/StaffInfoCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

function StaffCard({ profilePicture, name, rank, qualification }) {
  return (
    <div className="max-w-xs w-full overflow-hidden shadow-lg p-4 bg-white rounded-lg">
        <img className="w-full aspect-square mx-auto rounded-full" src={profilePicture} alt={`${name}'s profile`} /> 
        <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <span className='text-sm font-light text-gray-600'>{qualification}</span>
                <p className="text-gray-600">{rank}</p>
        </div>
    </div>
  );
};

StaffCard.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  qualification: PropTypes.string.isRequired
};

export default StaffCard;
