import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header className="w-full">
      <div className="bg-green-400 py-9">
        <div className="max-w-6xl mx-auto">
          <img src="/" alt="Kwasu" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl mt-3">
          <a href="/" >Department of Electrical and Computer Engineering</a>
        </h2>
        <h3 className="text-lg">
          <a href="https://kwasu.edu.ng/of-engineering-and-technology/" title="Faculty of  Engineering and Technology">Faculty of  Engineering and Technology</a>
        </h3>
      </div>
      <nav className="flex items-center justify-between gap-3 pt-8 max-w-6xl mx-auto">
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
    </header>
  );
}

export default MainNavigation;
