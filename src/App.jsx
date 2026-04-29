import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import University from './pages/University';
import Professionals from './pages/Professionals';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ToggleDemo from './pages/ToggleDemo';
import CarouselDemo from './components/CarouselDemo';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import FloatingToggle from './components/FloatingToggle';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <FloatingToggle />
      <Routes>
        <Route path="/" element={<Navigate to="/students" replace />} />
        <Route path="/students" element={<Home />} />
        <Route path="/universities" element={<University />} />
        <Route path="/professionals" element={<Professionals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/demo" element={<CarouselDemo />} />
        <Route path="/toggle-demo" element={<ToggleDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
