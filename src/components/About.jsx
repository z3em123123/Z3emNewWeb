export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 gradient-text">About Me</h2>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            I'm a Full Stack Developer and Software Engineer focused on building modern, scalable web applications. I transform conceptual ideas into clean, efficient, and production-ready solutions with a strong emphasis on performance and user experience.
          </p>

          <p>
            I operate across the full technology stack — from crafting responsive, intuitive front-end interfaces to developing secure and robust back-end systems. My methodology is straightforward: write clean code, build scalable systems, and deliver reliable results for real-world applications.
          </p>

          <p>
            I prioritize essential details — architecture, performance, and maintainability — while leveraging modern tools and methodologies. I excel at solving complex challenges and engineering products that are not only functional but also stable and dependable over time.
          </p>

          <div className="pt-6 flex gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Node.js & Express</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>PostgreSQL & Supabase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
