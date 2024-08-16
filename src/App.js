import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import CoursePage from "./pages/Academics";
import EventPage from "./pages/Event";
import GalleryPage from "./pages/Gallery";
import ResearchPage from "./pages/Research";
import StaffPage from "./pages/Staff";
import MainHeader from "./components/layout/MainHeader";
import Navbar from "./components/layout/Navbar";
import ContactForm from "./pages/Contact"
import AdmissionSection from "./components/Admission";
import Footer from "./components/layout/Footer";


function App() {
  return (
    <div>
      <MainHeader />
      <Navbar />
      <div className="w-[90%] max-w-screen-2xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/news-and-events" element={<EventPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/staffs" element={<StaffPage />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
      <AdmissionSection />
      <Footer />
    </div>
  );
}

export default App;
