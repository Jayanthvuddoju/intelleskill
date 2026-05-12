import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Link, BarChart3, Share2, Award } from 'lucide-react';
import certificateImg from '../assets/certificate.png';

const UniversityCertification = () => {
  const features = [
    {
      title: "Unique Verification URL",
      desc: "Each certificate links to a verifiable public page",
      icon: Link,
      color: "text-blue-400"
    },
    {
      title: "Tamper-Proof Record",
      desc: "Stored securely — cannot be altered or faked",
      icon: ShieldCheck,
      color: "text-emerald-400"
    },
    {
      title: "Score-Based Evaluation",
      desc: "Reflects real performance across all sprints",
      icon: BarChart3,
      color: "text-amber-400"
    },
    {
      title: "LinkedIn Ready",
      desc: "You can showcase directly on LinkedIn profiles",
      icon: Share2,
      color: "text-blue-500"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry-Verifiable Certificates
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mt-16">
          {/* LEFT: Certificate Image */}
          <motion.div
            initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative group"
          >
            {/* Glow Background */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            {/* Certificate Image Container */}
            <div className="relative aspect-[1.4/1] bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center p-2 sm:p-4">
              <img 
                src={certificateImg} 
                alt="IntelleSkill Certificate" 
                className="w-full h-full object-contain rounded-lg"
              />
              
              {/* Shine Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>

            {/* Decorative Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 p-4 bg-blue-500 rounded-2xl shadow-xl z-20"
            >
              <Award className="text-white" size={32} />
            </motion.div>
          </motion.div>

          {/* RIGHT: Feature List */}
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${feature.color} group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300`}>
                  <feature.icon size={24} />
                </div>
                <h3 className="text-white text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityCertification;
