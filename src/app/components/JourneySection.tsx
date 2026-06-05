import journeyImage from '../../imports/image-3.png';

export default function JourneySection() {
  const journeyItems = [
    {
      title: 'Internship — Samsung Electronics',
      description: 'First contact with tech industry: mobile phone troubleshooting and customer service. Discovered my passion for technology and its potential to help users.',
      period: 'Middle School',
      color: 'cyan',
    },
    {
      title: 'Baccalauréat — CNED',
      description: 'Obtained my high school diploma through CNED distance learning program with specialization NS and LLCER Anglais AMC (English and Contemporary World), developing autonomy and English language skills.',
      period: 'High School',
      color: 'purple',
    },
    {
      title: 'BUT Informatique — IUT d\'Orsay',
      description: 'Currently pursuing Bachelor in Computer Science. Learning algorithms, databases, software development, and working on various programming projects.',
      period: 'Current',
      color: 'pink',
    },
  ];

  return (
    <section id="journey" className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-background to-purple-950/10">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <span className="text-cyan-400 text-base">[02]</span>
          <h2 className="text-3xl md:text-4xl mt-4 text-white" style={{ lineHeight: '1.8' }}>Journey Log</h2>
        </div>

        <div className="space-y-8">
          {journeyItems.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-purple-500/30 pb-8 last:pb-0 hover:border-purple-500/60 transition-colors group"
            >
              <div
                className={`absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-${item.color}-500 to-purple-500 ring-4 ring-background`}
              />

              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg text-white group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm px-3 py-1.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-400 leading-relaxed text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
