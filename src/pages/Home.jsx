import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import LearningGap from '../components/LearningGap';
import HowItWorks from '../components/HowItWorks';
import Comparison from '../components/Comparison';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import ProblemSolution from '../components/ProblemSolution';
import PremiumBackground from '../components/PremiumBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <PremiumBackground />
      <Navbar />
      <main>
        <Hero />
        <LearningGap />
        <ProblemSolution />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
