import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Code2, Layout, Check } from 'lucide-react';

const UniversityRoles = () => {
  const roles = [
    {
      title: "College Admin / Faculty",
      icon: ShieldCheck,
      color: "text-blue-400",
      glowColor: "group-hover:shadow-blue-500/20",
      points: [
        "Add & invite students to the platform",
        "Monitor batch progress in real time",
        "Export reports for NAAC/NBA reviews",
        "View analytics: scores, completion, trends",
        "Reset or reassign student projects"
      ]
    },
    {
      title: "Senior Developer",
      icon: Code2,
      color: "text-emerald-400",
      glowColor: "group-hover:shadow-emerald-500/20",
      points: [
        "Review student sprint code submissions",
        "Approve or request changes per sprint",
        "Write structured feedback on code quality",
        "Evaluate architecture, standards, logic",
        "Gate access to next sprint until approved"
      ]
    },
    {
      title: "Product Owner",
      icon: Layout,
      color: "text-amber-400",
      glowColor: "group-hover:shadow-amber-500/20",
      points: [
        "Review PRD & HLD documentation",
        "Approve project scope before coding starts",
        "Check feasibility & requirement clarity",
        "Provide structured written feedback",
        "Gate sprint start until docs are approved"
      ]
    }
  ];

  // Slider State
  const [index, setIndex] = React.useState(1);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  const totalCards = roles.length;

  // Safe Loop Reset
  React.useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
    }
  }, [isTransitioning]);

  // Auto Slide
  React.useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
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

  // Touch Handlers
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

  const displayRoles = [roles[totalCards - 1], ...roles, roles[0]];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Three Roles. One Platform.
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Faculty, Senior Developers & Product Owners — all contribute to real student outcomes
          </p>
        </motion.div>

        {/* Desktop Layout (Static Grid) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-300 hover:border-blue-400/30 hover:shadow-2xl ${role.glowColor} group`}
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 ${role.color} group-hover:scale-110 transition-transform duration-500`}>
                <role.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 tracking-tight">{role.title}</h3>
              <ul className="space-y-4">
                {role.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 group/li">
                    <div className={`mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full ${role.color} group-hover/li:scale-150 transition-transform`}></div>
                    <span className="text-gray-300 text-sm leading-relaxed group-hover/li:text-white transition-colors">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile Layout (Slider) */}
        <div className="block md:hidden relative">
          <div className="relative overflow-hidden min-h-[340px]">
            <div
              className="flex"
              style={{
                transform: `translate3d(-${index * 100}%, 0, 0)`,
                transition: isTransitioning
                  ? "transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)"
                  : "none"
              }}
              onTransitionEnd={onTransitionEnd}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {displayRoles.map((role, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-[320px] flex flex-col justify-start gap-2 backdrop-blur-md relative overflow-hidden">
                    <div className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 ${role.color}`}>
                      <role.icon size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{role.title}</h3>
                    <ul className="text-gray-400 text-xs leading-snug space-y-2">
                      {role.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check size={12} className={`${role.color} mt-0.5 flex-shrink-0`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white text-sm disabled:opacity-30"
              onClick={handlePrev}
              disabled={!isTransitioning}
            >
              ←
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md rounded-full w-8 h-8 flex items-center justify-center text-white text-sm disabled:opacity-30"
              onClick={handleNext}
              disabled={!isTransitioning}
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {roles.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  ((index === i + 1) || (index === 0 && i === totalCards - 1) || (index === totalCards + 1 && i === 0))
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


export default UniversityRoles;
