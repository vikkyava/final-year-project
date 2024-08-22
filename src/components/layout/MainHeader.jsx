import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useLayoutContext } from "../../contexts/useLayoutContext";

function MainHeader() {
  const { setIsNavbarOpen } = useLayoutContext();

  const toggleNavbar = () => {
    setIsNavbarOpen((prevState) => !prevState);
  };

  return (
    <header className="w-full md:w-[90%] max-w-screen-2xl mx-auto">
      <div className="bg-green-600 py-6 px-5">
        <div className="mx-auto flex justify-between">
          <div className="flex gap-1">
            <img
              src="/assets\kwasu_logo-removebg-preview.png"
              alt="Kwasu"
              className="w-16 h-16"
            />
            <img
              src="/assets\naees_logo.jpg"
              alt="NAEES"
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="md:hidden">
            <MenuIcon onClick={toggleNavbar}/>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[90%] md:w-full">
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
    </header>
  );
}

export default MainHeader;
