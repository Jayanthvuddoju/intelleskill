import React from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const Comparison = () => {
  const comparisonRows = [
    {
      label: "Real project to show",
      without: "None",
      with: "2 completed projects",
    },
    {
      label: "Verifiable proof of skills",
      without: "Just a degree",
      with: "Scored certificate",
    },
    {
      label: "Code you actually wrote",
      without: "Lab exercises",
      with: "Real domain project",
    },
    {
      label: "Industry-relevant work",
      without: "Syllabus tasks",
      with: "Aligned to job data",
    },
    {
      label: "LinkedIn value",
      without: "CGPA only",
      with: "Certificate + portfolio",
    },
    {
      label: "Interview answer",
      without: "Nothing",
      with: "2 projects + score",
    },
    {
      label: "Interview confidence",
      without: "Theory only",
      with: "You've done real work",
    }
  ];

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
          >
            IntelleSkill vs Traditional
          </motion.h2>
        </div>

        {/* Header Row (Desktop Only) */}
        <div className="hidden md:grid grid-cols-3 gap-6 px-8 mb-8 py-4 bg-gradient-to-r from-white/10 to-transparent rounded-2xl border border-white/10 shadow-lg">
          <div className="text-gray-200 text-sm font-bold uppercase tracking-widest flex items-center">What matters to recruiters</div>
          <div className="text-gray-400 text-sm font-bold uppercase tracking-widest text-center flex items-center justify-center">Traditional</div>
          <div className="text-green-400 text-sm font-bold uppercase tracking-widest text-center flex items-center justify-center px-4">With IntelleSkill</div>
        </div>

        {/* Comparison Rows (Desktop Only) */}
        <div className="hidden md:flex flex-col gap-4">
          {comparisonRows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5,
                ease: "easeOut" 
              }}
              className="grid md:grid-cols-3 gap-6 items-stretch bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1 overflow-visible group"
            >
              {/* Feature Label */}
              <div className="flex items-center p-6 text-white font-medium text-lg md:text-base">
                {row.label}
              </div>

              {/* Without Column */}
              <div className="flex items-center gap-3 p-6 text-gray-400 md:justify-center border-l md:border-l-0 border-white/5">
                <X className="w-5 h-5 flex-shrink-0 text-red-400" />
                <span className="text-sm md:text-base">{row.without}</span>
              </div>

              {/* With Column (Dominant) */}
              <div className="relative flex items-center gap-3 p-6 md:justify-center bg-white/10 border-l border-white/10 overflow-visible rounded-r-2xl">
                {/* WOW Glow effect */}
                <div className="absolute inset-0 bg-green-500/[0.05] blur-xl -z-10 group-hover:bg-green-500/[0.1] transition-colors duration-300"></div>
                
                <Check className="w-5 h-5 flex-shrink-0 text-green-400" />
                <span className="text-white font-semibold text-sm md:text-base relative z-10">{row.with}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Comparison Table (Visible only on mobile) */}
        <div className="block md:hidden w-full overflow-x-auto px-2">
          <table className="w-full text-[11px] border-collapse bg-white/[0.02] rounded-xl overflow-hidden">
            <thead>
              <tr className="text-white/80 border-b border-white/10 text-left">
                <th className="py-3 px-2 font-bold uppercase whitespace-nowrap">Feature</th>
                <th className="py-3 px-2 font-bold uppercase whitespace-nowrap text-center">Traditional</th>
                <th className="py-3 px-2 font-bold uppercase whitespace-nowrap text-center text-blue-400">IntelleSkill</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, index) => (
                <tr key={index} className={`border-b border-white/5 ${index % 2 === 1 ? 'bg-white/5' : ''}`}>
                  <td className="py-3 px-2 text-white/70 font-medium leading-tight">{row.label}</td>
                  <td className="py-3 px-2 text-red-400/90 text-center leading-tight">{row.without}</td>
                  <td className="py-3 px-2 text-green-400 text-center font-semibold leading-tight">{row.with}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
