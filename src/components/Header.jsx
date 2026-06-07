import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-slate-900/50 backdrop-blur-xl border-b border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold gradient-text hover:opacity-80 transition">
          Z3em
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-300 hover:text-cyan-400 transition duration-200 font-medium">
            About
          </a>
          <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition duration-200 font-medium">
            Projects
          </a>
          <a href="#stack" className="text-slate-300 hover:text-cyan-400 transition duration-200 font-medium">
            Stack
          </a>
          <a href="#developer" className="text-slate-300 hover:text-cyan-400 transition duration-200 font-medium">
            Status
          </a>
          <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition duration-200 font-medium">
            Contact
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-slate-800 rounded-lg transition"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-900/95 backdrop-blur-xl">
          <nav className="flex flex-col gap-4 p-4">
            <a href="#about" className="text-slate-300 hover:text-cyan-400 transition py-2">About</a>
            <a href="#projects" className="text-slate-300 hover:text-cyan-400 transition py-2">Projects</a>
            <a href="#stack" className="text-slate-300 hover:text-cyan-400 transition py-2">Stack</a>
            <a href="#developer" className="text-slate-300 hover:text-cyan-400 transition py-2">Status</a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition py-2">Contact</a>
          </nav>
        </div>
      )}
    </header>
  )
}
