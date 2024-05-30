import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return <header className={classes.header}>
        <div className={classes.logo}>NAEES Logo</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/courses'>Courses</Link>
                </li>
                <li>
                    <Link to='/gallery'>Gallery</Link>
                </li>
                <li>
                    <Link to='/news-and-events'>Events</Link>
                </li>
                <li>
                    <Link to='/research'>Research</Link>
                </li>
                <li>
                    <Link to='/resourses'>Resources</Link>
                </li>
                <li>
                    <Link to='/staffs'>Staffs</Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;