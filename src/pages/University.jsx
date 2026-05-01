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

const University = () => {
  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
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
      <Footer />
    </main>
  );
};

export default University;
