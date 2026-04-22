import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollRestoration = () => {
  const { pathname } = useLocation();

  // 1. RESTORE SCROLL ON PAGE SWITCH / REFRESH
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll-${pathname}`);

    if (saved) {
      // Small timeout to ensure page content is rendered before scrolling
      // behavior: 'auto' to avoid transition flickering during restoration
      setTimeout(() => {
        window.scrollTo({
          top: parseInt(saved, 10),
          behavior: 'auto'
        });
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // 2. STORE SCROLL POSITION
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
