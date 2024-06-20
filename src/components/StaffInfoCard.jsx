// File path: src/components/StaffInfoCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function StaffCard({ profilePicture, name, position, socialLinks }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
        <img className="w-24 rounded-full mx-auto" src={profilePicture} alt={`${name}'s profile`} /> 
        <div className="text-center mt-4">
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-600">{position}</p>
                <div className="flex justify-center mt-4 space-x-4">
                {socialLinks.twitter && (
                    <a href={socialLinks.twitter} aria-label="Twitter">
                    <XIcon className="text-gray-800 hover:text-gray-900" />
                    </a>
                )}
                {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin} aria-label="LinkedIn">
                    <LinkedInIcon className="text-blue-700 hover:text-blue-900" />
                    </a>
                )}
                {socialLinks.facebook && (
                    <a href={socialLinks.facebook} aria-label="Facebook">
                    <FacebookIcon className="text-blue-500 hover:text-blue-700" />
                    </a>
                )}
                </div>
        </div>
    </div>
  );
};

StaffCard.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  socialLinks: PropTypes.shape({
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    facebook: PropTypes.string,
  }).isRequired,
};

export default StaffCard;
