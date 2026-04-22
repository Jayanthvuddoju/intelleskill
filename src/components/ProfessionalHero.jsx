import { motion } from 'framer-motion';

const ProfessionalHero = () => {
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
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          You don’t need more courses. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            You need real experience that gets you ahead.
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
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
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
            Start Your Upgrade
          </button>
          <button className="w-full sm:w-auto border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all backdrop-blur-sm">
            See How It Works
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProfessionalHero;
