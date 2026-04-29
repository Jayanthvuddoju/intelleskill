import React from 'react';
import SegmentedToggle from '../components/SegmentedToggle';

const ToggleDemo = () => {
  const [activeTab, setActiveTab] = React.useState("students");

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center p-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Premium Toggle UI
        </h1>
        <p className="text-white/50 max-w-md mx-auto">
          Experience the Apple-inspired liquid glass segmented control. 
          Smooth, responsive, and tactile.
        </p>
      </div>

      <div className="p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-3xl shadow-2xl">
        <SegmentedToggle 
          activeTab={activeTab} 
          onChange={(val) => setActiveTab(val)} 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
        {['Students', 'Professionals', 'Institutions'].map((item) => (
          <div key={item} className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 flex flex-col items-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold">
              {item[0]}
            </div>
            <h3 className="text-white font-medium">{item}</h3>
            <p className="text-xs text-white/40 text-center">
              Tailored experience for {item.toLowerCase()}.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToggleDemo;
