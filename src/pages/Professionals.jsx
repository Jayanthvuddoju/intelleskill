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

const Professionals = () => {
  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      <ProfessionalHero />
      <ProfessionalProblem />
      <ProfessionalShift />
      <ProfessionalValue />
      <ProfessionalTransformation />
      <ProfessionalHowItWorks />
      <UniversityCertification />
      <ProfessionalImpact />
      <ProfessionalCTA />
      <Footer />
    </main>
  );
};

export default Professionals;
