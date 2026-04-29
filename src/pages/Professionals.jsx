import Footer from '../components/Footer';
import ProfessionalHero from '../components/ProfessionalHero';
import ProfessionalProblem from '../components/ProfessionalProblem';
import ProfessionalShift from '../components/ProfessionalShift';
import ProfessionalValue from '../components/ProfessionalValue';
import ProfessionalTransformation from '../components/ProfessionalTransformation';
import ProfessionalHowItWorks from '../components/ProfessionalHowItWorks';
import ProfessionalImpact from '../components/ProfessionalImpact';
import ProfessionalCTA from '../components/ProfessionalCTA';
import UniversityCertification from '../components/UniversityCertification';
import DarkVeil from '../components/DarkVeil';

const Professionals = () => {
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
          <ProfessionalHero />
          <ProfessionalProblem />
          <ProfessionalShift />
          <ProfessionalValue />
          <ProfessionalTransformation />
          <ProfessionalHowItWorks />
          <UniversityCertification />
          <ProfessionalImpact />
          <ProfessionalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Professionals;
