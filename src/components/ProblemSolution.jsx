import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Terminal, 
  Users, 
  Award,
  AlertTriangle,
  CheckCircle2
} from 'lucide-react';

const ProblemSolution = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const stats = [
    { 
      value: "72%", 
      label: "graduates lack real practical experience", 
      color: "border-red-500", 
      glow: "shadow-red-100",
      iconColor: "text-red-500"
    },
    { 
      value: "<5%", 
      label: "students get quality internships", 
      color: "border-amber-500", 
      glow: "shadow-amber-100",
      iconColor: "text-amber-500"
    },
    { 
      value: "3 Yrs", 
      label: "average time to become employable", 
      color: "border-purple-500", 
      glow: "shadow-purple-100",
      iconColor: "text-purple-500"
    }
  ];

  const features = [
    {
      title: "AI Project Generation",
      desc: "real industry use-cases",
      icon: Sparkles
    },
    {
      title: "In-Browser Execution",
      desc: "write/run code",
      icon: Terminal
    },
    {
      title: "Human Sprint Review",
      desc: "reviewed by senior devs",
      icon: Users
    },
    {
      title: "Verified Certificate",
      desc: "tamper-proof + URL",
      icon: Award
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        {/* Section 1: Crisis Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
          >
            Engineering Colleges Face a <br />
            <span className="text-red-500">Growing Skills Crisis.</span>
          </motion.h2>
        </div>

        {/* Section 2: Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl border ${stat.color.replace('border-', 'border-')}/30 bg-white/5 backdrop-blur-md shadow-2xl shadow-black/20 text-center relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <span className={`block text-5xl font-black mb-4 ${stat.iconColor}`}>
                  {stat.value}
                </span>
                <p className="text-slate-400 font-medium leading-relaxed">
                  {stat.label}
                </p>
              </div>
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity text-white`}>
                <AlertTriangle size={80} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Transition */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-24"
        >
          <div className="inline-block px-8 py-4 rounded-2xl bg-white text-slate-950 text-2xl md:text-3xl font-bold shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            IntelleSkill solves all three.
          </div>
        </motion.div>

        {/* Section 4: Solution Heading */}
        <div className="text-center mb-16">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6"
          >
            <CheckCircle2 size={16} />
            THE SOLUTION
          </motion.div>
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            A complete virtual internship platform — <span className="text-blue-400">AI-powered</span>, human-reviewed, certificate-verified.
          </motion.h3>
        </div>

        {/* Section 5: Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="p-3 md:p-6 rounded-xl md:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all group flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center mb-2 md:mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <feature.icon size={16} className="text-white md:hidden" />
                <feature.icon size={24} className="text-white hidden md:block" />
              </div>
              <h4 className="text-white font-medium md:font-bold text-xs md:text-base mb-1 md:mb-2 leading-tight">
                {feature.title}
              </h4>
              <p className="text-slate-400 text-[10px] md:text-sm font-medium leading-tight">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSolution;
