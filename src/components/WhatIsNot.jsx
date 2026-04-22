import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const WhatIsNot = () => {
  const rows = [
    {
      label: "Not Just Another Online Course",
      description: (
        <>
          Endless videos and no real outcomes? <span className="text-red-400">Not here.</span> You actually <span className="text-green-400">build</span>, not just watch.
        </>
      )
    },
    {
      label: "Not an Expensive Bootcamp",
      description: (
        <>
          <span className="text-red-400">No heavy fees.</span> <span className="text-red-400">No rigid schedules.</span> <span className="text-red-400">No unnecessary pressure.</span> Just <span className="text-green-400">real learning</span> that fits your pace.
        </>
      )
    },
    {
      label: "Not Just a Certificate Generator",
      description: (
        <>
          Certificates here are <span className="text-green-400">earned through real work</span> — <span className="text-green-400">built projects</span>, <span className="text-green-400">real evaluations</span>, and <span className="text-green-400">measurable proof</span>.
        </>
      )
    }
  ];

  return (
    <section className="py-20 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-widest uppercase bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            WHAT INTELLESKILL IS NOT:
          </h2>
          <div className="mt-3 h-[2px] w-24 bg-gradient-to-r from-white/60 to-transparent rounded-full shadow-[0_0_8px_rgba(255,255,255,0.3)]"></div>
        </motion.div>

        {/* Rows */}
        <div className="space-y-4">
          {rows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4 rounded-xl border border-red-500/40 bg-white/5 backdrop-blur-md px-6 py-5 transition-all duration-300 hover:border-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group"
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                <X className="w-3 h-3 text-red-400" />
              </div>
              
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-semibold text-lg md:text-xl leading-tight">
                  {row.label}
                </h3>
                <p className="text-gray-300 font-medium text-sm md:text-base leading-relaxed">
                  {row.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final Highlight Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 rounded-2xl border border-green-400/40 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-lg px-8 py-8 text-center shadow-[0_0_30px_rgba(52,211,153,0.1)]"
        >
          <p className="text-white font-semibold text-xl mb-2">
            IntelleSkill is the gap between your degree and your first job.
          </p>
          <p className="text-green-400 font-bold text-lg">
            Close it before you graduate — not after.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsNot;
