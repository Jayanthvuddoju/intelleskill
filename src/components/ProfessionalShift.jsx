import { motion } from 'framer-motion';

const ProfessionalShift = () => {
  return (
    <section className="py-24 px-6 bg-transparent text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          It’s not about learning more. <br />
          It’s about <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">building proof.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default ProfessionalShift;
