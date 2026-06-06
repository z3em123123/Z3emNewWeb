import { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Developer from './components/Developer'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
      <Header />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Developer />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
