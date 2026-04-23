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
          <h2 className="text-2xl md:text-5xl font-bold text-white mt-4 mb-4 md:mb-6 leading-tight">
            A Complete Virtual Learning and <br className="hidden md:block" /> Internship Platform
          </h2>
          <p className="text-gray-300 text-sm md:text-xl max-w-3xl mx-auto leading-snug md:leading-relaxed">
            IntelleSkill delivers structured, AI-powered learning and internship experiences that simulate real industry work — directly from campus.
          </p>
        </motion.div>

        {/* Solutions Grid - Premium Glow Style */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14"
        >
          {solutions.map((solution, index) => {
            // Split title for gradient effect (last 1-2 words usually)
            const words = solution.title.split(' ');
            const mainText = words.slice(0, -1).join(' ');
            const accentText = words[words.length - 1];

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative pl-6 md:pl-8 transition-all duration-300 hover:translate-x-1"
              >
                {/* Subtle Left Glow */}
                <div className="absolute left-0 top-1 w-1 h-6 md:h-8 bg-blue-500/40 blur-sm rounded-full"></div>
                <div className="absolute left-0 top-1 w-[2px] h-6 md:h-8 bg-blue-400 rounded-full"></div>

                <div className="relative z-10 space-y-1 md:space-y-2">
                  <h3 className="text-white text-sm md:text-2xl font-semibold tracking-tight group-hover:text-white transition-colors">
                    {mainText}{' '}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {accentText}
                    </span>
                  </h3>
                  <p className="text-xs md:text-base text-gray-400 leading-snug md:leading-relaxed line-clamp-3 md:line-clamp-none">
                    {solution.desc}
                  </p>
                  <p className="text-[11px] md:text-sm text-gray-300 font-medium pt-1">
                    {solution.point}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default UniversitySolution;
