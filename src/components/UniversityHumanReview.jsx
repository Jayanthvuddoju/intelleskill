import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, FileText, CheckCircle2, ClipboardCheck, Check, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const gates = [
    {
      title: "Gate 1 — Documentation Review",
      trigger: "Triggered after: Student submits PRD & HLD",
      icon: ClipboardCheck,
      iconBg: "bg-yellow-400/10",
      iconColor: "text-yellow-400",
      borderColor: "border-yellow-400/60",
      shadowColor: "shadow-[0_0_20px_rgba(250,204,21,0.1)]",
      decorIcon: FileText,
      points: [
        "Senior Dev or PO reviews the project plan & design docs",
        "Checks: scope clarity, feasibility, tech stack alignment",
        "Decision: Approve → sprints unlock | Revise → student reworks docs",
        "Feedback is written directly in the platform for the student to see"
      ]
    },
    {
      title: "Gate 2 — Sprint Review (×3 sprints)",
      trigger: "Triggered after: Student completes all tasks in a sprint",
      icon: Code,
      iconBg: "bg-cyan-400/10",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-400/60",
      shadowColor: "shadow-[0_0_20px_rgba(34,211,238,0.1)]",
      decorIcon: CheckCircle2,
      points: [
        "Senior Dev reviews submitted code & task deliverables",
        "Checks: correctness, code quality, real-world standards",
        "Decision: Approve → next sprint unlocks | Changes requested → student revises",
        "Detailed written feedback visible in the student's dashboard",
        "Repeat for each of the 3 sprints before certificate is issued"
      ]
    }
  ];

  // Slider State
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalCards = gates.length;

  // Safe Loop Reset
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) return;
    if (index >= totalCards + 1) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    if (index <= 0) return;
    setIndex((prev) => prev - 1);
  };

  const onTransitionEnd = () => {
    if (index === 0) {
      setIsTransitioning(false);
      setIndex(totalCards);
    } else if (index === totalCards + 1) {
      setIsTransitioning(false);
      setIndex(1);
    }
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNext();
    if (distance < -50) handlePrev();
    setTouchStart(0);
    setTouchEnd(0);
  };

  const getActiveDot = () => {
    if (index === 0) return totalCards - 1;
    if (index === totalCards + 1) return 0;
    return index - 1;
  };

  const displayGates = [gates[totalCards - 1], ...gates, gates[0]];

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
                    className="flex gap-2 md:gap-4 items-center md:items-start"
                  >
                    <div className={`w-8 h-8 md:w-12 md:h-12 rounded-full ${role.bgColor} flex items-center justify-center flex-shrink-0 border border-white/5 shadow-lg`}>
                      <role.icon className={`w-4 h-4 md:w-6 md:h-6 ${role.iconColor}`} />
                    </div>
                    <div className="mt-0 md:mt-1">
                      <h4 className="text-white font-medium text-sm md:text-lg tracking-wide">{role.title}</h4>
                      <p className="hidden md:block text-gray-400 text-sm mt-1 leading-relaxed tracking-wide">
                        {role.desc}
                      </p>
                    </div>
                  </motion.div>

                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side: Cards */}
          <div className="w-full">
            {/* Desktop View: Stacked Cards */}
            <div className="hidden md:flex flex-col gap-8">
              {gates.map((gate, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`border-2 ${gate.borderColor} rounded-2xl p-8 bg-black/20 backdrop-blur-sm ${gate.shadowColor} relative group overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <gate.decorIcon size={80} className={gate.iconColor} />
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 rounded-lg ${gate.iconBg} ${gate.iconColor}`}>
                      <gate.icon size={24} />
                    </div>
                    <h3 className={`${gate.iconColor} font-bold text-xl uppercase tracking-wide`}>
                      {gate.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm italic mb-6">
                    {gate.trigger}
                  </p>

                  <ul className="space-y-4">
                    {gate.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-300 text-sm md:text-base">
                        <div className="mt-1 flex-shrink-0">
                          <Check size={18} className="text-green-400" strokeWidth={3} />
                        </div>
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Mobile View: Slider */}
            <div className="block md:hidden relative group">
              {/* Arrows */}
              <button 
                onClick={handlePrev}
                disabled={!isTransitioning}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white/50 disabled:opacity-30"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={handleNext}
                disabled={!isTransitioning}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white/50 disabled:opacity-30"
              >
                <ChevronRight size={20} />
              </button>

              <div className="relative overflow-hidden min-h-[400px]">
                <div
                  className="flex transition-transform"
                  style={{
                    transform: `translate3d(-${index * 100}%, 0, 0)`,
                    transition: isTransitioning ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" : "none"
                  }}
                  onTransitionEnd={onTransitionEnd}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  {displayGates.map((gate, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-4">
                      <div className={`border-2 ${gate.borderColor} rounded-2xl p-6 bg-black/20 backdrop-blur-sm ${gate.shadowColor} relative overflow-hidden h-full min-h-[420px]`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${gate.iconBg} ${gate.iconColor}`}>
                            <gate.icon size={20} />
                          </div>
                          <h3 className={`${gate.iconColor} font-bold text-sm uppercase tracking-wide`}>
                            {gate.title}
                          </h3>
                        </div>
                        
                        <p className="text-gray-400 text-xs italic mb-4">
                          {gate.trigger}
                        </p>

                        <ul className="space-y-3">
                          {gate.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-300 text-xs">
                              <Check size={14} className="text-green-400 mt-0.5 flex-shrink-0" strokeWidth={3} />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center items-center gap-2 mt-6">
                {gates.map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      getActiveDot() === i ? "bg-yellow-400 scale-125 shadow-[0_0_8px_rgba(250,204,21,0.6)]" : "bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default UniversityHumanReview;
