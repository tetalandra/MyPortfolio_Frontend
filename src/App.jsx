import './index.css'
import { useEffect, useRef, useState } from 'react'
import Logo from './assets/logo.svg'
import Services from './sections/Services'

// Icon component for clean SVG icons
function Icon({ name, className = "w-6 h-6" }) {
  const icons = {
    design: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
      </svg>
    ),
    ux: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    system: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    code: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    project: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    email: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    location: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    time: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    linkedin: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    github: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    twitter: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    dribbble: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.392-6.87zm-6.115 7.808c-.051-.523-1.024-3.834-2.34-7.293C7.844 7.43 2.64 8.816 2.64 8.816c.49 3.939 2.006 7.35 4.393 9.604 1.872-1.108 3.34-2.64 4.252-4.47zm-11.864-9.52c.05.05 4.944 1.146 8.684-.638-1.508-2.67-3.174-4.95-3.174-4.95-3.8 1.427-5.51 5.588-5.51 5.588zm5.51 5.588c.05.05 4.944 1.146 8.684-.638-1.508-2.67-3.174-4.95-3.174-4.95-3.8 1.427-5.51 5.588-5.51 5.588z" />
      </svg>
    )
  }

  return icons[name] || null
}

function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto max-w-[1200px] px-6">
        {eyebrow && <div className="text-sm tracking-[0.2em] text-[#7aa6ff] mb-4 font-medium animate-fade-up">{eyebrow}</div>}
        {title && <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 text-white animate-fade-up" style={{ fontFamily: 'var(--font-heading)', animationDelay: '0.2s' }}>{title}</h2>}
        <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
          {children}
        </div>
      </div>
    </section>
  )
}

function Header() {
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
        {/* Enhanced Logo Section */}
        <a href="#home" className="group flex items-center gap-4 no-underline text-[#e6edf3] hover:scale-105 transition-transform duration-300">
          <div className="relative">
            <img src={Logo} alt="INEZA TETA Landra Logo" className="w-10 h-10 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] rounded-full opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wide" style={{ fontFamily: 'var(--font-heading)' }}>INEZA TETA Landra</span>
            <span className="text-xs text-[#7aa6ff] font-medium tracking-wider">Developer & Designer</span>
          </div>
        </a>

        {/* Mobile Menu Button */}
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

        {/* Desktop Navigation */}
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
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] rounded-full"></div>
              )}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/20">
            <a href="#contact" className="group relative bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-semibold rounded-xl px-6 py-3 no-underline shadow-[0_8px_25px_rgba(30,144,255,0.3)] hover:shadow-[0_12px_35px_rgba(30,144,255,0.4)] transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Hire Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#4db6ff] to-[#1e90ff] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </nav>
      </div>

      {/* Enhanced Mobile Menu */}
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
                className="block w-full text-center bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-semibold rounded-xl px-6 py-3 no-underline shadow-[0_8px_25px_rgba(30,144,255,0.3)] hover:shadow-[0_12px_35px_rgba(30,144,255,0.4)] transition-all duration-300"
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

function Socials() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile', color: 'from-[#0077b5] to-[#00a0dc]' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername', color: 'from-[#333] to-[#555]' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourhandle', color: 'from-[#1da1f2] to-[#0d8bd9]' },

  ]

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.url}
          className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
          title={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={social.icon} className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  )
}

function Hero() {
  const roles = [
    "CREATIVE FULL-STACK DEVELOPER",
    "INNOVATIVE UI/UX DESIGNER",
    "DIGITAL PRODUCT ARCHITECT"
  ]
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length)
    }, 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-float-soft"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-float-soft" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-soft" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 grid gap-16 md:grid-cols-[1.1fr_0.9fr] items-center relative z-10">
        <div className="space-y-8">
          {/* Professional name tag */}
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(124,92,255,0.1)] border border-[#7c5cff]/30 mb-4">
              <div className="w-2 h-2 bg-[#7c5cff] rounded-full animate-pulse-glow"></div>
              <span className="text-[#7c5cff] text-sm font-medium tracking-wider">INEZA TETA LANDRA</span>
            </div>
          </div>

          {/* Main headline with professional typography */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl sm:text-7xl font-black leading-[0.9] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="block text-white">CREATING</span>
              <span className="block bg-gradient-to-r from-[#00c2ff] via-[#7c5cff] to-[#00c2ff] bg-clip-text text-transparent animate-gradient">
                DIGITAL
              </span>
              <span className="block text-white">EXPERIENCES</span>
            </h1>
          </div>

          {/* Dynamic role display */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.4s' }}>
            <div className="h-16 relative overflow-hidden">
              <h2 key={roleIndex} className="absolute inset-0 text-2xl sm:text-3xl font-bold text-[#a6b3c2] transition-all duration-500 ease-in-out">
                {roles[roleIndex]}
              </h2>
            </div>
          </div>

          {/* Professional description */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
            <p className="text-lg sm:text-xl text-[#a6b3c2] leading-relaxed max-w-2xl font-light">
              I craft exceptional digital products that combine cutting-edge technology with intuitive design.
              Specializing in modern web applications and user experiences that drive business growth.
            </p>
          </div>

          {/* Call-to-action buttons */}
          <div className="animate-fade-in-left" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contact" className="group relative bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(30,144,255,0.4)] transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#4db6ff] to-[#1e90ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/resume.pdf" className="group border-2 border-[#00c2ff] text-[#00c2ff] font-semibold px-8 py-4 rounded-2xl hover:bg-[#00c2ff] hover:text-white transition-all duration-300 hover:scale-105" download>
                Download Resume
              </a>
            </div>
            <div className="mt-6">
              <Socials />
            </div>
          </div>
        </div>

        {/* Professional portrait with enhanced animations */}
        <div className="relative animate-fade-in-right">
          <div className="relative w-[420px] h-[420px] mx-auto">
            {/* Main circular portrait */}
            <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-[#7c5cff] shadow-[0_0_0_1px_rgba(124,92,255,0.3),0_0_60px_rgba(124,92,255,0.4),0_0_120px_rgba(124,92,255,0.2),0_30px_60px_rgba(0,0,0,0.6)] animate-pulse-glow">
              <img src="./IMG-20240821-WA0101.jpg" alt="INEZA TETA Landra - Professional Developer & Designer" className="w-full h-full object-cover" loading="eager" />
            </div>

            {/* Floating elements for visual interest */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] rounded-full animate-float-soft opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] rounded-full animate-float-soft opacity-60" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-white/30 rounded-full animate-float-soft" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// (Removed logo strip between Home and About for a cleaner, more professional flow)

function About() {
  return (
    <Section id="about" eyebrow="ABOUT ME" title="Blending Art & Engineering for Next-Gen UX">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative">
          {/* Clean square professional portrait */}
          <div className="relative h-[320px] w-[320px] mx-auto">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-[#7c5cff] shadow-2xl">
              <img src="./IMG-20240821-WA0101.jpg" alt="INEZA TETA Landra professional portrait" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#a6b3c2] mb-5 text-lg leading-relaxed">Hi! I'm Landra, a creative technologist passionate about bridging design and code. I craft accessible, high-performance apps and brands that stand out. When I'm not coding, I'm sketching new UX ideas or exploring design trends.</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[['1+', 'Happy Clients'], ['1+', 'Years Experience'], ['1', 'Awards Won']].map(([k, v]) => (
              <div key={v} className="rounded-2xl p-4 border border-white/10 text-center bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,255,255,0.05)] transition-colors">
                <div className="text-[22px] font-extrabold">{k}</div>
                <div className="text-[#a6b3c2] text-xs">{v}</div>
              </div>
            ))}
          </div>
          <a href="#projects" className="inline-block bg-[#1a7cff] hover:bg-[#2a88ff] transition-all text-white font-semibold rounded-full px-5 py-2 hover:scale-105">View My Work</a>
        </div>
      </div>
    </Section>
  )
}

// ---- SKILLS SECTION BELOW ----
function Skills() {
  const skills = [
    { name: "React", color: "#61dafb", icon: <Icon name="code" className="w-7 h-7" /> },
    { name: "Node.js", color: "#8cc84b", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Tailwind CSS", color: "#38bdf8", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "Figma", color: "#a259ff", icon: <Icon name="ux" className="w-7 h-7" /> },
    { name: "Photoshop", color: "#31a8ff", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "MongoDB", color: "#10aa50", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Git", color: "#0055ff", icon: <Icon name="ux" className="w-7 h-7" /> },

  ]
  return (
    <Section id="skills" eyebrow="SKILLS & TOOLS" title="My Toolbox">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(skill => (
          <div key={skill.name} title={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-soft font-bold" style={{ background: `linear-gradient(92deg, ${skill.color}22 60%, #111420)`, color: skill.color, border: `1.5px solid ${skill.color}99` }}>
            {skill.icon} <span style={{ fontFamily: 'Poppins, Inter', color: '#fff' }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const cards = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Modern online store with advanced filtering, secure payments, and admin dashboard. Built with performance and accessibility in mind.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'blob-shape-3'
    },
    {
      id: 2,
      title: 'Creative Portfolio',
      desc: 'Interactive portfolio showcasing design work with smooth animations and unique visual effects. Fully responsive and optimized.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'blob-shape-4'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      desc: 'Secure banking application with biometric authentication, transaction history, and real-time notifications. Focus on user trust and security.',
      tech: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'blob-shape'
    }
  ]
  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i) => {
    const el = trackRef.current
    if (!el) return
    const children = Array.from(el.children)
    const target = children[i]
    if (target) target.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    setIndex(i)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const w = el.firstElementChild ? el.firstElementChild.getBoundingClientRect().width : 1
      const i = Math.round(el.scrollLeft / (w + 20))
      setIndex(Math.max(0, Math.min(cards.length - 1, i)))
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Section id="projects" eyebrow="MY WORK" title="Featured Projects">
      <div className="relative">

        <div ref={trackRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none]" style={{ scrollbarWidth: 'none' }}>
          {cards.map((card, i) => (
            <article key={card.id} className="min-w-[380px] md:min-w-0 md:flex-1 snap-center hover-lift group">
              {/* Square project container */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0f141b] shadow-2xl">
                {/* Project Image */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={`${card.title} project screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {card.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={card.liveUrl}
                  className="flex-1 bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-semibold rounded-xl px-4 py-3 text-center hover:scale-105 transition-transform shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
                <a
                  href={card.githubUrl}
                  className="flex-1 border border-white/20 bg-white/5 text-white font-semibold rounded-xl px-4 py-3 text-center hover:bg-white/10 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="github" className="w-5 h-5 inline mr-2" />
                  Code
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-8">
          {cards.map((_, i) => (
            <button key={i} onClick={() => scrollTo(i)} className={`w-3 h-3 rounded-full transition-all ${index === i ? 'bg-white/80 scale-125' : 'bg-white/30 hover:bg-white/50'}`} />
          ))}
        </div>
      </div>
    </Section>
  )
}



function Experience() {
  const items = [
    { role: 'Frontend Developer & UI/UX Designer', org: 'Freelance', time: '2020 — Present', desc: 'Designing and building accessible, performant web apps with a focus on design systems and motion.' },
    { role: 'Product Designer', org: 'Studio', time: '2018 — 2020', desc: 'Led UX from research to hi-fi prototypes; collaborated closely with engineering.' },
  ]
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <article key={i.role} className="rounded-2xl p-4 border border-white/10 shadow-soft bg-gradient-to-b from-white/5 to-transparent">
            <h3 className="m-0 text-lg font-semibold">{i.role}</h3>
            <p className="m-0 text-[#a6b3c2]">{i.org} • {i.time}</p>
            <p className="mt-2 text-[#a6b3c2]">{i.desc}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  return (
    <Section id="contact" title="Let's build something great">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-morphism rounded-3xl p-8 neon-glow">
          <h3 className="text-[20px] font-semibold mb-2">Get In Touch</h3>
          <p className="text-[#a6b3c2] mb-6">Tell me about your project, timeline, and goals. I'll get back within 24–48 hours.</p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Full name</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] focus:border-[#00c2ff] focus:outline-none transition-colors"
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Email</label>
              <input
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] focus:border-[#00c2ff] focus:outline-none transition-colors"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] min-h-[120px] focus:border-[#00c2ff] focus:outline-none transition-colors resize-none"
                name="message"
                placeholder="What are we building?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <button
              className="bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-bold rounded-xl px-6 py-3 w-fit hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="grid gap-6">
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] flex items-center justify-center">
                <Icon name="email" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-[#a6b3c2]">landrate2000@gmail.com</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] flex items-center justify-center">
                <Icon name="location" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-[#a6b3c2]">Kigali, Rwanda</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex items-center justify-center">
                <Icon name="time" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Response Time</h3>
            </div>
            <p className="text-[#a6b3c2]">Within 24-48 hours</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Footer() {
  const year = new Date().getFullYear()
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'from-[#1e90ff] to-[#4db6ff]' },
    { name: 'GitHub', icon: 'github', url: '#', color: 'from-[#2c3e50] to-[#34495e]' },
    { name: 'Twitter', icon: 'twitter', url: '#', color: 'from-[#00c2ff] to-[#7c5cff]' },

  ]

  return (
    <footer className="border-t border-white/10 pt-12 pb-8">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            {/* Footer Logo Section */}
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="INEZA TETA Landra Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>INEZA TETA Landra</h3>
            </div>
            <p className="text-[#a6b3c2] text-sm leading-relaxed">Frontend Developer & UI/UX Designer crafting beautiful, functional digital experiences.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg`}
                  title={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Home</a>
              <a href="#about" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">About</a>
              <a href="#projects" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Projects</a>
              <a href="#services" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Services</a>
              <a href="#experience" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Experience</a>
              <a href="#contact" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Contact</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] flex items-center justify-center">
                  <Icon name="email" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">landra@example.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] flex items-center justify-center">
                  <Icon name="location" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">Kigali, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex items-center justify-center">
                  <Icon name="time" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">Available for projects</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a6b3c2] text-sm">© {year} INEZA TETA Landra. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

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
      <Skills /> {/* Injected between About and Projects */}
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

