import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Building2, Users, FileCheck, Cloud } from 'lucide-react';

const UniversityWhyCollege = () => {
  const benefits = [
    {
      title: "Boost Placement Metrics",
      desc: "Students build real portfolios and verified proof of work that improves placement outcomes.",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      title: "Accreditation Readiness",
      desc: "Track and export student performance data aligned with NAAC/NBA requirements.",
      icon: Award,
      color: "text-emerald-400"
    },
    {
      title: "No Industry Tie-Up Needed",
      desc: "No MoUs or coordination — everything runs entirely within campus.",
      icon: Building2,
      color: "text-amber-400"
    },
    {
      title: "Faculty as Mentors",
      desc: "Faculty review work, approve sprints, and guide students through real workflows.",
      icon: Users,
      color: "text-purple-400"
    },
    {
      title: "Verified Student Certificates",
      desc: "Each certificate includes a unique verification URL for authenticity.",
      icon: FileCheck,
      color: "text-rose-400"
    },
    {
      title: "Zero IT Infrastructure",
      desc: "Fully cloud-based — no setup, no maintenance, accessible from anywhere.",
      icon: Cloud,
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* SECTION BACKGROUND DEPTH */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Why Your College Needs IntelleSkill
          </h2>
        </motion.div>

        {/* BREAK GRID INTO 2 LAYERS (Staggered Layout) */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-8">
          {benefits.map((benefit, index) => {
            const isSecondRow = index >= 3;
            const orbColors = [
              "bg-blue-500/20",
              "bg-emerald-500/20",
              "bg-amber-500/20",
              "bg-purple-500/20",
              "bg-rose-500/20",
              "bg-cyan-500/20"
            ];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg md:rounded-2xl p-3 md:p-8 min-h-[80px] md:min-h-[auto] transition-all duration-300 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group overflow-hidden flex flex-col gap-1 md:gap-0 ${isSecondRow ? 'md:translate-y-6' : ''}`}
              >
                {/* ADD INNER LIGHT GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>

                {/* ADD FLOATING LIGHT ORB (DEPTH EFFECT) */}
                <div className={`absolute -top-10 -right-10 w-28 h-28 ${orbColors[index % orbColors.length]} blur-2xl rounded-full pointer-events-none`}></div>
                
                {/* ICON STYLE (DEPTH) - Hidden on mobile per compact requirement */}
                <div className={`hidden md:flex w-14 h-14 rounded-xl bg-white/10 backdrop-blur border border-white/5 items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.1)] ${benefit.color} group-hover:scale-110 transition-transform duration-500`}>
                  <benefit.icon size={26} />
                </div>
                
                <h3 className="text-sm md:text-lg font-medium md:font-semibold text-white mb-1 md:mb-2 leading-tight">{benefit.title}</h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 leading-tight md:leading-relaxed group-hover:text-gray-300 transition-colors line-clamp-2 md:line-clamp-none">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default UniversityWhyCollege;
