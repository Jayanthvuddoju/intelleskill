import { motion } from 'framer-motion';
import { useContactModal } from '../context/ContactModalContext';

const ProfessionalCTA = () => {
  const { openModal } = useContactModal();
  return (
    <section className="py-24 px-6 bg-transparent overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 md:p-20 text-center relative overflow-hidden"
      >
        {/* Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[100px] -z-10 rounded-full" />
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Stop learning in isolation. <br />
          Start building what actually matters.
        </h2>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openModal('Start Your Upgrade')}
          className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-full font-bold text-lg transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] cursor-pointer"
        >
          Start Your Upgrade
        </motion.button>
      </motion.div>
    </section>
  );
};

export default ProfessionalCTA;
