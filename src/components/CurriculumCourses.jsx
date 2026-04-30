import { motion } from 'framer-motion';
import { Shield, Brain, Clock, Globe, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Master AI and ML",
    description: "Master the fundamentals of AI and Machine Learning, covering algorithms, neural networks, and real-world applications.",
    level: "Advanced",
    duration: "12 weeks",
    mode: "Online",
    icon: Brain,
    color: "from-orange-500 to-rose-400",
    learning: [
      "Deep Learning",
      "Neural Networks",
      "NLP",
      "Computer Vision"
    ]
  },
  {
    id: 2,
    title: "Cybersecurity Guardian",
    description: "Become a guardian of digital assets. Learn network security, ethical hacking, and threat mitigation strategies.",
    level: "Intermediate",
    duration: "10 weeks",
    mode: "Hybrid",
    icon: Shield,
    color: "from-indigo-600 to-purple-500",
    learning: [
      "Network Security",
      "Ethical Hacking",
      "Cryptography",
      "Risk Assessment"
    ]
  }
];

const CurriculumCourses = () => {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Upskill with Our Courses</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">Build strong fundamentals with structured learning designed for real-world skills.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {courses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
              className="group relative"
            >
              {/* Subtle Gradient Glow - Positioned strictly behind the edges */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
              
              {/* Main Card */}
              <div className="relative h-full flex flex-col p-8 md:p-10 rounded-3xl bg-white/95 dark:bg-[#0a0f1e]/90 backdrop-blur-3xl border border-white/20 shadow-2xl overflow-hidden transition-all duration-500">
                {/* Border Highlight Effect */}
                <div className={`absolute inset-0 rounded-3xl border border-white/10 group-hover:border-indigo-500/30 transition-colors duration-500`} />
                
                {/* Top Section */}
                <div className="flex items-center justify-between mb-10 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${course.color} shadow-lg flex items-center justify-center`}>
                    <course.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20">
                    <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Main Content */}
                <div className="mb-10 relative z-10">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed line-clamp-3 font-medium">
                    {course.description}
                  </p>
                </div>

                {/* Info Row */}
                <div className="flex flex-wrap items-center gap-x-10 gap-y-4 mb-10 text-sm font-semibold relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">Duration:</span>
                    <span className="text-slate-800 dark:text-slate-200">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">Mode:</span>
                    <span className="text-slate-800 dark:text-slate-200">{course.mode}</span>
                  </div>
                </div>

                {/* Learning Section */}
                <div className="mt-auto relative z-10">
                  <h4 className="text-base font-bold text-slate-800 dark:text-white mb-4">
                    What you&apos;ll learn
                  </h4>
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {course.learning.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-900 dark:bg-indigo-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-12 relative z-10">
                  <a 
                    href="https://forms.office.com/pages/responsepage.aspx?id=tyjdRuz3r0e4Spk5XXjNRu6D1IpZpNpEhgSE6_5_gVZUMzBRUEJITVhLWFRXV0dNNUVPTFZMMEpFSyQlQCN0PWcu&origin=QRCode&route=shorturl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-orange-600 text-white text-center font-bold text-base hover:opacity-90 transition-all shadow-[0_10px_20px_-5px_rgba(255,255,255,0.1)] active:scale-[0.98] cursor-pointer"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurriculumCourses;
