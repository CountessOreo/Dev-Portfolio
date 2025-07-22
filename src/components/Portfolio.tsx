import Navigation from './Navigation';
import HeroSection from './sections/HeroSection.tsx';
import AboutSection from './sections/AboutSection.tsx';
import ProjectsSection from './sections/ProjectsSection.tsx';
import ContactSection from './sections/ContactSection.tsx';
import FooterSection from './sections/FooterSection.tsx';
import CertificateSection from './sections/CertificateSection.tsx';

const Portfolio = () => {
  return (
    <div className="relative">
      <div className="opacity-100 transition-opacity duration-500">
        <Navigation />
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <CertificateSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
};

export default Portfolio;
