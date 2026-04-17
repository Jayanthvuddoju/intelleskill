import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#020617]/50 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              IntelleSkill
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">How it works</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#" className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
