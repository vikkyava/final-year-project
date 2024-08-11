import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Navbar from "./Navbar";

function MainHeader() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <header>
      <div className="bg-[#7CB518] py-9">
        <div className="max-w-6xl mx-auto flex justify-between">
          <img src="/" alt="Kwasu" />
          <div className="md:hidden">
            <button onClick={toggleNavbar}>
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-medium mt-3 text-dark-gray">
          <a href="/">Department of Electrical and Computer Engineering</a>
        </h2>
        <h3 className="text-lg font-medium text-dark-gray">
          <a
            href="https://kwasu.edu.ng/of-engineering-and-technology/"
            title="Faculty of  Engineering and Technology"
          >
            Faculty of Engineering and Technology
          </a>
        </h3>
      </div>
      {isNavbarOpen && <Navbar />}
    </header>
  );
}

export default MainHeader;
