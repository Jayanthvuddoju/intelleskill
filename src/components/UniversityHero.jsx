import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';
import Silk from './Silk';

const UniversityHero = () => {
  const { openModal } = useContactModal();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15 
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden bg-transparent">
      {/* SILK BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617]/50 pointer-events-none" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05] px-4"
        >
          <span className="relative inline-block">
            Transform Students Into
            <span 
              className="absolute inset-0 bg-clip-text text-transparent pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,215,0,0.9) 50%, transparent 70%)',
                backgroundSize: '250% auto',
                animation: 'shine 8s linear infinite',
                WebkitBackgroundClip: 'text',
              }}
            >
              Transform Students Into
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Industry-Ready Professionals
            </span>
            <span 
              className="absolute inset-0 bg-clip-text text-transparent pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,215,0,0.9) 50%, transparent 70%)',
                backgroundSize: '250% auto',
                animation: 'shine 8s linear infinite',
                WebkitBackgroundClip: 'text',
              }}
            >
              Industry-Ready Professionals
            </span>
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-8">
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Train students with structured, industry-aligned courses and transition them into real internship experiences — powered by AI, verified by data, recognized by industry.
          </p>
          <p className="text-sm text-slate-500 mt-4 italic font-medium">
            "Students don’t just do internships — they are trained, evaluated, and prepared before entering real-world project environments."
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => openModal('Request a Demo')}
            className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 text-white px-8 py-4 rounded-full font-medium transition-all shadow-[0_8px_30px_rgba(59,130,246,0.4)] cursor-pointer"
          >
            Request a Demo
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('human-review-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all cursor-pointer"
          >
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UniversityHero;
