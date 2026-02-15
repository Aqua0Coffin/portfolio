/**
 * Projects Section
 * Features: Project cards with hover effects, filter by category (future), links
 * Mobile-first design
 */

const Projects = () => {
  // Placeholder project data - to be replaced with actual projects
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "A brief description of the project and its impact.",
      tags: ["React", "Node.js", "Tailwind"],
      liveUrl: "#",
      repoUrl: "#",
      image: null,
    },
    {
      id: 2,
      title: "Project Beta",
      description: "A brief description of the project and its impact.",
      tags: ["Next.js", "TypeScript", "Supabase"],
      liveUrl: "#",
      repoUrl: "#",
      image: null,
    },
    {
      id: 3,
      title: "Project Gamma",
      description: "A brief description of the project and its impact.",
      tags: ["Python", "FastAPI", "PostgreSQL"],
      liveUrl: "#",
      repoUrl: "#",
      image: null,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-16 md:px-8 lg:px-16 bg-[#12121a]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A showcase of our best work. Each project represents our commitment
            to quality and innovation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#0a0a0f] rounded-xl overflow-hidden border border-slate-800 hover:border-indigo-500/50 transition-all duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <span className="text-slate-600 text-sm">Project Preview</span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Live Demo →
                  </a>
                  <a
                    href={project.repoUrl}
                    className="text-sm text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
