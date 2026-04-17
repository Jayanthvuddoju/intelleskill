import React from 'react';
import { motion } from 'framer-motion';
import { FileX, Layers, Target } from 'lucide-react';

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

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Subtle Gradient Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-white/20 group-hover:shadow-xl flex flex-col items-center text-center">
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r ${card.accent}`}></div>

                {/* Icon */}
                <div className="mb-6 p-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-colors">
                  <card.icon className="w-8 h-8 text-white/70" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed mt-3">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningGap;
