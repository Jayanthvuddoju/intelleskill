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

const Home = () => {
  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      <Hero />
      <LearningGap />
      <ProblemSolution />
      <HowItWorks />
      <Comparison />
      <WhatIsNot />
      <UniversityCertification />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
};

export default Home;
