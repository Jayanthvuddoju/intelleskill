const Footer = () => {
  return (
    <footer className="bg-transparent border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2 md:col-span-1">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">IntelleSkill</span>
            <p className="mt-6 text-slate-400 text-sm leading-relaxed font-medium">
              Empowering the next generation with modern skills and intelligent learning.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Product</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Features</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">About</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6">Legal</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Privacy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-medium">
          <p>© 2026 IntelleSkill Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
