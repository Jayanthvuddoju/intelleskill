import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const UniversitySolution = () => {
  const solutions = [
    {
      title: "Structured Learning Foundation",
      desc: "Students start with guided, industry-aligned learning that builds strong fundamentals before execution.",
      point: "Clear direction. Strong base."
    },
    {
      title: "AI-Powered Project Generation",
      desc: "Real-world projects generated based on current market demand and job roles.",
      point: "No generic or outdated work."
    },
    {
      title: "Internship-Style Execution",
      desc: "Students work in structured sprints, simulating real development workflows.",
      point: "Build. Iterate. Solve."
    },
    {
      title: "Evaluation & Verified Outcomes",
      desc: "Projects are evaluated through AI and expert review with a verifiable score.",
      point: "Proof, not just completion."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6"
          >
            <CheckCircle2 size={16} />
            HOW WE SOLVE
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
            A Complete Virtual Learning and <br /> Internship Platform
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            IntelleSkill delivers structured, AI-powered learning and internship experiences that simulate real industry work — directly from campus.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:border-white/20"
            >
              {/* Premium Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Content Container */}
              <div className="relative z-10">
                {/* Top Accent Line */}
                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
                
                <h3 className="text-white text-xl md:text-2xl font-semibold mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                  {solution.desc}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:animate-pulse"></div>
                  <span className="text-blue-400 text-sm font-medium">
                    {solution.point}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniversitySolution;
