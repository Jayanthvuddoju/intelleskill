import * as React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ProfessionalHowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Choose your goal",
      desc: "Switch roles, grow, or specialize",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "02",
      title: "Get a structured path",
      desc: "Aligned with real job expectations",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "03",
      title: "Build real projects",
      desc: "Based on actual industry use-cases",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "04",
      title: "Work in sprints",
      desc: "Simulating real team workflows",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "05",
      title: "Get reviewed",
      desc: "AI + expert feedback on your work",
      color: "from-blue-400 to-indigo-400"
    },
    {
      number: "06",
      title: "Prove your skills",
      desc: "Showcase projects and performance",
      color: "from-blue-400 to-indigo-400"
    }
  ];

  // Mobile State & Logic
  const [activeStep, setActiveStep] = React.useState(0);
  const intervalRef = React.useRef(null);

  const startAutoScroll = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
  }, [steps.length]);

  const stopAutoScroll = React.useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  React.useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    startAutoScroll();
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    startAutoScroll();
  };

  return (
    <section id="professional-how-it-works" className="py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            How it works
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A structured, industry-aligned path designed to take you from learning to performing.
          </p>
        </motion.div>

        {/* Desktop Layout: Static Vertical List */}
        <div className="hidden md:block relative">
          <div className="absolute left-[39px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-8 relative z-10"
              >
                <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-2xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                  {step.number}
                </div>
                <div className="py-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 font-medium">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout: Premium Auto-Scrolling Vertical Steps (No Boxes) */}
        <div 
          className="block md:hidden relative px-4 flex flex-col items-center"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          {/* Top Arrow */}
          <button 
            onClick={handlePrev}
            className="mb-2 w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors text-white z-10"
          >
            <ChevronUp size={20} />
          </button>

          {/* Steps Container */}
          <div className="relative h-[200px] w-full overflow-hidden">
            <div 
              className="transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-center"
              style={{ transform: `translateY(-${activeStep * 200}px)` }}
            >
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`h-[200px] w-full flex flex-col items-center text-center justify-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    activeStep === index ? "scale-100 opacity-100" : "scale-95 opacity-30"
                  }`}
                >
                  <div className={`flex-shrink-0 text-4xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                    {step.number}
                  </div>
                  <div className="px-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 font-medium leading-relaxed text-sm max-w-[280px]">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Down Arrow */}
          <button 
            onClick={handleNext}
            className="mt-2 w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors text-white z-10"
          >
            <ChevronDown size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHowItWorks;






