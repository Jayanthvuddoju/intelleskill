import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProfessionalProblem = () => {
  const problems = [
    {
      title: "Learning without application",
      desc: "You complete courses but rarely apply them in real scenarios."
    },
    {
      title: "No strong portfolio",
      desc: "Your experience isn’t visible or structured for career growth."
    },
    {
      title: "Skills outdated quickly",
      desc: "What you learned before doesn’t match current industry demands."
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
    <section className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Why most professionals feel stuck
          </h2>
        </motion.div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all group hover:border-white/20"
            >
              <h3 className="text-sm md:text-xl font-bold text-white mb-2 md:mb-4 group-hover:text-blue-400 transition-colors">
                {problem.title}
              </h3>
              <p className="text-xs md:text-base text-slate-400 leading-snug md:leading-relaxed font-medium">
                {problem.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        <div className="block md:hidden relative group max-w-xl mx-auto">
          {/* Arrow Buttons */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="relative overflow-hidden min-h-[160px]">
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
                  <div className="h-[160px] p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-center text-center transition-all">
                    <h3 className="text-sm font-bold text-white mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-snug font-medium line-clamp-3">
                      {problem.desc}
                    </p>
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
                    ? "bg-blue-400 scale-110 shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                    : "bg-white/30"
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

