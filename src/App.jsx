import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import Developer from './components/Developer'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-slate-900">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Developer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
