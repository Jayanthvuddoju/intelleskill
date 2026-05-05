import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Layers, Briefcase, History, ChevronLeft, ChevronRight } from 'lucide-react';

const ProfessionalProblem = () => {
  const problems = [
    {
      title: "Learning without application",
      desc: "You complete courses but rarely apply them in real scenarios.",
      icon: Layers,
      color: "text-red-400",
      glow: "group-hover:shadow-red-500/20"
    },
    {
      title: "No strong portfolio",
      desc: "Your experience isn’t visible or structured for career growth.",
      icon: Briefcase,
      color: "text-amber-400",
      glow: "group-hover:shadow-amber-500/20"
    },
    {
      title: "Skills outdated quickly",
      desc: "What you learned before doesn’t match current industry demands.",
      icon: History,
      color: "text-purple-400",
      glow: "group-hover:shadow-purple-500/20"
    }
  ];

  // Slider State
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalCards = problems.length;

  // Infinite loop array: [Clone Last, Card 1, Card 2, Card 3, Clone First]
  const displayProblems = [problems[totalCards - 1], ...problems, problems[0]];

  // Safe Transition Reset
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [index, isTransitioning]);

  const handleNext = () => {
    if (!isTransitioning) return;
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

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

  return (
    <section className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Why most professionals feel stuck
          </h2>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[2rem] group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 -z-10 opacity-50 group-hover:opacity-100"></div>
              <div className={`relative h-full bg-[#030712]/80 backdrop-blur-2xl p-8 rounded-[2rem] flex flex-col items-start transition-all duration-300 shadow-2xl ${problem.glow}`}>
                <div className="flex items-center gap-4 mb-6 w-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <problem.icon className={`w-7 h-7 ${problem.color}`} />
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {problem.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {problem.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-2 h-2 rounded-full ${problem.color} animate-pulse`}></div>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Growth Block</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        <div className="block lg:hidden relative group max-w-xl mx-auto">
          {/* Arrow Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-10 h-10 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={24} />
          </button>

          <div className="relative overflow-hidden min-h-[280px]">
            <div 
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTransitionEnd={onTransitionEnd}
              className="flex"
              style={{ 
                transform: `translate3d(-${index * 100}%, 0, 0)`,
                transition: isTransitioning ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)" : "none"
              }}
            >
              {displayProblems.map((problem, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="relative bg-[#030712]/80 backdrop-blur-2xl p-6 rounded-[2rem] border border-white/10 flex flex-col items-center text-center h-full min-h-[260px]">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                      <problem.icon className={`w-6 h-6 ${problem.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed font-medium line-clamp-3">{problem.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {problems.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  if (!isTransitioning) return;
                  setIsTransitioning(true);
                  setIndex(i + 1);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  getActiveDot() === i
                    ? "bg-blue-400 scale-125 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProblem;

