import React from 'react';
import { motion } from 'framer-motion';

const SegmentedToggle = ({ activeTab, onChange }) => {
  const tabs = [
    { id: "students", label: "Students" },
    { id: "professionals", label: "Professionals" },
    { id: "universities", label: "Institutions" }
  ];

  const active = activeTab || "students";

  const handleToggle = (id) => {
    if (onChange) onChange(id);
  };

  return (
    <div className="
      relative 
      flex items-center 
      rounded-full 
      p-1 
      bg-white/1
      backdrop-blur-2xl 
      border border-white/20 
      shadow-[0_10px_40px_rgba(0,0,0,0.25),0_0_20px_rgba(255,255,255,0.1)]
      overflow-hidden
      w-fit
      mx-auto
    ">
      {/* GLASS LAYER: Inner Glow */}
      <div className="
        absolute inset-0
        rounded-full
        bg-gradient-to-br
        from-white/20 via-white/10 to-transparent
        opacity-60
        pointer-events-none
      "/>

      {/* LIQUID REFLECTION: Top Highlight */}
      <div className="
        absolute top-0 left-0 right-0 h-1/2
        bg-gradient-to-b from-white/5 to-transparent
        rounded-full
        opacity-40
        pointer-events-none
      "/>

      {tabs.map((tab) => (
        <motion.button
          key={tab.id}
          onClick={() => handleToggle(tab.id)}
          whileTap={{ scale: 0.94 }}
          className={`
            relative z-10
            px-4 md:px-6
            py-2
            text-xs md:text-sm
            rounded-full
            transition-all 
            duration-300
            outline-none
            tracking-tight
            ${active === tab.id ? 'text-white font-medium' : 'text-white/60 hover:text-white'}
          `}
        >
          <span className="relative z-20">{tab.label}</span>

          {active === tab.id && (
            <motion.div
              layoutId="active-pill"
              className="
                absolute
                inset-0
                rounded-full
                bg-white/1
                backdrop-blur-xl
                border border-white/1
                shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),0_4px_20px_rgba(0,0,0,0.2)]
              "
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default SegmentedToggle;
