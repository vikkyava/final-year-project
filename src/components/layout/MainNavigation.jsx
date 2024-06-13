import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="p-5">
      <div className="flex items-center border-b py-5 text-xs justify-between gap-4 px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/" alt="location-icon" />
            <span>Malete, Kwara State, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/" alt="phone-icon" />
            <span>+234-813-456-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <img src="/" alt="email-icon" />
            <span>ecedept@domain.com</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <img src="/" alt="twitter" />
          <img src="/" alt="facebook" />
          <img src="/" alt="instagram" />
          <img src="/" alt="youtube" />
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
