import React from 'react';
import { motion } from 'framer-motion';
import { FileX, Briefcase, TrendingUp } from 'lucide-react';

const UniversityChallenge = () => {
  const cards = [
    {
      title: "No Real Experience",
      text: "72% of graduates struggle to find jobs because they lack practical, hands-on tech experience employers demand.",
      icon: FileX,
      color: "text-red-400",
      glow: "group-hover:shadow-red-500/20"
    },
    {
      title: "Limited Internship Seats",
      text: "Industry internship seats are scarce. Most students graduate without a single work experience on their resume.",
      icon: Briefcase,
      color: "text-amber-400",
      glow: "group-hover:shadow-amber-500/20"
    },
    {
      title: "Skills Gap is Growing",
      text: "Classroom theory alone doesn't prepare students for real-world sprints, code reviews, and AI-driven workflows.",
      icon: TrendingUp,
      color: "text-purple-400",
      glow: "group-hover:shadow-purple-500/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-4 tracking-widest uppercase">
            The Industry Crisis
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            THE CHALLENGE YOUR <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-rose-400 italic">STUDENTS FACE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Animated Border Gradient */}
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 -z-10 opacity-50 group-hover:opacity-100"></div>

              <div className={`relative h-full bg-[#030712]/80 backdrop-blur-2xl p-8 rounded-[2rem] flex flex-col items-start transition-all duration-300 shadow-2xl ${card.glow}`}>
                {/* Icon in side container */}
                <div className="flex items-center gap-4 mb-6 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <card.icon className={`w-7 h-7 ${card.color}`} />
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {card.text}
                </p>

                {/* Bottom detail decoration */}
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 rounded-full ${card.color} animate-pulse`}></div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Major Hurdle</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityChallenge;
