import { useState } from "react";
import Popover from "@mui/material/Popover";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link } from "react-router-dom";

export default function AboutDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const dropdownItems = [
    {
      url: "/about#welcome",
      title: "Welcome from the Chair",
    },
    {
      url: "/about#overview",
      title: "Program overview",
    },
    {
      url: "/about#ece",
      title: "About ECE",
    },
    // {
    //   url: "/service3",
    //   title: "ECE Laboratory/Workshop",
    // },
  ];

  return (
    <div>
      <button
        aria-describedby={id}
        variant="text"
        className="hover:text-gray-400 p-0"
      >
        <Link to="/about">About</Link>
        <span className="text-[#bb9457]" onClick={handleClick}>
          {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </span>
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <ul className="w-72 bg-white rounded-md shadow-lg py-1 text-md">
          {dropdownItems.map(({ url, title }) => (
            <li>
              <a
                href={url}
                onClick={handleClose}
                className="block px-4 py-2 text-[#bb9457] font-semibold hover:bg-gray-100"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </Popover>
    </div>
  );
}
