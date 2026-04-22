import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Custom Brand Icons as SVG components since lucide-react 1.8.0 omits brand icons
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

const TwitterIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'LinkedIn (US)', href: 'https://www.linkedin.com/company/intellesphere-llc', icon: LinkedinIcon },
    { name: 'LinkedIn (India)', href: 'https://www.linkedin.com/company/intellesphere-pvt-ltd', icon: LinkedinIcon },
    { name: 'Twitter (X)', href: 'https://x.com/intellesphere', icon: TwitterIcon },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61582114731128', icon: FacebookIcon },
    { name: 'Instagram', href: 'https://www.instagram.com/intellesphere', icon: InstagramIcon },
  ];

  const addresses = [
    {
      title: 'US Office',
      company: 'IntelleSphere LLC',
      line1: '2879, Grand Helios Way, Henderson,',
      line2: 'NV 89052, USA',
    },
    {
      title: 'India Office',
      company: 'IntelleSphere Pvt. Ltd.',
      line1: 'SVL Pride, HMDA Layout,',
      line2: 'Beside Mini Shilparamam,',
      line3: 'Hyderabad, 500039, India',
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-gray-400 py-16 px-6 overflow-hidden">
      {/* Premium Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Section: Logo & Tagline */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex flex-col gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-bold bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent"
              >
                IntelleSkill
              </motion.div>
              <p className="text-sm leading-relaxed max-w-xs transition-colors hover:text-gray-300">
                AI-powered products for real-world outcomes.
              </p>
            </div>
          </div>

          {/* Middle Section: Locations & Contact */}
          <div className="md:col-span-5 lg:col-span-6">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white font-semibold mb-8 tracking-wider text-sm uppercase"
            >
              Locations
            </motion.h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
              {addresses.map((addr, idx) => (
                <div key={idx} className="flex flex-col gap-3 group">
                  <span className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em]">{addr.title}</span>
                  <div className="text-sm leading-relaxed">
                    <p className="text-white/80 font-medium mb-1 group-hover:text-white transition-colors">{addr.company}</p>
                    <p className="group-hover:text-gray-300 transition-colors">{addr.line1}</p>
                    <p className="group-hover:text-gray-300 transition-colors">{addr.line2}</p>
                    {addr.line3 && <p className="group-hover:text-gray-300 transition-colors">{addr.line3}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-x-8 gap-y-4">
              <a href="tel:+17204145030" className="flex items-center gap-2 text-sm hover:text-white transition-all group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>US: +1 720-414-5030</span>
              </a>
              <a href="tel:+918374503904" className="flex items-center gap-2 text-sm hover:text-white transition-all group">
                <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                <span>IN: +91 8374503904</span>
              </a>
              <a href="mailto:upskill@intelle-sphere.com" className="flex items-center gap-2 text-sm hover:text-white transition-all group">
                <Mail className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" />
                <span>upskill@intelle-sphere.com</span>
              </a>
            </div>
          </div>

          {/* Right Section: Social Links */}
          <div className="md:col-span-3 lg:col-span-3">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-white font-semibold mb-8 tracking-wider text-sm uppercase"
            >
              Connect
            </motion.h3>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="flex items-center gap-3 text-sm hover:text-white transition-all group w-fit"
                  >
                    <link.icon className="w-4 h-4 text-gray-500 group-hover:text-blue-400 transition-colors" />
                    <span className="relative">
                      {link.name}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-400 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all text-gray-600" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {currentYear} IntelleSkill. All rights reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase font-bold tracking-widest text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

