import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle2, ShieldCheck, Target, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    viewport: { once: true }
  };

  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      {/* HERO SECTION */}
      <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-8 tracking-wider uppercase"
        >
          <Zap className="w-3 h-3" />
          Our Vision
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-gradient-to-b from-white via-white to-white/60 bg-clip-text text-transparent"
        >
          Rethinking How <br className="hidden md:block" /> Skills Are Built
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light"
        >
          We believe real capability comes from doing — not just learning.
        </motion.p>
      </section>

      {/* SECTION 1: WHY WE EXIST */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Why We Exist</h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed">
              <p className="text-white font-medium">The traditional path to learning is broken.</p>
              <p>
                Students spend years gaining knowledge, yet struggle when faced with real-world expectations. 
                The gap isn't in effort — it's in exposure.
              </p>
              <p>We built IntelleSkill to change that.</p>
              <p className="text-blue-400 font-medium">
                Not by adding more content, but by changing how learning translates into real capability.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: OUR PHILOSOPHY */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Our Approach to Learning</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                "Skills are built through execution, not consumption",
                "Confidence comes from solving real problems",
                "Feedback should reflect real-world expectations",
                "Progress should be measurable, not assumed"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group"
                >
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0 group-hover:scale-110 transition-transform" />
                  <p className="text-slate-300 font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-slate-400 italic">
              IntelleSkill is designed around these principles — every step focuses on building real, usable capability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: WHAT WE FOCUS ON */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div {...staggerContainer} className="space-y-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What We Focus On</h2>
            <div className="space-y-8">
              {[
                { title: "Practical thinking over theoretical completion", icon: <Target className="w-5 h-5 text-indigo-400" /> },
                { title: "Real problem-solving over guided instructions", icon: <Zap className="w-5 h-5 text-amber-400" /> },
                { title: "Consistent progress over one-time output", icon: <ShieldCheck className="w-5 h-5 text-emerald-400" /> },
                { title: "Clarity in outcomes over vague learning", icon: <CheckCircle2 className="w-5 h-5 text-blue-400" /> }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={fadeIn}
                  className="flex items-center gap-6 pb-6 group"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-xl text-slate-300 group-hover:text-white transition-colors">{item.title}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4: BUILT FOR A NEW GENERATION */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div {...fadeIn} className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for a New Generation of Learners</h2>
            <div className="space-y-6 text-lg md:text-xl text-slate-400 leading-relaxed">
              <p>
                Today's learners don’t just need knowledge — they need direction, structure, and proof. 
                They need systems that reflect how real work happens.
              </p>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm mt-8">
                <p className="text-white text-2xl font-light leading-relaxed">
                  IntelleSkill is built for those who want more than completion — <br />
                  <span className="text-blue-400 font-semibold">those who want to be ready.</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5: TRUST & RELIABILITY */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeIn} className="space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
              Reliability at Scale
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Designed for Consistency and Scale</h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              Every part of the platform is built to deliver consistent outcomes — across different users, institutions, and learning paths.
            </p>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              From structured workflows to evaluation systems, everything is designed to be reliable, repeatable, and aligned with real-world expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: CLOSING */}
      <section className="px-6 py-32 text-center">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter">More Than Learning</h2>
          <div className="h-px w-24 bg-blue-500 mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-slate-400 mb-6">
            IntelleSkill is not just about gaining knowledge.
          </p>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            It’s about becoming capable.
          </p>
        </motion.div>
      </section>

      {/* CTA SECTION */}
      <section className="px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden group shadow-2xl shadow-blue-500/20"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20 group-hover:bg-white/20 transition-colors duration-700" />
          <div className="relative z-10 text-center space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Ready to transform how you build capability?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/students" 
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-white text-blue-700 font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
              >
                Explore Platform
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/contact" 
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-blue-900/30 text-white font-bold text-lg border border-white/20 hover:bg-blue-900/50 transition-all backdrop-blur-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
};

export default AboutUs;
