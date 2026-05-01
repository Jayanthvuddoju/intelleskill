import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LearningGap from '../components/LearningGap';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import WhatIsNot from '../components/WhatIsNot';
import Testimonials from '../components/Testimonials';
import UniversityCertification from '../components/UniversityCertification';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ProblemSolution from '../components/ProblemSolution';
import DarkVeil from '../components/DarkVeil';

const Home = () => {
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
        <main>
          <Hero />
          <LearningGap />
          <ProblemSolution />
          <HowItWorks />
          <Comparison />
          <WhatIsNot />
          <UniversityCertification />
          <Testimonials />
          <CTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
