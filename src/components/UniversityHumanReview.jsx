import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, FileText, CheckCircle2, ClipboardCheck, Check } from 'lucide-react';

const UniversityHumanReview = () => {
  const roles = [
    {
      icon: Code,
      iconColor: "text-blue-400",
      bgColor: "bg-blue-500/20",
      title: "Senior Developer",
      desc: "Reviews code quality, architecture & sprint deliverables"
    },
    {
      icon: Users,
      iconColor: "text-yellow-400",
      bgColor: "bg-yellow-500/20",
      title: "Product Owner",
      desc: "Reviews PRD, HLD documentation & project scope"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-32 px-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start justify-between">
          
          {/* Left Side: Content */}
          <div className="max-w-md lg:pl-12 lg:ml-0">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <motion.span 
                variants={itemVariants}
                className="text-yellow-400 text-sm tracking-[0.2em] font-bold uppercase mb-4"
              >
                REAL INDUSTRY REVIEW
              </motion.span>
              <motion.h2 
                variants={itemVariants}
                className="text-white text-4xl md:text-5xl font-bold leading-tight mt-2 mb-4 tracking-tight"
              >
                Human Experts <br /> In the Loop
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-gray-300 mt-6 text-lg leading-relaxed tracking-wide"
              >
                Unlike fully automated platforms, IntelleSkill brings real Senior Developers and Product Owners into the review process — giving students authentic industry feedback, not just AI scores.
              </motion.p>

              {/* Added Trust Points */}
              <motion.div 
                variants={itemVariants}
                className="mt-8 space-y-4"
              >
                {[
                  "Real developers review actual student work",
                  "Feedback is detailed, practical, and industry-aligned",
                  "Students experience real sprint-based review workflows",
                  "Every stage is validated before progressing forward"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" strokeWidth={3} />
                    <span className="text-gray-300 text-sm leading-tight tracking-wide">{point}</span>
                  </div>
                ))}
              </motion.div>

              <div className="mt-12 space-y-6">
                {roles.map((role, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex gap-4 items-start"
                  >
                    <div className={`w-12 h-12 rounded-full ${role.bgColor} flex items-center justify-center flex-shrink-0 border border-white/5 shadow-lg`}>
                      <role.icon className={`w-6 h-6 ${role.iconColor}`} />
                    </div>
                    <div className="mt-1">
                      <h4 className="text-white font-medium text-lg tracking-wide">{role.title}</h4>
                      <p className="text-gray-400 text-sm mt-1 leading-relaxed tracking-wide">
                        {role.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Cards */}
          <div className="flex flex-col gap-8 w-full">
            
            {/* CARD 1: Documentation Review */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-2 border-yellow-400/60 rounded-2xl p-8 bg-black/20 backdrop-blur-sm shadow-[0_0_20px_rgba(250,204,21,0.1)] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <FileText size={80} className="text-yellow-400" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-400">
                  <ClipboardCheck size={24} />
                </div>
                <h3 className="text-yellow-400 font-bold text-xl uppercase tracking-wide">
                  Gate 1 — Documentation Review
                </h3>
              </div>
              
              <p className="text-cyan-400 text-sm italic mb-6">
                Triggered after: Student submits PRD & HLD
              </p>

              <ul className="space-y-4">
                {[
                  "Senior Dev or PO reviews the project plan & design docs",
                  "Checks: scope clarity, feasibility, tech stack alignment",
                  "Decision: Approve → sprints unlock | Revise → student reworks docs",
                  "Feedback is written directly in the platform for the student to see"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                    <div className="mt-1 flex-shrink-0">
                      <Check size={18} className="text-green-400" strokeWidth={3} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CARD 2: Sprint Review */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-2 border-cyan-400/60 rounded-2xl p-8 bg-black/20 backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.1)] relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 size={80} className="text-cyan-400" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-cyan-400/10 text-cyan-400">
                  <Code size={24} />
                </div>
                <h3 className="text-cyan-400 font-bold text-xl uppercase tracking-wide">
                  Gate 2 — Sprint Review (×3 sprints)
                </h3>
              </div>
              
              <p className="text-yellow-400 text-sm italic mb-6">
                Triggered after: Student completes all tasks in a sprint
              </p>

              <ul className="space-y-4">
                {[
                  "Senior Dev reviews submitted code & task deliverables",
                  "Checks: correctness, code quality, real-world standards",
                  "Decision: Approve → next sprint unlocks | Changes requested → student revises",
                  "Detailed written feedback visible in the student's dashboard",
                  "Repeat for each of the 3 sprints before certificate is issued"
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                    <div className="mt-1 flex-shrink-0">
                      <Check size={18} className="text-green-400" strokeWidth={3} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityHumanReview;
