export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 animate-slideUp">
          <div className="inline-block">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              alt="Developer"
              className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-slideUp" style={{animationDelay: '0.1s'}}>
          Building the future with Z3em
        </h1>

        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto animate-slideUp" style={{animationDelay: '0.2s'}}>
          Full Stack Developer & Software Engineer dedicated to turning complex ideas into high-performance, production-ready software.
        </p>

        <div className="flex gap-4 justify-center flex-wrap animate-slideUp" style={{animationDelay: '0.3s'}}>
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition transform hover:scale-105"
          >
            Get in Touch
          </a>
          <a
            href="#stack"
            className="px-8 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500/10 rounded-lg font-semibold transition"
          >
            View Stack
          </a>
        </div>
      </div>
    </section>
  )
}
