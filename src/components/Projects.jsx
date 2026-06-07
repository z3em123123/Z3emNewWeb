export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Cho3la Studio Platform",
      description: "Professional software services platform showcasing cutting-edge design and high-performance engineering",
      image: "https://images.pexels.com/photos/1329877/pexels-photo-1329877.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Application Website",
      description: "Fully-featured web application with clean UI design, responsive layout, and seamless performance across all devices",
      image: "https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      tags: ["React", "CSS", "Web Design", "UX"],
      link: "#",
      featured: true
    },
    {
      id: 3,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, user authentication, and inventory management",
      image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      tags: ["Node.js", "PostgreSQL", "Stripe", "React"],
      link: "#"
    },
    {
      id: 4,
      title: "Real-Time Dashboard",
      description: "Analytics dashboard with live data updates, interactive charts, and comprehensive metrics visualization",
      image: "https://images.pexels.com/photos/5632635/pexels-photo-5632635.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
      tags: ["React", "WebSocket", "D3.js", "Node.js"],
      link: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Portfolio</span>
          </div>
          <h2 className="text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            Showcasing a curated selection of professional projects built with modern technologies and best practices
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.filter(p => p.featured).map((project, idx) => (
            <a
              key={project.id}
              href={project.link}
              className="project-card animate-slideUp"
              style={{animationDelay: `${idx * 0.1}s`}}
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:gradient-text transition">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition-all">
                  <span>View Project</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-6 text-white">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, idx) => (
              <a
                key={project.id}
                href={project.link}
                className="project-card group p-6 animate-slideUp"
                style={{animationDelay: `${(idx + 2) * 0.1}s`}}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-24 h-24 object-cover rounded-lg shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white group-hover:gradient-text transition mb-1">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-300 rounded border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
