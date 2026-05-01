import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import University from './pages/University';
import Professionals from './pages/Professionals';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Curriculum from './pages/Curriculum';
import ToggleDemo from './pages/ToggleDemo';
import CarouselDemo from './components/CarouselDemo';
import Navbar from './components/Navbar';
import FloatingToggle from './components/FloatingToggle';
import ContactModal from './components/ContactModal';
import { ContactModalProvider } from './context/ContactModalContext';
import React, { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import DarkVeil from './components/DarkVeil';

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

function ScrollManager({ lenisRef }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    if (lenisRef.current) {
      setTimeout(() => {
        lenisRef.current.resize();
        lenisRef.current.scrollTo(0, { immediate: true });
      }, 50);
    }
  }, [pathname]);

  return null;
}

function App() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

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
          <ScrollManager lenisRef={lenisRef} />
          
          {/* PERSISTENT BACKGROUND LAYER */}
          <div className="fixed inset-0 z-0">
            <DarkVeil
              hueShift={0}
              noiseIntensity={0}
              scanlineIntensity={0}
              speed={1.3}
              scanlineFrequency={0}
              warpAmount={0}
              resolutionScale={1.25}
            />
            <div className="fixed inset-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />
          </div>

          <div className="relative z-10">
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
          </div>
        </BrowserRouter>
      </ContactModalProvider>
    </ErrorBoundary>
  );
}


export default App;
