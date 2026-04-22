import { motion } from 'framer-motion';

const ProfessionalValue = () => {
  const values = [
    {
      title: "Role-Based Learning Path",
      desc: "Focus only on what matters for your target role"
    },
    {
      title: "AI-Generated Industry Projects",
      desc: "Work on real scenarios aligned with hiring demand"
    },
    {
      title: "Sprint-Based Execution",
      desc: "Build like real teams using structured workflows"
    },
    {
      title: "Expert + AI Feedback",
      desc: "Get actionable feedback that improves your work"
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
            What you actually get
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all group overflow-hidden relative"
            >
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400 font-medium">
                  {value.desc}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalValue;
