import projectsImage from '../../imports/image-4.png';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Nemoris - Travel Agency',
      description: 'A travel agency website built with HTML and CSS, featuring a modern design and responsive layout for browsing destinations and booking trips to Lemuria, an imaginary mystical underwater island.',
      tech: ['HTML', 'CSS', 'Web Design', 'University Project'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Space\'Venture',
      description: 'A 2D cosmic exploration game built in GameMaker. Navigate through space and discover new planets in this space adventure.',
      tech: ['GameMaker', 'Game Design', 'Work In Progress'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Firework Rush',
      description: 'A 24-hour game jam entry with a fast-paced clicker/runner mechanic. Make your way through the sky and avoid obstacles. Available on itch.io',
      tech: ['Game Jam', 'Unity', 'C#'],
      gradient: 'from-pink-500 to-orange-500',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container max-w-6xl">
        <div className="mb-12">
          <span className="text-cyan-400 text-base">[03]</span>
          <h2 className="text-3xl md:text-4xl mt-4 text-white" style={{ lineHeight: '1.8' }}>Project Gallery</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-background p-6 hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-white group-hover:text-pink-400 transition-colors text-base">
                    {project.title}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                </div>

                <p className="text-base text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm bg-purple-500/10 border border-purple-500/20 rounded text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
