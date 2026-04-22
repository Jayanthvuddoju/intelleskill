import { motion } from 'framer-motion';

const ProfessionalImpact = () => {
  return (
    <section className="py-24 px-6 bg-transparent text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          You don’t just upgrade your skills. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            You upgrade your career trajectory.
          </span>
        </h2>
      </motion.div>
    </section>
  );
};

export default ProfessionalImpact;
