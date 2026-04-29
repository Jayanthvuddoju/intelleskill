import React from 'react';
import { useContactModal } from '../context/ContactModalContext';

const CTA = () => {
  const { openModal } = useContactModal();
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-5xl mx-auto px-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-16 text-center text-white shadow-2xl relative overflow-hidden group">
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 tracking-tight">Ready to accelerate your career?</h2>
          <button 
            onClick={() => openModal('Claim Your Discount')}
            className="bg-blue-600 text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-blue-500 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.4)] cursor-pointer"
          >
            Claim Your Discount
          </button>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[100px] group-hover:bg-blue-500/20 transition-all duration-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] group-hover:bg-indigo-500/20 transition-all duration-700"></div>
      </div>
    </section>
  );
};

export default CTA;
