import UniversityHero from '../components/UniversityHero';
import UniversityChallenge from '../components/UniversityChallenge';
import UniversitySolution from '../components/UniversitySolution';
import UniversityHumanReview from '../components/UniversityHumanReview';
import UniversityAIStep from '../components/UniversityAIStep';
import UniversityRoles from '../components/UniversityRoles';
import UniversityWhyCollege from '../components/UniversityWhyCollege';
import UniversityTimeline from '../components/UniversityTimeline';
import UniversityOutcomes from '../components/UniversityOutcomes';
import UniversityCertification from '../components/UniversityCertification';
import UniversityFinalCTA from '../components/UniversityFinalCTA';
import Footer from '../components/Footer';
import PremiumBackground from '../components/PremiumBackground';

const University = () => {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
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
        <UniversityCertification />
        <UniversityFinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default University;
