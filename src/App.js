import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavbarComp from './components/NavbarComp';
import About from './components/About';
import Home from './components/Home';
import BTutor from './components/BTutor';
import TutorPage from './components/TutorPage';
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowseCourses from './components/BrowseCourses';
function App() {
  return (
    <Router>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/BTutor" element={<BTutor />} />
        <Route path="/BrowseCourses" element={<BrowseCourses />} />
        <Route path="/tutor/:courseSlug" element={<TutorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
