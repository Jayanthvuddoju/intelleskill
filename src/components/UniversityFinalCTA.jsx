import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Phone, GraduationCap, ArrowRight } from 'lucide-react';

const UniversityFinalCTA = () => {
  return (
    <section className="py-28 px-6 relative bg-transparent overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* LEFT: Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full opacity-30"></div>
          
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[40px] shadow-2xl relative z-10"
            >
              <GraduationCap size={160} className="text-white opacity-90 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" strokeWidth={1} />
            </motion.div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-20 h-20 bg-blue-500/40 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/10"
            >
              <div className="w-10 h-1 bg-white/20 rounded-full"></div>
            </motion.div>
            
            <motion.div 
              animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-24 h-24 bg-purple-500/30 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-400 text-sm font-bold tracking-[0.3em] uppercase mb-4 block leading-none">
            READY TO TRANSFORM
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your Students' <br /> Career Journey?
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
            Let’s schedule a 20-minute live demo for your institution. No commitment required.
          </p>

          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all">
                <Globe size={18} />
              </div>
              <span className="font-medium">www.intelle-sphere.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-purple-500/20 group-hover:border-purple-500/50 transition-all">
                <Mail size={18} />
              </div>
              <span className="font-medium">upskill@intelle-sphere.com</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
                <Phone size={18} />
              </div>
              <span className="font-medium">+91 8374503904</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(234, 179, 8, 0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-xl shadow-lg transition-all"
          >
            Book a Free Demo
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityFinalCTA;
