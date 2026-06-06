export default function TechStack() {
  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Vite', category: 'Build' },
    { name: 'Node.js', category: 'Runtime' },
    { name: 'Express', category: 'Backend' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Supabase', category: 'Backend' },
    { name: 'REST APIs', category: 'Architecture' },
    { name: 'WebSocket', category: 'Communication' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'Docker', category: 'DevOps' },
  ]

  return (
    <section id="stack" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-card group cursor-pointer"
            >
              <div className="text-sm text-blue-400 font-semibold mb-2">{tech.category}</div>
              <div className="text-lg font-semibold group-hover:text-blue-300 transition">
                {tech.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
