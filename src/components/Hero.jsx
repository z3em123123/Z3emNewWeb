import { useState } from 'react'

export default function Hero() {
  const [scrolled, setScrolled] = useState(false)

  window.addEventListener('scroll', () => {
    setScrolled(window.scrollY > 50)
  })

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="animate-fadeIn">
            <div className="mb-8 animate-slideUp">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">Welcome</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-slideUp" style={{animationDelay: '0.1s'}}>
              Building the future with Z3em
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-slideUp" style={{animationDelay: '0.2s'}}>
              Full Stack Developer & Software Engineer dedicated to creating high-performance, production-ready digital solutions that drive real business impact.
            </p>

            <div className="flex gap-4 flex-wrap animate-slideUp" style={{animationDelay: '0.3s'}}>
              <a href="#contact" className="button-primary">
                Get in Touch
              </a>
              <a href="#projects" className="button-secondary">
                View Projects
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-700/50 flex gap-8 animate-slideUp" style={{animationDelay: '0.4s'}}>
              <div>
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-sm text-slate-400 mt-1">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-sm text-slate-400 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-sm text-slate-400 mt-1">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right side - Profile */}
          <div className="relative h-full min-h-96 flex items-center justify-center animate-fadeIn" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl"></div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-30 animate-glow"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 glass-dark">
                <img
                  src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop"
                  alt="Z3em Developer"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute bottom-4 right-4 bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold text-sm shadow-lg">
                  Currently Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
