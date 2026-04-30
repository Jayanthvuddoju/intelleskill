import { motion } from 'framer-motion';
import { 
  Cpu, 
  ShieldAlert, 
  BarChart3, 
  Database, 
  Sparkles,
  CreditCard,
  ShoppingCart,
  HeartPulse,
  Network,
  Car,
  Factory,
  GraduationCap,
  Zap,
  CheckCircle2
} from 'lucide-react';

import { useContactModal } from '../context/ContactModalContext';

const technologies = [
  {
    title: "AI/ML Engineer",
    desc: "Model training, MLOps, NLP, and Computer Vision",
    icon: Cpu,
    color: "text-blue-400",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    title: "Cybersecurity Engineer",
    desc: "Penetration testing, secure code review, and incident response",
    icon: ShieldAlert,
    color: "text-red-400",
    glow: "group-hover:shadow-red-500/20"
  },
  {
    title: "Data Scientist",
    desc: "Data cleaning, statistical modeling, and visualization",
    icon: BarChart3,
    color: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    title: "Backend Developer",
    desc: "REST APIs, database integration, and server optimization",
    icon: Database,
    color: "text-purple-400",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    title: "GenAI Developer",
    desc: "LLM integration, RAG pipelines, and prompt engineering",
    icon: Sparkles,
    color: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20"
  }
];

const domains = [
  { title: "FinTech", desc: "Financial technology, banking systems, and secure transactions", icon: CreditCard },
  { title: "E-commerce", desc: "Online retail, inventory management, and customer experience", icon: ShoppingCart },
  { title: "Healthcare", desc: "Medical data analysis, patient management, and health tech", icon: HeartPulse },
  { title: "Telecom", desc: "Network optimization, signal processing, and communication systems", icon: Network },
  { title: "Automotive", desc: "Autonomous driving, vehicle diagnostics, and smart transport", icon: Car },
  { title: "Manufacturing", desc: "Supply chain optimization, predictive maintenance, and IoT", icon: Factory },
  { title: "EdTech", desc: "Learning systems, student analytics, and gamification", icon: GraduationCap },
  { title: "Energy", desc: "Smart grid management, renewable tracking, and consumption analysis", icon: Zap }
];

const CurriculumContent = () => {
  const { openModal } = useContactModal();
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

  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 space-y-24 md:space-y-32">
      
      {/* SECTION 2: TECHNOLOGIES */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Learn Real-World Experience <br /> with Our Internships
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">Work on real projects, gain hands-on experience, and prove your skills with guided execution.</p>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {technologies.map((tech, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-xl sm:rounded-[2rem] group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 -z-10 opacity-50 group-hover:opacity-100"></div>
              <div className={`relative h-full bg-[#030712]/80 backdrop-blur-2xl p-4 sm:p-8 rounded-xl sm:rounded-[2rem] flex flex-col items-start transition-all duration-300 shadow-2xl ${tech.glow}`}>
                <div className="flex items-center gap-2 mb-4 sm:mb-6 w-full">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <tech.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${tech.color}`} />
                  </div>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {tech.title}
                </h3>
                <p className="text-slate-400 text-[10px] sm:text-sm leading-tight sm:leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 3: DOMAINS */}
      <section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Build Across Real-World Domains</h2>
          <p className="text-slate-400 text-lg">Apply your skills in different industries and use-cases</p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {domains.map((domain, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)]"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-xl sm:rounded-[2rem] group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500 -z-10 opacity-50 group-hover:opacity-100"></div>
              <div className="relative h-full bg-[#030712]/80 backdrop-blur-2xl p-4 sm:p-8 rounded-xl sm:rounded-[2rem] flex flex-col items-start transition-all duration-300 shadow-2xl group-hover:shadow-blue-500/20">
                 <div className="flex items-center gap-2 mb-4 sm:mb-6 w-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                    <domain.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                </div>
                <h3 className="text-sm sm:text-xl font-bold text-white mb-2 sm:mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                  {domain.title}
                </h3>
                <p className="text-slate-400 text-[10px] sm:text-sm leading-tight sm:leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                  {domain.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* SECTION 4: KEY VALUE */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center bg-white/5 border border-white/10 rounded-xl p-8 md:p-12 backdrop-blur-md relative overflow-hidden"
      >
        {/* Decorative Gradient Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-500/10 blur-[100px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">One Platform. Unlimited Combinations.</h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10">
            Every domain is available across every technology. <br />
            <span className="text-slate-400">You are not limited to one path — build diverse, real-world projects across industries using your chosen role.</span>
          </p>

          <button 
            onClick={() => openModal('Get Started')}
            className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:scale-105 cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </motion.section>

    </div>
  );
};

export default CurriculumContent;
