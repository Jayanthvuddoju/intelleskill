import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Training models is one thing — applying them to real problems is another. IntelleSkill made me do both.",
      author: "AI/ML Graduate"
    },
    {
      quote: "Every task felt like a real security challenge. I learned how to identify, analyze, and respond — not just memorize.",
      author: "Cyber Security Graduate"
    },
    {
      quote: "From raw data to insights — I finally understood the complete pipeline through real projects.",
      author: "Data Science Graduate"
    }
  ];

  // For premium infinite loop: [Clone of 3, Card 1, Card 2, Card 3, Clone of 1]
  const totalCards = testimonials.length;
  const displayTestimonials = totalCards > 0 ? [testimonials[totalCards - 1], ...testimonials, testimonials[0]] : [];
  
  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Re-enable transition safely
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
    if (!isTransitioning) return;
    if (index >= totalCards + 1) return;
    
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (!isTransitioning) return;
    if (index <= 0) return;
    
    setIsTransitioning(true);
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
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) handleNext();
    if (isRightSwipe) handlePrev();

    setTouchStart(0);
    setTouchEnd(0);
  };

  const getActiveDot = () => {
    if (index === 0) return totalCards - 1;
    if (index === totalCards + 1) return 0;
    return index - 1;
  };

  return (
    <section className="py-24 text-center bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">What Our Learners Say</h2>
        
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="relative p-8 italic text-slate-400 bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col justify-between"
            >
              <div className="text-lg leading-relaxed mb-6">
                "{t.quote}"
              </div>
              <div className="font-bold text-white not-italic mt-auto">
                — {t.author}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
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
              {displayTestimonials.map((t, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4 h-full flex flex-col justify-center">
                  <div className="h-[220px] bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex flex-col justify-between text-left italic">
                    <div className="text-base leading-relaxed line-clamp-3 text-slate-400">
                      "{t.quote}"
                    </div>
                    <div className="font-bold text-white not-italic mt-auto">
                      — {t.author}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, i) => (
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

export default Testimonials;

