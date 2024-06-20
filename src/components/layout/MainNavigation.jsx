import { Link } from "react-router-dom";

import PlaceIcon from '@mui/icons-material/Place';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function MainNavigation() {
  return (
    <header className="p-5">
      <div className="flex items-center border-b py-5 text-xs justify-between gap-4 px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <PlaceIcon className="w-3 h-3"/>
            <span>Malete, Kwara State, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon />
            <span>+234-813-456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <EmailIcon />
            <span>ecedept@domain.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://facebook.com" className="text-black-400 hover:text-gray-400">
            <XIcon className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"/>
          </a>
          <a href="https://facebook.com" className="text-blue-400 hover:text-gray-400">
          <FacebookIcon className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"/>
          </a>
          <a href="https://facebook.com" className="text-blue-700 hover:text-gray-400">
          <LinkedInIcon className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"/>
          </a>
          <a href="https://facebook.com" className="text-red-500 hover:text-gray-400">
          <YouTubeIcon className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"/>
          </a>
        </div>
      </div>
      <nav className="flex items-center justify-between gap-3 pt-8 px-10">
        <div className="">NAEES Logo</div>
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/news-and-events">Events</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          <li>
            <Link to="/resourses">Resources</Link>
          </li>
          <li>
            <Link to="/staffs">Staffs</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
