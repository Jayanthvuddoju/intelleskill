import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import University from './pages/University';
import Professionals from './pages/Professionals';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Curriculum from './pages/Curriculum';
import ToggleDemo from './pages/ToggleDemo';
import CarouselDemo from './components/CarouselDemo';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import FloatingToggle from './components/FloatingToggle';
import ContactModal from './components/ContactModal';
import { ContactModalProvider } from './context/ContactModalContext';
import React, { useEffect } from 'react';
import Lenis from 'lenis';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'white', background: 'red' }}>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);


  return (
    <ErrorBoundary>
      <ContactModalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Navbar />
          <ContactModal />
          <FloatingToggle />
          <Routes>
            <Route path="/" element={<Navigate to="/students" replace />} />
            <Route path="/students" element={<Home />} />
            <Route path="/universities" element={<University />} />
            <Route path="/professionals" element={<Professionals />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/demo" element={<CarouselDemo />} />
            <Route path="/toggle-demo" element={<ToggleDemo />} />
          </Routes>
        </BrowserRouter>
      </ContactModalProvider>
    </ErrorBoundary>
  );
}

export default App;

