import { motion } from 'framer-motion';

const UniversityHero = () => {
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
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-4xl mx-auto text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
        >
          Transform Students Into <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            Industry-Ready Professionals
          </span>
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
          <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
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
