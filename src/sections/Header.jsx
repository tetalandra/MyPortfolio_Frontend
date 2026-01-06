import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.svg'

export default function Header() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = ['home', 'about', 'projects', 'services', 'contact']
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id)
        }
      })
    }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 })

    sections.forEach(s => observer.observe(s))
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  return (
    <header className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${scrolled ? 'bg-[rgba(11,15,20,0.85)] shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-white/20' : 'bg-[rgba(11,15,20,0.4)] border-white/10'}`}>
      <div className="container mx-auto max-w-[1200px] px-6 py-4 flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-4 no-underline text-[#e6edf3] hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <img src={Logo} alt="INEZA TETA Landra Logo" className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-[#7c5cff] rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>INEZA TETA Landra</span>
            <span className="text-xs text-[#7aa6ff] font-medium tracking-wider">Developer & Designer</span>
          </div>
        </a>
        <button
          aria-label="Toggle menu"
          className="md:hidden w-12 h-12 grid place-items-center rounded-xl border border-white/20 text-[#e6edf3] hover:bg-white/10 transition-all duration-300 hover:scale-105"
          onClick={() => setOpen(v => !v)}
        >
          <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${open ? 'rotate-45' : ''}`}>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'rotate-90 translate-y-0' : '-translate-y-1'}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${open ? '-rotate-90 -translate-y-0' : 'translate-y-1'}`}></span>
          </div>
        </button>
        <nav className="hidden md:flex items-center gap-1 text-[#a6b3c2]">
          {[
            ['home', 'Home'],
            ['about', 'About'],
            ['projects', 'Projects'],
            ['services', 'Services'],
            ['contact', 'Contact']
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={`relative px-4 py-3 rounded-xl transition-all duration-300 hover:text-[#e6edf3] hover:bg-[rgba(124,92,255,0.15)] hover:scale-105 ${active === id ? 'text-[#e6edf3] bg-[rgba(124,92,255,0.1)]' : ''}`}
            >
              {label}
              {active === id && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-[#7c5cff] rounded-full"></div>
              )}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/20">
            <a href="#contact" className="group relative bg-[#1e90ff] text-white font-semibold rounded-xl px-6 py-3 no-underline shadow-[0_8px_25px_rgba(30,144,255,0.3)] hover:shadow-[0_12px_35px_rgba(30,144,255,0.4)] transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-[#1e90ff] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </nav>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/20 bg-[rgba(11,15,20,0.95)] backdrop-blur-xl">
          <div className="max-w-[1200px] mx-auto px-6 py-4 space-y-2">
            {[
              ['home', 'Home'],
              ['about', 'About'],
              ['projects', 'Projects'],
              ['services', 'Services'],
              ['contact', 'Contact']
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-xl transition-all duration-300 hover:text-[#e6edf3] hover:bg-[rgba(124,92,255,0.15)] ${active === id ? 'text-[#e6edf3] bg-[rgba(124,92,255,0.1)]' : 'text-[#a6b3c2]'}`}
              >
                {label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/20">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-[#1e90ff] text-white font-semibold rounded-xl px-6 py-3 no-underline shadow-[0_8px_25px_rgba(30,144,255,0.3)] hover:shadow-[0_12px_35px_rgba(30,144,255,0.4)] transition-all duration-300"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}


