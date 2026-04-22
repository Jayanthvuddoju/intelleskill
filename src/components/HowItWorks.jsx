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
    className="relative p-4 md:p-6 flex flex-col items-center text-center group z-10 w-full"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/10 backdrop-blur-sm shadow-xl border border-white/10 text-blue-400 flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/30 duration-300 relative">
      <Icon size={24} />
      <div className="absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full bg-blue-600 text-white text-[10px] md:text-xs font-bold flex items-center justify-center border-2 md:border-4 border-[#020617]">
        {index + 1}
      </div>
    </div>
    <h3 className="text-[13px] md:text-sm font-bold text-white mb-2">
      {title}
    </h3>
    <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed max-w-[140px] md:max-w-[160px] font-medium">
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

  const pairs = [
    steps.slice(0, 2),
    steps.slice(2, 4),
    steps.slice(4, 6),
    steps.slice(6, 8)
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-white px-4"
          >
            This is how you build real experience.
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-slate-400 mt-4 text-base md:text-lg max-w-2xl mx-auto px-4"
          >
            A high-intensity, industry-verified journey from learning to landing.
          </motion.p>
        </div>

        <div className="relative">
          {/* Background Flow Line (Desktop/Tablet) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
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

          {/* Background Zig-Zag Path (Mobile Only) */}
          <div className="md:hidden absolute inset-0 pointer-events-none -z-10">
            <svg 
              width="100%" 
              height="100%" 
              viewBox="0 0 100 800" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path 
                id="mobilePath"
                d="M 25 50 H 75 
                   C 95 50 95 250 75 250 
                   H 25 
                   C 5 250 5 450 25 450 
                   H 75 
                   C 95 450 95 650 75 650 
                   H 25" 
                stroke="#60a5fa" 
                strokeWidth="2" 
                strokeDasharray="4 4"
                strokeOpacity="0.2"
                style={{ animation: 'dash 25s linear infinite' }}
              />
              <circle r="1" fill="#60a5fa">
                <animateMotion dur="25s" repeatCount="indefinite" rotate="auto"><mpath href="#mobilePath" /></animateMotion>
                <animate attributeName="r" values="0.8;1.5;0.8" dur="2s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>

          {/* Main Grid Structure */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 lg:gap-y-32">
            {pairs.map((pair, pIdx) => (
              <div 
                key={pIdx} 
                className={`relative flex ${pIdx % 2 === 1 ? 'flex-row-reverse md:flex-row' : 'flex-row'}`}
              >
                {/* Visual connectors within pairs (Tablet View) */}
                <div className="hidden md:block lg:hidden absolute top-[52px] left-[20%] right-[20%] -z-10 h-px">
                  <svg width="100%" height="1" preserveAspectRatio="none" fill="none">
                    <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke="#60a5fa" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" style={{ animation: 'dash 15s linear infinite' }} />
                  </svg>
                </div>
                
                {pair.map((step, sIdx) => {
                  const originalIndex = pIdx * 2 + sIdx;
                  return (
                    <div key={originalIndex} className="w-1/2 flex justify-center">
                      <StepCard 
                        index={originalIndex}
                        {...step}
                      />
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
