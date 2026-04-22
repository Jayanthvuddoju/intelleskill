import { motion } from 'framer-motion';

const ProfessionalProblem = () => {
  const problems = [
    {
      title: "Learning without application",
      desc: "You complete courses but rarely apply them in real scenarios."
    },
    {
      title: "No strong portfolio",
      desc: "Your experience isn’t visible or structured for career growth."
    },
    {
      title: "Skills outdated quickly",
      desc: "What you learned before doesn’t match current industry demands."
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why most professionals feel stuck
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all group hover:border-white/20"
            >
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                {problem.title}
              </h3>
              <p className="text-slate-400 leading-relaxed font-medium">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProblem;
