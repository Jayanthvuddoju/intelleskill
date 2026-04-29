import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import SegmentedToggle from './SegmentedToggle';

const FloatingToggle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });
  
  // Map pathname to active tab id
  const activeTab = location.pathname.substring(1) || 'students';

  // Only show toggle on main audience pages
  const isMainPage = ['students', 'professionals', 'universities'].includes(activeTab);
  
  if (!isMainPage) return null;

  return (
    <motion.div 
      className="fixed top-[70px] md:top-[80px] left-0 right-0 z-40 flex justify-center pointer-events-none px-4"
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 }
      }}
      animate={isHidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="pointer-events-auto">
        <SegmentedToggle 
          activeTab={activeTab}
          onChange={(id) => navigate(`/${id}`)}
        />
      </div>
    </motion.div>
  );
};

export default FloatingToggle;
