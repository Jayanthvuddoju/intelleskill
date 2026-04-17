const Testimonials = () => {
  return (
    <section className="py-24 text-center bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-tight">Loved by thousands</h2>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-8 italic text-slate-400 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
            "IntelleSkill transformed how I learn. I went from zero to junior dev in 3 months."
            <div className="mt-6 font-bold text-white not-italic">— Path {i} Graduate</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
