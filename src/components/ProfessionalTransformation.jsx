import { motion } from 'framer-motion';

const ProfessionalTransformation = () => {
  const lines = [
    { from: "passive learning", to: "active execution" },
    { from: "watching tutorials", to: "solving real problems" },
    { from: "I know this", to: "I’ve built this" }
  ];

  return (
    <section className="py-24 px-6 bg-transparent text-center overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-12">
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-3xl font-bold"
          >
            <span className="text-slate-500">From {line.from}</span>
            <span className="text-blue-500 hidden md:inline">→</span>
            <span className="text-white italic">to {line.to}.</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalTransformation;
