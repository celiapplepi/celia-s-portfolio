import { Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-purple-500/20 py-12 px-6"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            <h3
              className="text-xl text-white"
              style={{ lineHeight: "1.6" }}
            >
              Let's Connect!
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Open to opportunities, collaborations, and
              interesting conversations about tech, art and
              games.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-pink-400 text-base">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:celia.o4@outlook.fr"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-base">
                  celia.o4@outlook.fr
                </span>
              </a>

              <a
                href="https://github.com/celiapplepi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-pink-400 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                  <Github size={18} />
                </div>
                <span className="text-base">
                  GitHub Profile
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/20 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2 text-base">
            Made by Celia
          </p>
          <p className="mt-2 text-sm">
            © 2026 - Cel's Portfolio - こんにちは、世界
          </p>
        </div>
      </div>
    </footer>
  );
}