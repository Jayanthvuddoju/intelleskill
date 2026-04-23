import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const UniversityOutcomes = () => {
  const metrics = [
    {
      value: "2x",
      label: "More real project experience per student",
      icon: TrendingUp,
      color: "text-blue-400"
    },
    {
      value: "87%",
      label: "Average student completion rate",
      icon: Users,
      color: "text-emerald-400"
    },
    {
      value: "3x",
      label: "Improvement in placement confidence",
      icon: BarChart3,
      color: "text-purple-400"
    },
    {
      value: "100%",
      label: "Students earn verified certificates",
      icon: Award,
      color: "text-amber-400"
    }
  ];

  const features = [
    "Students complete 2 real-world projects with multiple sprints",
    "AI evaluation is instant — no faculty delay",
    "Faculty effort reduced significantly vs manual review",
    "Real-time analytics for institutional visibility"
  ];

  const chartData = [
    { month: 'Start', value: 30, color: 'bg-blue-500/20' },
    { month: 'Month 1', value: 45, color: 'bg-blue-500/40' },
    { month: 'Month 2', value: 70, color: 'bg-blue-500/60' },
    { month: 'Graduation', value: 95, color: 'bg-blue-500' },
  ];

  return (
    <section className="py-24 px-6 relative bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Measurable Outcomes for Your Institution
          </h2>
        </motion.div>

        {/* Premium Glassmorphic Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
          {metrics.map((metric, index) => {
            const themes = [
              { glow: "bg-blue-500/30", text: "from-blue-400 to-cyan-300" },
              { glow: "bg-purple-500/30", text: "from-purple-400 to-pink-400" },
              { glow: "bg-orange-500/30", text: "from-orange-400 to-yellow-300" },
              { glow: "bg-green-500/30", text: "from-green-400 to-emerald-300" }
            ];
            const theme = themes[index % themes.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 md:p-8 text-left md:text-center transition-all duration-300 hover:border-white/20 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] group overflow-hidden cursor-default min-h-[100px] md:min-h-[auto]"
              >
                {/* Subtle Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-40 pointer-events-none"></div>

                {/* Colorful Accent Glow */}
                <div className={`absolute -top-10 -right-10 w-32 h-32 ${theme.glow} blur-2xl rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500`}></div>

                {/* Top Highlight Line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>

                {/* Metric Value */}
                <div 
                  className={`text-2xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r ${theme.text} bg-clip-text text-transparent mb-1 md:mb-2`}
                  style={{ textShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                >
                  {metric.value}
                </div>

                {/* Metric Label */}
                <p className="text-gray-300 text-[10px] sm:text-xs md:text-sm font-medium leading-tight md:leading-relaxed md:mt-4">
                  {metric.label}
                </p>
              </motion.div>
            );
          })}
        </div>


        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-24 items-center">
          {/* LEFT: Visual Chart Placeholder */}
          {/* LEFT: Placement Confidence Graph */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 relative overflow-hidden shadow-2xl"
          >
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg">Placement Confidence Growth</h3>
              <p className="text-gray-400 text-sm mt-1">Simulated improvement over a semester</p>
            </div>
            
            <div className="relative h-72 mt-4 mx-2">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-t border-white/10 h-0"></div>
                ))}
              </div>

              {/* Graph SVG */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 400 288" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Area Fill - Smooth Curve Updated Data */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  d="M 0 216 C 60 210, 100 180, 133 158 S 230 120, 266 106 S 350 70, 400 43 L 400 288 L 0 288 Z"
                  fill="url(#colorGradient)"
                />

                {/* Line Path - Smooth Curve Updated Data */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  d="M 0 216 C 60 210, 100 180, 133 158 S 230 120, 266 106 S 350 70, 400 43"
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="4"
                  strokeLinecap="round"
                  style={{ filter: 'drop-shadow(0 0 8px rgba(96,165,250,0.5))' }}
                />

                {/* Markers (Dots) - Updated Coordinates (25%, 45%, 63%, 85%) */}
                {[
                  { x: 0, y: 216, label: 'Start' },
                  { x: 133, y: 158, label: 'Month 1' },
                  { x: 266, y: 106, label: 'Month 2' },
                  { x: 400, y: 43, label: 'Graduation' }
                ].map((point, i) => (
                  <g key={i}>
                    <motion.circle
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.0 + i * 0.15 }}
                      cx={point.x}
                      cy={point.y}
                      r="5"
                      fill="#0b1220"
                      stroke="#60a5fa"
                      strokeWidth="2"
                      className="cursor-pointer hover:r-[7px] transition-all duration-200"
                    />
                  </g>
                ))}
              </svg>

              {/* X-Axis Labels */}
              <div className="absolute -bottom-8 w-full flex justify-between text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                <span>Start</span>
                <span>Month 1</span>
                <span>Month 2</span>
                <span className="text-blue-400 font-bold">Graduation</span>
              </div>
            </div>
            
            {/* Y-Axis Labels */}
            <div className="absolute left-1 top-24 flex flex-col justify-between h-[288px] text-[9px] text-gray-500 font-bold pointer-events-none">
              <span>100%</span>
              <span>75%</span>
              <span>50%</span>
              <span>25%</span>
              <span>0%</span>
            </div>
          </motion.div>

          {/* RIGHT: Feature Cards */}
          <div className="flex flex-col gap-6 mt-10 max-w-2xl border-l border-white/10 pl-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 group transition-all duration-200 hover:translate-x-1"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                  <CheckCircle2 size={20} />
                </div>
                <p className="text-lg text-gray-300 font-medium group-hover:text-white transition-colors">
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityOutcomes;
