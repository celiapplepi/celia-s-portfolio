import languagesImage from '../../imports/image-5.png';

export default function LanguagesSection() {
  const languages = [
    {
      name: 'English',
      native: 'English',
      level: 'Bilingual - C2',
      flag: '🇬🇧',
    },
    {
      name: '日本語',
      native: 'Japanese',
      level: 'N4 - Intermediate',
      flag: '🇯🇵',
    },
    {
      name: '한국어',
      native: 'Korean',
      level: 'Beginner+',
      flag: '🇰🇷',
    },
    {
      name: 'العربية',
      native: 'Arabic',
      level: 'Conversational',
      flag: '🇸🇦',
    },
  ];

  return (
    <section id="languages" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-pink-950/10">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <span className="text-cyan-400 text-base">[04]</span>
          <h2 className="text-3xl md:text-4xl mt-4 text-white" style={{ lineHeight: '1.8' }}>Languages</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-950/20 to-background p-8 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="text-center space-y-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {lang.flag}
                </div>
                <h3 className="text-xl text-white group-hover:text-pink-400 transition-colors" style={{ lineHeight: '1.6' }}>
                  {lang.name}
                </h3>
                <p className="text-base text-purple-300">{lang.native}</p>
                <p className="text-base text-gray-400">{lang.level}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
