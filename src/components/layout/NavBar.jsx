import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="flex items-center justify-between gap-3 pt-8 pb-6 max-w-6xl mx-auto">
        <ul className="flex gap-6">
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
        <div className="">
          <ul className="flex gap-6">
            <li> Contact</li>
            <li>Apply</li>
          </ul>
        </div>
      </nav>
    )
};


export default Navigation;