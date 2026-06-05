import { Github, Mail } from 'lucide-react';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0118]/95 backdrop-blur-md border-b border-purple-500/20">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transform rotate-45">
            <span className="text-white font-bold transform -rotate-45">▲</span>
          </div>
          <span className="text-white font-bold tracking-wider text-xl" style={{ fontFamily: 'Press Start 2P, cursive' }}>CELIA</span>
        </div>

        <div className="hidden md:flex gap-8">
          <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
            About
          </button>
          <button onClick={() => scrollToSection('journey')} className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
            Journey
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
            Projects
          </button>
          <button onClick={() => scrollToSection('languages')} className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
            Languages
          </button>
          <button onClick={() => scrollToSection('art')} className="text-gray-300 hover:text-pink-400 transition-colors text-lg">
            Art
          </button>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 transition-colors">
            <Github size={20} />
          </a>
          <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-pink-400 transition-colors">
            <Mail size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
