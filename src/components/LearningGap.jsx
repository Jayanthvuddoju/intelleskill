import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileX, Layers, Target, ChevronLeft, ChevronRight } from 'lucide-react';

const LearningGap = () => {
  const cards = [
    {
      title: "No Real Output",
      text: "Students complete courses, but have nothing to show in an interview. No projects. No proof. No confidence.",
      icon: FileX,
      accent: "from-red-500 to-rose-500"
    },
    {
      title: "Same for Everyone",
      text: "Most platforms give identical, pre-built projects that don’t reflect real industry work. No personalization. No relevance.",
      icon: Layers,
      accent: "from-yellow-400 to-amber-500"
    },
    {
      title: "Not What Companies Need",
      text: "Students build basic or outdated projects that don’t match current hiring requirements. Skills learned ≠ skills demanded.",
      icon: Target,
      accent: "from-purple-500 to-violet-500"
    }
  ];

  // For premium infinite loop: [Clone of 3, Card 1, Card 2, Card 3, Clone of 1]
  const displayCards = cards.length > 0 ? [cards[2], ...cards, cards[0]] : [];
  const totalCards = cards.length;
  
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Fix 3: Re-enable transition safely
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, isTransitioning]);

  const handleNext = () => {
    // Fix 7 & Fix 1
    if (!isTransitioning) return;
    if (index >= totalCards + 1) return;
    
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    // Fix 7 & Fix 1
    if (!isTransitioning) return;
    if (index <= 0) return;
    
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  const onTransitionEnd = () => {
    // Fix 2: Safe Loop Reset
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getActiveDot = () => {
    if (index === 0) return 2;
    if (index === totalCards + 1) return 0;
    return index - 1;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-center tracking-tight text-white mb-16"
        >
          The Learning Gap
        </motion.h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {cards.length > 0 && cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/20 group-hover:shadow-xl flex flex-col items-center text-center">
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${card.accent}`}></div>
                <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <card.icon className="w-8 h-8 text-white/70" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed mt-3">{card.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        {displayCards.length > 0 && (
          <div className="block md:hidden relative group max-w-xl mx-auto">
            {/* Arrow Buttons */}
            <button 
              onClick={handlePrev}
              disabled={!isTransitioning}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors disabled:opacity-30"
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              onClick={handleNext}
              disabled={!isTransitioning}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-1 bg-white/10 backdrop-blur-md rounded-full w-9 h-9 flex items-center justify-center text-white/50 hover:text-white transition-colors disabled:opacity-30"
            >
              <ChevronRight size={24} />
            </button>

            <div className="relative overflow-hidden min-h-[240px]">
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
                {displayCards.map((card, idx) => (
                  <div key={idx} className="w-full flex-shrink-0 px-4 h-full flex flex-col justify-center">
                    <div className="h-[220px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between text-center relative overflow-hidden">
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.accent}`}></div>
                      <div className="flex flex-col items-center gap-3">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                          <card.icon className="w-6 h-6 text-white/70" />
                        </div>
                        <h3 className="text-lg font-semibold text-white leading-tight">{card.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">{card.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center items-center gap-2 mt-6">
              {[0, 1, 2].map((i) => (
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
        )}

      </div>
    </section>
  );
};

export default LearningGap;
