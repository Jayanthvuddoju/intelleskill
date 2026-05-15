import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, Code, GraduationCap, Bot, GitBranch } from 'lucide-react';

const UniversityAIStep = () => {
  const cards = [
    {
      title: "Project Generation",
      desc: "Creates domain-specific projects aligned with role and industry demand in sectors like Banking, Telecom, HealthCare, Retail, and E-Commerce",
      icon: Wand2,
      color: "text-blue-400"
    },
    {
      title: "Code Evaluation",
      desc: "Analyzes correctness, quality, and best practices instantly",
      icon: Code,
      color: "text-emerald-400"
    },
    {
      title: "Concept Checkpoints",
      desc: "Generates assessments to validate real understanding",
      icon: GraduationCap,
      color: "text-purple-400"
    },
    {
      title: "AI Mentor Chat",
      desc: "Context-aware assistant that understands code and tasks",
      icon: Bot,
      color: "text-amber-400"
    },
    {
      title: "Repo Health Analysis",
      desc: "Evaluates GitHub structure, commits, and documentation quality",
      icon: GitBranch,
      color: "text-rose-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/15 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-[0.2em] text-blue-400/70 text-[11px] md:text-sm font-bold block mb-2 md:mb-4">
              POWERED BY
            </span>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              AI at Every Step
            </h2>
            <div className="space-y-2 md:space-y-4">
              <p className="text-gray-300 text-sm md:text-lg leading-snug md:leading-relaxed">
                IntelleSkill integrates AI across the entire student journey — from structured learning to real-world project execution and evaluation.
              </p>
              <p className="text-gray-400 text-xs md:text-base border-l-2 border-blue-500/30 pl-4 italic">
                Powered by advanced foundation models that simulate real development environments.
              </p>
            </div>
          </motion.div>

          {/* Right Side: Clean Premium List */}
          <div className="flex flex-col gap-4 md:gap-8 mt-10 relative">
            {/* Visual Enhancement Glow behind list */}
            <div className="absolute inset-0 bg-blue-500/5 blur-[120px] rounded-full -z-10"></div>
            
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 md:gap-5 group transition-all duration-200 hover:translate-x-1"
              >
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)] group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-semibold text-white leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 mt-1 leading-snug md:leading-relaxed">
                    {card.desc}
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

export default UniversityAIStep;
