import Navbar from '../components/Navbar';
import UniversityHero from '../components/UniversityHero';
import UniversityChallenge from '../components/UniversityChallenge';
import UniversitySolution from '../components/UniversitySolution';
import UniversityHumanReview from '../components/UniversityHumanReview';
import Footer from '../components/Footer';
import PremiumBackground from '../components/PremiumBackground';

const University = () => {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      <Navbar />
      <main>
        <UniversityHero />
        <UniversityChallenge />
        <UniversitySolution />
        <UniversityHumanReview />
        {/* Other university-specific sections can be added here later */}
      </main>
      <Footer />
    </div>
  );
};

export default University;
