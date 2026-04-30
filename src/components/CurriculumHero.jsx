import { motion } from 'framer-motion';

const CurriculumHero = () => {
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
    <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none -z-10" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight text-center relative"
        >
          <span className="relative inline-block">
            Choose Your Role.
            {/* Silver Shine Overlay for Line 1 */}
            <span 
              className="absolute inset-0 bg-clip-text text-transparent pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,215,0,0.9) 50%, transparent 70%)',
                backgroundSize: '250% auto',
                animation: 'shine 8s linear infinite',
                WebkitBackgroundClip: 'text',
              }}
            >
              Choose Your Role.
            </span>
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Build Across Industries.
            </span>
            {/* Silver Shine Overlay for Line 2 */}
            <span 
              className="absolute inset-0 bg-clip-text text-transparent pointer-events-none"
              style={{
                background: 'linear-gradient(110deg, transparent 30%, rgba(255,215,0,0.9) 50%, transparent 70%)',
                backgroundSize: '250% auto',
                animation: 'shine 8s linear infinite',
                WebkitBackgroundClip: 'text',
              }}
            >
              Build Across Industries.
            </span>
          </span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
        >
          Select your technology and apply it to real-world domains with industry-level projects.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CurriculumHero;
