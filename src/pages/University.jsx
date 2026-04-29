import UniversityHero from '../components/UniversityHero';
import UniversityChallenge from '../components/UniversityChallenge';
import UniversitySolution from '../components/UniversitySolution';
import UniversityHumanReview from '../components/UniversityHumanReview';
import UniversityAIStep from '../components/UniversityAIStep';
import UniversityRoles from '../components/UniversityRoles';
import UniversityWhyCollege from '../components/UniversityWhyCollege';
import UniversityTimeline from '../components/UniversityTimeline';
import UniversityOutcomes from '../components/UniversityOutcomes';

import UniversityFinalCTA from '../components/UniversityFinalCTA';
import Footer from '../components/Footer';
import DarkVeil from '../components/DarkVeil';

const University = () => {
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
          <UniversityHero />
          <UniversityChallenge />
          <UniversitySolution />
          <UniversityHumanReview />
          <UniversityAIStep />
          <UniversityRoles />
          <UniversityWhyCollege />
          <UniversityTimeline />
          <UniversityOutcomes />

          <UniversityFinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default University;
