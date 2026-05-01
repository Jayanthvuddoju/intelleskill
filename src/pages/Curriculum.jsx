import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import DarkVeil from '../components/DarkVeil';
import CurriculumHero from '../components/CurriculumHero';
import CurriculumCourses from '../components/CurriculumCourses';
import CurriculumContent from '../components/CurriculumContent';

const Curriculum = () => {
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
          <CurriculumHero />
          <CurriculumCourses />
          <CurriculumContent />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Curriculum;
