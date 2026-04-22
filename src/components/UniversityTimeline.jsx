import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Users, BookOpen, Rocket, CheckCircle2, ShieldCheck, Globe, HelpCircle } from 'lucide-react';

const UniversityTimeline = () => {
  const steps = [
    {
      day: "Day 1",
      title: "Onboarding Call",
      desc: "60-min kickoff with IT & faculty. We configure your institution account, branding, and admin setup.",
      gradient: "from-blue-500 to-indigo-600",
      icon: PhoneCall
    },
    {
      day: "Day 2–3",
      title: "Student Enrollment",
      desc: "Upload student list. Invite emails sent. Students log in easily — no passwords needed.",
      gradient: "from-indigo-500 to-purple-600",
      icon: Users
    },
    {
      day: "Day 4",
      title: "Faculty Training",
      desc: "1-hour walkthrough: dashboard usage, sprint reviews, progress tracking, and reporting.",
      gradient: "from-purple-500 to-pink-600",
      icon: BookOpen
    },
    {
      day: "Day 5–7",
      title: "First Batch Live",
      desc: "Students start real projects. AI-driven workflows begin. Real work starts immediately.",
      gradient: "from-pink-500 to-orange-600",
      icon: Rocket
    }
  ];

  const bottomHighlights = [
    { text: "No servers required", icon: Globe },
    { text: "Works on any browser", icon: CheckCircle2 },
    { text: "Full support included", icon: HelpCircle },
    { text: "Data stays secure", icon: ShieldCheck }
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
            Getting Started — Simple, Fast, Zero Hassle
          </h2>
          <p className="text-xl text-blue-400 font-medium">
            Live on Campus in Under a Week
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -z-10"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center text-white text-xl font-bold mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300 relative`}>
                <step.icon size={32} />
                <div className="absolute -inset-2 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-md"></div>
              </div>
              
              <span className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-2">{step.day}</span>
              <h3 className="text-white text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[250px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Strip */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-20 p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
        >
          {bottomHighlights.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-blue-300 text-sm font-medium">
              <item.icon size={18} className="text-blue-400" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default UniversityTimeline;
