import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail, Phone, Clock } from 'lucide-react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useContactModal } from '../context/ContactModalContext';
import DarkVeil from '../components/DarkVeil';

// Custom Brand Icons as SVG components
const FacebookIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const XIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const socialLinks = [
  { 
    name: 'LinkedIn India', 
    href: 'https://www.linkedin.com/company/intellesphere-pvt-ltd', 
    icon: LinkedinIcon,
    label: '.in',
    tooltip: 'Follow company updates',
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]'
  },
  { 
    name: 'LinkedIn US', 
    href: 'https://www.linkedin.com/company/intellesphere-llc', 
    icon: LinkedinIcon,
    label: '.us',
    tooltip: 'Follow company updates',
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(0,119,181,0.5)]'
  },
  { 
    name: 'Facebook', 
    href: 'https://www.facebook.com/profile.php?id=61582114731128', 
    icon: FacebookIcon,
    tooltip: 'Community updates',
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(24,119,242,0.5)]'
  },
  { 
    name: 'Instagram', 
    href: 'https://www.instagram.com/intellesphere', 
    icon: InstagramIcon,
    tooltip: 'See our journey',
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(225,48,108,0.5)]'
  },
  { 
    name: 'X (Twitter)', 
    href: 'https://x.com/intellesphere', 
    icon: XIcon,
    tooltip: 'Latest insights',
    glowColor: 'group-hover:shadow-[0_0_20px_rgba(29,161,242,0.5)]'
  },
];

const Contact = () => {
  const { openModal } = useContactModal();

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-slate-200 selection:bg-blue-500/30">
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={1.3}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1.25}
        />
      </div>

      {/* OPTIONAL OVERLAY */}
      <div className="fixed inset-0 z-0 bg-black/40 backdrop-blur-[1px] pointer-events-none" />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
              >
                Let’s Build Future-Ready <br className="hidden md:block" /> Careers Together
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
              >
                Whether you're a student, professional, or institution — we’re here to help you get started.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Side — Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-10"
              >
                <div>
                  <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-all">
                        <Globe className="w-5 h-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-1">Website</p>
                        <a href="https://www.intelle-sphere.com" target="_blank" rel="noopener noreferrer" className="text-slate-200 hover:text-blue-400 transition-colors">
                          www.intelle-sphere.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20 group-hover:bg-purple-500/20 transition-all">
                        <Mail className="w-5 h-5 text-purple-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-1">Email</p>
                        <a href="mailto:upskill@intelle-sphere.com" className="text-slate-200 hover:text-purple-400 transition-colors">
                          upskill@intelle-sphere.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all">
                        <Phone className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-1">Phone</p>
                        <div className="flex flex-col gap-4">
                          <div className="flex flex-col gap-2">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 w-fit">India</span>
                            <div className="flex flex-col gap-1.5 pl-1">
                              <a href="tel:+918374503904" className="text-slate-200 hover:text-emerald-400 transition-colors tracking-wide text-sm font-medium">+91 8374503904</a>
                              <a href="tel:+917893307400" className="text-slate-200 hover:text-emerald-400 transition-colors tracking-wide text-sm font-medium">+91 7893307400</a>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 pt-3 border-t border-white/5">
                            <span className="text-[10px] font-bold text-sky-400 uppercase tracking-wider bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 w-fit">US</span>
                            <div className="pl-1">
                              <a href="tel:+17204145030" className="text-slate-200 hover:text-sky-400 transition-colors tracking-wide text-sm font-medium">+1 720-414-5030</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20 group-hover:bg-orange-500/20 transition-all">
                        <Clock className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-1">Availability</p>
                        <p className="text-slate-200 tracking-wide">
                          Monday to Friday — 9 AM to 7 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Section */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">Connect</h3>
                  <div className="flex flex-wrap gap-6">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className={`group relative w-11 h-11 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all duration-300 ${social.glowColor}`}
                      >
                        <social.icon size={20} />
                        
                        {/* Region Label (.in / .us) */}
                        {social.label && (
                          <span className="absolute -bottom-1 -right-1 bg-blue-600 text-[8px] font-bold px-1 rounded-sm border border-white/10 text-white">
                            {social.label}
                          </span>
                        )}

                        {/* Tooltip */}
                        <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900 border border-white/10 rounded-md text-[10px] font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                          {social.tooltip}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Right Side — Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ContactForm />
              </motion.div>
            </div>

            {/* CTA Section (Bottom) */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-32 relative text-center"
            >
               <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-12 md:p-20 overflow-hidden group">
                  {/* Background animations for CTA */}
                  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>

                  <div className="relative z-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Ready to See It in Action?</h2>
                    <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                      Schedule a quick demo and explore how IntelleSkill works.
                    </p>
                    <button 
                      onClick={() => openModal('Book a Free Demo')}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:scale-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] cursor-pointer"
                    >
                      Book a Free Demo
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Contact;
