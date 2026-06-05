import artImage from '../../imports/image-6.png';
import { Palette, Pen, Figma as FigmaIcon } from 'lucide-react';

export default function ArtSection() {
  const tools = [
    {
      name: 'Aseprite',
      description: 'Pixel art and sprite animation',
      icon: Palette,
      color: 'cyan',
    },
    {
      name: 'Clip Studio Paint',
      description: 'Digital illustration and comics',
      icon: Pen,
      color: 'purple',
    },
    {
      name: 'Figma',
      description: 'UI/UX design and prototyping',
      icon: FigmaIcon,
      color: 'pink',
    },
  ];

  return (
    <section id="art" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <span className="text-cyan-400 text-base">[05]</span>
          <h2 className="text-3xl md:text-4xl mt-4 text-white" style={{ lineHeight: '1.8' }}>Design & Art</h2>
        </div>

        <div className="space-y-8">
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Versatile across pixel art and modern interface design. Tools below are companions in every project.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-background p-6 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-${tool.color}-500/10 border border-${tool.color}-500/30 flex items-center justify-center group-hover:bg-${tool.color}-500/20 transition-colors`}>
                    <tool.icon className={`text-${tool.color}-400`} size={24} />
                  </div>

                  <div>
                    <h3 className="mb-3 text-white group-hover:text-pink-400 transition-colors text-base">
                      {tool.name}
                    </h3>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>

                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-${tool.color}-500/20 to-transparent blur-2xl -z-10 group-hover:w-32 group-hover:h-32 transition-all`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
