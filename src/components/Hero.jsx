import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';
import Silk from './Silk';

const Hero = () => {
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
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-transparent">
      {/* SILK BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Silk
          speed={7.9}
          scale={1.1}
          color="#13134b"
          noiseIntensity={0}
          rotation={0}
        />
        {/* Optional dark gradient to smoothly transition out of the hero section at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#020617] pointer-events-none" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
        >
          You don’t build <span className="text-slate-500 line-through decoration-slate-700 decoration-3">practice projects</span>. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            You build what companies hire for.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-8 text-xl text-slate-400 max-w-2xl mx-auto font-medium"
        >
          AI converts real job requirements into projects you build. No fluff, just proof of work.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-center mt-12 md:mt-16 gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            {/* PRIMARY BUTTON */}
            <button 
              onClick={() => openModal('Start Learning')}
              className="px-6 md:px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-base font-medium shadow-[0_8px_30px_rgba(59,130,246,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] cursor-pointer"
            >
              Start Learning
            </button>

            {/* SECONDARY BUTTON */}
            <button className="px-6 md:px-8 py-3 rounded-full border border-white/20 text-white/80 text-sm md:text-base font-medium backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:text-white hover:scale-105">
              See How It Works
            </button>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;
