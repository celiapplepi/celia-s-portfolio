import aboutImage from "../../imports/image-2.png";

export default function AboutSection() {
  const skills = [
    { name: "SQL/PLSQL", level: 15 },
    { name: "C++", level: 25 },
    { name: "Python", level: 30 },
    { name: "Java", level: 30 },
    { name: "C#", level: 40 },
    { name: "HTML/CSS", level: 40 },
  ];

  const secondarySkills = [
    { name: "Teamwork", level: 50 },
    { name: "Adaptability", level: 50 },
    { name: "Communication", level: 50 },
    { name: "Critical thinking", level: 70 },
    { name: "Perfectionnism", level: 70 },
  ];

  const interests = [
    "Digital Art",
    "Video games",
    "Philosophy",
    "Riddles and enigmas",
    "Jellyfish",
    "Languages & cultures",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-6"
    >
      <div className="container max-w-6xl">
        <div className="mb-12">
          <span className="text-cyan-400 text-base">[01]</span>
          <h2
            className="text-3xl md:text-4xl mt-4 text-white"
            style={{ lineHeight: "1.8" }}
          >
            About me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xl text-gray-300 leading-relaxed">
                I'm a curious, creative and passionate
                developer.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Combining technical rigor with artistic
                creativity, I build experiences that merge code
                and design. Whether developing games, web
                applications, or crafting pixel art, I approach
                each project with dedication and attention to
                detail.
              </p>
            </div>

            <div>
              <h3 className="text-pink-400 mb-4 text-lg">
                [&gt;] Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-2 bg-purple-500/10 border border-purple-500/30 rounded text-base text-purple-300 hover:bg-purple-500/20 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-pink-400 mb-4 text-lg">
                [&gt;] Tech Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-base">
                      <span className="text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="h-2 bg-purple-950/40 rounded-full overflow-hidden border border-purple-500/20">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-pink-400 mb-4 text-lg">
              [&gt;] Design & Development Skills
            </h3>
            <div className="space-y-3 mb-8">
              {secondarySkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-base">
                    <span className="text-gray-300">
                      {skill.name}
                    </span>
                    <span className="text-cyan-400">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-2 bg-purple-950/40 rounded-full overflow-hidden border border-purple-500/20">
                    <div
                      className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 border border-purple-500/30 rounded-lg bg-purple-500/5">
              <h4 className="text-pink-400 mb-3 text-base">
                Additional Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm">
                  Unity
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm">
                  Unreal Engine
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm">
                  SQL
                </span>
                <span className="px-3 py-1.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-sm">
                  HTML/CSS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}