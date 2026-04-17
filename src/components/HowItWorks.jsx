import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Sparkles, 
  Lightbulb, 
  Terminal, 
  Cpu, 
  Users, 
  Award, 
  ExternalLink 
} from 'lucide-react';

const StepCard = ({ icon: Icon, title, text, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="relative p-6 flex flex-col items-center text-center group z-10"
  >
    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl border border-white/10 text-blue-400 flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 duration-300 relative">
      <Icon size={24} />
      <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center border-4 border-[#020617]">
        {index + 1}
      </div>
    </div>
    <h3 className="text-sm font-bold text-white mb-2">
      {title}
    </h3>
    <p className="text-[11px] text-slate-400 leading-relaxed max-w-[160px] font-medium">
      {text}
    </p>
  </motion.div>
);

const HowItWorks = () => {
  const steps = [
    { icon: User, title: "Choose role", text: "Select your career path and target industry." },
    { icon: Sparkles, title: "AI generates projects", text: "Market-driven scenarios based on real job postings." },
    { icon: Lightbulb, title: "Understand problem", text: "Analyze real-world use cases and business requirements." },
    { icon: Terminal, title: "Build in sprints", text: "Execute your project using milestone-based agile sprints." },
    { icon: Cpu, title: "AI evaluates", text: "Get instant automated feedback and code analysis." },
    { icon: Users, title: "Human review", text: "Receive personalized deep-dives from senior industry devs." },
    { icon: Award, title: "Get scored + verified", text: "Earn a tamper-proof certificate backed by your score." },
    { icon: ExternalLink, title: "Show projects", text: "Deploy and showcase your verified work to top companies." }
  ];

  return (
    <section className="py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white"
          >
            This is how you build real experience.
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 mt-4 text-lg"
          >
            A high-intensity, industry-verified journey from learning to landing.
          </motion.p>
        </div>

        <div className="relative">
          {/* Background Flow Line (Desktop Only) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 1000 1000" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              preserveAspectRatio="none"
            >
              <path 
                d="M 125 115 H 875 C 1050 115 1050 500 500 500 C -50 500 -50 760 125 760 H 875" 
                stroke="#60a5fa" 
                strokeWidth="2" 
                strokeDasharray="20 20"
                strokeOpacity="0.3"
                style={{ animation: 'dash 15s linear infinite' }}
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-32 gap-x-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                index={index}
                {...step}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
