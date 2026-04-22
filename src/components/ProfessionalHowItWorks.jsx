import { motion } from 'framer-motion';

const ProfessionalHowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose your goal",
      desc: "Switch roles, grow, or specialize",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "02",
      title: "Get a structured path",
      desc: "Aligned with real job expectations",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "03",
      title: "Build real projects",
      desc: "Based on actual industry use-cases",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "04",
      title: "Work in sprints",
      desc: "Simulating real team workflows",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "05",
      title: "Get reviewed",
      desc: "AI + expert feedback on your work",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "06",
      title: "Prove your skills",
      desc: "Showcase projects and performance",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8 relative z-10"
              >
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-2xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </div>
                <div className="py-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHowItWorks;
