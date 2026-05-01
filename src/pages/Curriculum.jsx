import Footer from '../components/Footer';
import CurriculumHero from '../components/CurriculumHero';
import CurriculumCourses from '../components/CurriculumCourses';
import CurriculumContent from '../components/CurriculumContent';

const Curriculum = () => {
  return (
    <main className="relative pt-24 pb-20 overflow-hidden">
      <CurriculumHero />
      <CurriculumCourses />
      <CurriculumContent />
      <Footer />
    </main>
  );
};

export default Curriculum;
