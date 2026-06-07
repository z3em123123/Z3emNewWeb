export default function About() {
  const highlights = [
    "React & TypeScript",
    "Node.js & Express",
    "PostgreSQL & Supabase",
    "Docker & DevOps",
    "REST APIs & WebSocket",
    "AWS & Cloud Services"
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">About</span>
          </div>
          <h2 className="text-5xl font-bold gradient-text">About Z3em</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6 text-slate-300 leading-relaxed animate-slideUp" style={{animationDelay: '0.1s'}}>
            <p className="text-lg">
              I'm a Full Stack Developer and Software Engineer dedicated to building modern, scalable digital solutions. I transform conceptual ideas into clean, efficient, and production-ready software with a strong emphasis on performance and user experience.
            </p>

            <p>
              I operate across the full technology stack — from crafting responsive, intuitive front-end interfaces to developing secure and robust back-end systems. My approach is straightforward: write clean code, build scalable systems, and deliver reliable results for real-world applications.
            </p>

            <p>
              I prioritize essential details — architecture, performance, and maintainability — while leveraging modern tools and methodologies. I excel at solving complex challenges and engineering products that are not only functional but also stable and dependable over time.
            </p>

            <div className="pt-4">
              <a href="#contact" className="button-primary">
                Let's Collaborate
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">10+</div>
                <div className="text-sm text-slate-400">Projects Delivered</div>
              </div>
              <div className="border-t border-slate-700"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">5+</div>
                <div className="text-sm text-slate-400">Years of Experience</div>
              </div>
              <div className="border-t border-slate-700"></div>
              <div>
                <div className="text-4xl font-bold gradient-text mb-1">100%</div>
                <div className="text-sm text-slate-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="animate-slideUp" style={{animationDelay: '0.3s'}}>
          <h3 className="text-xl font-bold mb-6 text-white">Core Expertise</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={item}
                className="glass-effect rounded-lg p-4 flex items-center gap-3 hover:bg-cyan-500/10 transition duration-300 animate-slideUp"
                style={{animationDelay: `${0.4 + idx * 0.05}s`}}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex-shrink-0"></div>
                <span className="text-sm font-medium text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
