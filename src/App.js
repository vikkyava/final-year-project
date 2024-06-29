import { Route, Routes } from 'react-router-dom';

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursePage from './pages/Courses';
import EventPage from './pages/Event';
import GalleryPage from './pages/Gallery';
import ResearchPage from './pages/Research';
import ResoursePage from './pages/Resources';
import StaffPage from './pages/Staff';
import MainNavigation from './components/layout/MainNavigation';
import Footer from './components/layout/Footer';

function App() {
  return <div>
    <MainNavigation />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/courses' element={<CoursePage />} />
      <Route path='/news-and-events' element={<EventPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/research' element={<ResearchPage />} />
      <Route path='/resourses' element={<ResoursePage />} />
      <Route path='/staffs' element={<StaffPage />} />
    </Routes>
    <Footer />
  </div>;
}

export default App;
