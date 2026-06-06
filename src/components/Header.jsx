export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold gradient-text">Z3em</div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-blue-400 transition">About</a>
          <a href="#stack" className="text-slate-300 hover:text-blue-400 transition">Stack</a>
          <a href="#developer" className="text-slate-300 hover:text-blue-400 transition">Status</a>
          <a href="#contact" className="text-slate-300 hover:text-blue-400 transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
