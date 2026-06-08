import projectsImage from '../../imports/image-4.png';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'Nemoris - Travel Agency',
      description: 'A travel agency website built with HTML and CSS, featuring a modern design and responsive layout for browsing destinations and booking trips to Lemuria, an imaginary mystical underwater island.',
      tech: ['HTML', 'CSS', 'Web Design', 'University Project'],
      gradient: 'from-blue-500 to-cyan-500',
      image:'/src/imports/nemoris-logo',
    },
    {
      title: 'Space\'Venture',
      description: 'A 2D cosmic exploration game built in GameMaker. Navigate through space and discover new planets in this space adventure.',
      tech: ['GameMaker', 'Game Design', 'Work In Progress'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1457365050282-c53d772ef8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzcGFjZSUyMGdhbWUlMjByb2NrZXQlMjBzdGFyc3xlbnwxfHx8fDE3ODA5MDMyODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Firework Rush',
      description: 'A 24-hour game jam entry with a fast-paced clicker/runner mechanic. Make your way through the sky and avoid obstacles. Available on itch.io',
      tech: ['Game Jam', 'Unity', 'C#'],
      gradient: 'from-pink-500 to-orange-500',
      image: 'https://images.unsplash.com/photo-1543718290-a207a786243a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxmaXJld29ya3MlMjBuaWdodCUyMGNlbGVicmF0aW9uJTIwY29sb3JmdWx8ZW58MXx8fHwxNzgwOTAzMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
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
              className="group relative overflow-hidden rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-950/40 to-background hover:border-purple-500/60 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity z-10`} />

              {/* Project image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.backgroundColor = '#4c1d95';
                  }}
                />
                {/* Dark overlay for readability */}
                <div className={`absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent`} />
                {/* Colored tint on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-white group-hover:text-pink-400 transition-colors text-base">
                    {project.title}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse flex-shrink-0 mt-1" />
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
