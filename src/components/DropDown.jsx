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
          <li>
            <a
              href="/service1"
              className="block px-4 py-2 text-[#bb9457] font-semibold hover:bg-gray-100"
            >
              Welcome from the Chair
            </a>
          </li>
          <li>
            <a
              href="/service2"
              className="block px-4 py-2 text-[#bb9457] font-semibold hover:bg-gray-100"
            >
              Program overview
            </a>
          </li>
          <li>
            <a
              href="/service3"
              className="block px-4 py-2 text-[#bb9457] font-semibold hover:bg-gray-100"
            >
              About ECE
            </a>
          </li>
          <li>
            <a
              href="/service3"
              className="block px-4 py-2 text-[#bb9457] font-semibold hover:bg-gray-100"
            >
              ECE Laboratory/Workshop
            </a>
          </li>
        </ul>
      </Popover>
    </div>
  );
}
