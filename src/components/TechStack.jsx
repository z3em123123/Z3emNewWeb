export default function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend', icon: '⚛️' },
    { name: 'TypeScript', category: 'Language', icon: '📘' },
    { name: 'Tailwind CSS', category: 'Styling', icon: '🎨' },
    { name: 'Vite', category: 'Build', icon: '⚡' },
    { name: 'Node.js', category: 'Runtime', icon: '🟢' },
    { name: 'Express', category: 'Backend', icon: '🚀' },
    { name: 'PostgreSQL', category: 'Database', icon: '🐘' },
    { name: 'Supabase', category: 'Backend', icon: '🔐' },
    { name: 'REST APIs', category: 'Architecture', icon: '📡' },
    { name: 'WebSocket', category: 'Communication', icon: '🔗' },
    { name: 'Git & GitHub', category: 'Tools', icon: '🐙' },
    { name: 'Docker', category: 'DevOps', icon: '🐳' },
  ]

  const categories = ['Frontend', 'Backend', 'Database', 'DevOps', 'Tools']

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 animate-slideUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-5xl font-bold gradient-text mb-4">Tech Stack</h2>
          <p className="text-slate-400 max-w-2xl">
            A comprehensive collection of modern technologies and tools used to build scalable, secure, and high-performance solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="tech-card group cursor-pointer animate-slideUp"
              style={{animationDelay: `${idx * 0.05}s`}}
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                    {tech.category}
                  </div>
                  <div className="text-lg font-semibold text-white group-hover:gradient-text transition">
                    {tech.name}
                  </div>
                </div>
                <div className="text-2xl transform group-hover:scale-125 transition duration-300">
                  {tech.icon}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Categories breakdown */}
        <div className="mt-16 p-8 glass-effect rounded-2xl animate-slideUp" style={{animationDelay: '0.6s'}}>
          <h3 className="text-2xl font-bold mb-8 text-white">Technology Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((cat) => (
              <div key={cat} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                </div>
                <div className="font-semibold text-white">{cat}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
