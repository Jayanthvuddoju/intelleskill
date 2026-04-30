import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';
import Silk from './Silk';

const ProfessionalHero = () => {
  const { openModal } = useContactModal();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 md:mb-6 leading-tight"
        >
          <span className="relative inline-block">
            You don’t need more courses.
            <span 
              className="absolute inset-0 bg-clip-text text-transparent pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,215,0,0.9) 50%, transparent 70%)',
                backgroundSize: '250% auto',
                animation: 'shine 8s linear infinite',
                WebkitBackgroundClip: 'text',
              }}
            >
              You don’t need more courses.
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              You need real experience that gets you ahead.
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
              You need real experience that gets you ahead.
            </span>
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-sm md:text-xl text-slate-400 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Upgrade your skills with real-world projects, AI-driven workflows, and expert reviews — built for professionals aiming for their next level.
        </motion.p>


        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-4 text-xs md:text-sm font-medium text-slate-500 uppercase tracking-widest mb-12"
        >
          <span>Learn</span>
          <span className="text-blue-500">→</span>
          <span>Build</span>
          <span className="text-blue-500">→</span>
          <span>Get Reviewed</span>
          <span className="text-blue-500">→</span>
          <span>Prove your skills</span>
          <span className="text-blue-500">→</span>
          <span>Grow your career</span>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <button 
            onClick={() => openModal('Start Your Upgrade')}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] cursor-pointer"
          >
            Start Your Upgrade
          </button>
          <button 
            onClick={() => {
              const el = document.getElementById('professional-how-it-works');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm cursor-pointer"
          >
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfessionalHero;
