import './index.css'
import { useEffect, useState } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Experience from './sections/Experience'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  return (
    <div className="min-h-full" style={{
      color: '#e6edf3', background:
        'radial-gradient(1200px 800px at 80% -10%, rgba(124, 92, 255, 0.18), transparent 60%), ' +
        'radial-gradient(1000px 700px at 10% -20%, rgba(0, 194, 255, 0.18), transparent 55%), ' +
        '#0b0f14'
    }}>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
