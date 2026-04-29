import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logoImage from '../assets/logo.png';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/80 backdrop-blur-xl w-full border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/students" className="flex items-center gap-3">
              <img src={logoImage} alt="IntelleSkill Logo" className="h-10 md:h-17 w-auto" />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-4 md:gap-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-[11px] md:text-sm font-medium">Curriculum</a>
            <Link to="/about" className="text-white/70 hover:text-white transition-colors text-[11px] md:text-sm font-medium">About</Link>
            <Link to="/contact" className="text-white/70 hover:text-white transition-colors text-[11px] md:text-sm font-medium">Contact</Link>

            <a href="#" className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-[11px] md:text-sm shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition-all whitespace-nowrap">
              Get Started
            </a>
          </div>

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
