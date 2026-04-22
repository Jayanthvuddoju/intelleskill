import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PremiumBackground from '../components/PremiumBackground';
import ProfessionalHero from '../components/ProfessionalHero';
import ProfessionalProblem from '../components/ProfessionalProblem';
import ProfessionalShift from '../components/ProfessionalShift';
import ProfessionalValue from '../components/ProfessionalValue';
import ProfessionalTransformation from '../components/ProfessionalTransformation';
import ProfessionalHowItWorks from '../components/ProfessionalHowItWorks';
import ProfessionalImpact from '../components/ProfessionalImpact';
import ProfessionalCTA from '../components/ProfessionalCTA';

const Professionals = () => {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      <Navbar />
      <main>
        <ProfessionalHero />
        <ProfessionalProblem />
        <ProfessionalShift />
        <ProfessionalValue />
        <ProfessionalTransformation />
        <ProfessionalHowItWorks />
        <ProfessionalImpact />
        <ProfessionalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Professionals;
