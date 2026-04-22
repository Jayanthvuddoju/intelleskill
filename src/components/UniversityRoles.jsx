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

  return (
    <section className="py-24 px-6 relative">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
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
      </div>
    </section>
  );
};

export default UniversityRoles;
