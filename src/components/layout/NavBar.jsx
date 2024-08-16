import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useLayoutContext } from "../../contexts/useLayoutContext";
import AboutDropdown from "../DropDown";

//bg-gray-800 p-4 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4

function Navbar() {
  const { isNavbarOpen, setIsNavbarOpen } = useLayoutContext();

  return (
    <nav
      className={`items-center fixed md:relative inset-0 left-1/3 md:inset-auto px-6 md:px-0 bg-white justify-between gap-3 pt-12 md:pt-8 pb-6 max-w-6xl mx-auto flex-col 
        space-y-3 cursor-pointer ${
          isNavbarOpen ? "flex" : "hidden md:flex"
        } md:flex-row`}
    >
      <button
        onClick={() => setIsNavbarOpen(false)}
        className="md:hidden flex items-center justify-center absolute right-5 top-5"
      >
        <CloseIcon />
      </button>
      <ul className="flex gap-6 md:flex-row flex-col text-[#011936] w-full md:w-fit">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="relative">
          <AboutDropdown />
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
      <div className="w-full md:w-fit">
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
