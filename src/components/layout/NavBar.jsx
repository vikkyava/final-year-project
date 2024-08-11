import { Link } from "react-router-dom";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

//bg-gray-800 p-4 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4

function Navbar({ className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex md:flex-row items-center justify-between gap-3 pt-8 pb-6 max-w-6xl mx-auto flex-col space-y-3 cursor-pointer ${className}`}
    >
      <ul className="flex gap-6 md:flex-row flex-col text-[#011936]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <Link to="/about" className="hover:text-gray-400">
            About
          </Link>
          <span onClick={toggleDropdown} className="text-yellow-600">
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </span>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              <li>
                <a
                  href="/service1"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 1
                </a>
              </li>
              <li>
                <a
                  href="/service2"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 2
                </a>
              </li>
              <li>
                <a
                  href="/service3"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                >
                  Service 3
                </a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/courses">Academics</Link>
        </li>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/news-and-events">News and Events</Link>
        </li>
        <li>
          <Link to="/staffs">Staffs</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      <div className="">
        <ul className="flex gap-6 md:flex-row sm:flex-col">
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <a
              href="https://portal.kwasu.edu.ng/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
