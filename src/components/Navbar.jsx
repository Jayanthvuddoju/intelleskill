import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const audienceTabs = [
    { name: 'For Students', path: '/students' },
    { name: 'For Professionals', path: '/professionals' },
    { name: 'For Institutions', path: '/universities' }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl w-full max-w-full overflow-x-hidden border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-3 md:h-16 gap-4">
          <div className="flex justify-between items-center w-full md:w-auto">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/students" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                IntelleSkill
              </Link>
            </div>
            
            {/* Mobile Get Started Button (Visible only on small screens) */}
            <div className="md:hidden">
              <a href="#" className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-medium text-xs shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                Get Started
              </a>
            </div>
          </div>

          <div className="flex items-center w-full md:w-auto overflow-hidden">
            <div className="flex items-center justify-between w-full md:space-x-6">
              {/* Audience Tabs - Now scrollable on mobile */}
              <div className="flex items-center overflow-x-auto no-scrollbar gap-2 md:gap-2 pb-1 md:pb-0 flex-1 md:flex-initial">
                {audienceTabs.map((tab) => {
                  const isActive = location.pathname === tab.path || (tab.path.startsWith('#') && location.hash === tab.path);
                  
                  return (
                    <Link
                      key={tab.name}
                      to={tab.path}
                      className={`px-3 md:px-4 py-1.5 rounded-full text-[10px] md:text-sm font-medium transition-all border whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-black border-white'
                          : 'bg-white/10 border-white/20 text-slate-300 hover:bg-white/20 hover:text-white'
                      }`}
                    >
                      {tab.name}
                    </Link>
                  );
                })}
              </div>

              {/* Main Navigation - Hidden on mobile, or could be added to a menu */}
              <div className="hidden lg:flex items-center space-x-6">
                <a href="#" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">How it works</a>
                <Link to="/about" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">About Us</Link>
                <Link to="/contact" className="text-slate-300 hover:text-white transition-colors text-sm font-medium">Contact Us</Link>
                
                <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] text-sm">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Absolute bottom bar for extra visibility */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10"></div>
    </motion.nav>
  );
};

export default Navbar;
