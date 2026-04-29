import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useContactModal } from '../context/ContactModalContext';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl w-full border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <div className="flex items-center">
              <Link to="/students" className="flex items-center gap-3">
                <img src={logoImage} alt="IntelleSkill Logo" className="h-18 md:h-18 w-auto" />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Curriculum</a>
              <Link to="/about" className="text-white/70 hover:text-white transition-colors text-sm font-medium">About</Link>
              <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Contact</Link>

              <button
                onClick={() => openModal('Get Started')}
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all whitespace-nowrap cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={toggleMenu}
                className="flex flex-col gap-1.5 cursor-pointer z-[100] p-2 relative"
                aria-label="Toggle Menu"
              >
                <motion.span
                  animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2px] bg-white block"
                />
                <motion.span
                  animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-[2px] bg-white block"
                />
                <motion.span
                  animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="w-6 h-[2px] bg-white block"
                />
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full right-4 w-56 mt-2 md:hidden"
            >
              <div className="bg-[#0f172a]/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col items-center gap-4 shadow-2xl">
                <a
                  href="#"
                  onClick={closeMenu}
                  className="text-white/80 hover:text-white text-base font-medium transition-colors py-1 w-full text-center"
                >
                  Curriculum
                </a>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="text-white/80 hover:text-white text-base font-medium transition-colors py-1 w-full text-center"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="text-white/80 hover:text-white text-base font-medium transition-colors py-1 w-full text-center"
                >
                  Contact
                </Link>

                <button
                  onClick={() => {
                    closeMenu();
                    openModal('Get Started');
                  }}
                  className="bg-blue-600 text-white w-full py-3 rounded-xl font-bold text-sm text-center shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all block cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
