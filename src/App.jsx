import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="noise-bg min-h-screen bg-bg text-slate-200 relative">
      {/* Ambient background orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent opacity-[0.04] blur-[120px]" />
        <div className="absolute top-[40%] right-[-15%] w-[500px] h-[500px] rounded-full bg-violet-500 opacity-[0.04] blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[400px] h-[400px] rounded-full bg-accent opacity-[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
