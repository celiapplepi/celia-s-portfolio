import Header from './components/Header';
import AboutSection from './components/AboutSection';
import JourneySection from './components/JourneySection';
import ProjectsSection from './components/ProjectsSection';
import LanguagesSection from './components/LanguagesSection';
import ArtSection from './components/ArtSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="dark min-h-screen bg-gradient-to-b from-[#0a0118] via-[#150828] to-[#0a0118]">
      <div className="relative">
        {/* Ambient background effects */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10">
          <Header />

          <main>
            <AboutSection />
            <JourneySection />
            <ProjectsSection />
            <LanguagesSection />
            <ArtSection />
          </main>

          <Footer />
        </div>
      </div>
    </div>
  );
}