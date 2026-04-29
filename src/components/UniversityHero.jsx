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
        <Silk
          speed={7.9}
          scale={1.1}
          color="#13134b"
          noiseIntensity={0}
          rotation={0}
        />
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
          className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 leading-tight tracking-tight px-4"
          style={{ textShadow: '0 0 20px rgba(59,130,246,0.25)' }}
        >
          Transform Students Into <br /> Industry-Ready Professionals
        </motion.h1>

        <motion.div variants={itemVariants} className="mt-6">
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Train students with structured, industry-aligned courses and transition them into real internship experiences — powered by AI, verified by data, recognized by industry.
          </p>
          <p className="text-sm text-gray-400 mt-3 italic">
            "Students don’t just do internships — they are trained, evaluated, and prepared before entering real-world project environments."
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => openModal('Request a Demo')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            Request a Demo
          </button>
          <button className="w-full sm:w-auto border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UniversityHero;
