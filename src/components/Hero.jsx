import { motion } from 'framer-motion';

const Hero = () => {
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
      {/* Background Decor - Adjusted for dark theme */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full"></div>
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

      </motion.div>
    </section>
  );
};

export default Hero;
