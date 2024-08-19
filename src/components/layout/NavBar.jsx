import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { useLayoutContext } from "../../contexts/useLayoutContext";
import AboutDropdown from "../DropDown";

//bg-gray-800 p-4 flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-4

function Navbar() {
  const { isNavbarOpen, setIsNavbarOpen } = useLayoutContext();

  const navLinks = [
    {
      key: "Home",
      content: <Link to="/">Home</Link>,
    },
    {
      key: "About",
      content: <AboutDropdown />,
    },
    {
      key: "Academics",
      content: <Link to="/courses">Academics</Link>,
    },
    {
      key: "Research",
      content: <Link to="/research">Research</Link>,
    },
    {
      key: "Updates",
      content: <Link to="/news-and-events">News and Events</Link>,
    },
    {
      key: "Staffs",
      content: <Link to="/staffs">Staffs</Link>,
    },
    {
      key: "Gallery",
      content: <Link to="/gallery">Gallery</Link>,
    },
  ];

  return (
    <nav
      className={`w-[90%] max-w-screen-2xl z-[999] items-center fixed md:relative inset-0 left-1/3 md:inset-auto px-6 md:px-0 bg-white justify-between gap-3 pt-12 md:pt-8 pb-6  mx-auto flex-col 
        space-y-3 cursor-pointer ${
          isNavbarOpen ? "flex" : "hidden md:flex"
        } md:flex-row`}
    >
      <button
        onClick={() => setIsNavbarOpen(false)}
        className="md:hidden flex items-center justify-center absolute"
      >
        <CloseIcon />
      </button>
      <ul className="flex gap-6 md:flex-row flex-col text-[#011936] w-full md:w-fit">
        {navLinks.map(({ key, content }) => (
          <li key={key}>
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="cursor-pointer"
            >
              {content}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full md:w-fit">
        <ul className="flex gap-6 md:flex-row sm:flex-col">
          <li>
            <button
              onClick={() => setIsNavbarOpen(false)}
              className="cursor-pointer"
            >
              <Link to="/contact">Contact</Link>
            </button>
          </li>
          <li>
            <a
              href="https://portal.kwasu.edu.ng/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsNavbarOpen(false)}
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
