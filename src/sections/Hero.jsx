import React, { useEffect, useState } from 'react'
import Socials from '../components/Socials'

export default function Hero() {
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
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full animate-float-soft"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full animate-float-soft" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-float-soft" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="container mx-auto max-w-[1200px] px-6 grid gap-16 md:grid-cols-[1.1fr_0.9fr] items-center relative z-10">
        <div className="space-y-8">
          <div className="animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(124,92,255,0.1)] border border-[#7c5cff]/30 mb-4">
              <div className="w-2 h-2 bg-[#7c5cff] rounded-full animate-pulse-glow"></div>
              <span className="text-[#7c5cff] text-sm font-medium tracking-wider">INEZA TETA LANDRA</span>
            </div>
          </div>
          
          <div className="animate-fade-in-left" style={{animationDelay: '0.2s'}}>
            <h1 className="text-5xl sm:text-7xl font-black leading-[0.9] mb-6" style={{fontFamily: 'var(--font-heading)'}}>
              <span className="block text-white">CREATING</span>
              <span className="block bg-gradient-to-r from-[#00c2ff] via-[#7c5cff] to-[#00c2ff] bg-clip-text text-transparent animate-gradient">
                DIGITAL
              </span>
              <span className="block text-white">EXPERIENCES</span>
            </h1>
          </div>
          
          <div className="animate-fade-in-left" style={{animationDelay: '0.5s'}}>
            <div className="h-16 relative overflow-hidden">
              <h2 key={roleIndex} className="absolute inset-0 text-2xl sm:text-3xl font-bold text-[#a6b3c2] transition-all duration-500 ease-in-out">
                {roles[roleIndex]}
              </h2>
            </div>
          </div>
          
          <div className="animate-fade-in-left" style={{animationDelay: '0.6s'}}>
            <p className="text-lg sm:text-xl text-[#a6b3c2] leading-relaxed max-w-2xl font-light">
              I craft exceptional digital products that combine cutting-edge technology with intuitive design. 
              Specializing in modern web applications and user experiences that drive business growth.
            </p>
          </div>
          
          <div className="animate-fade-in-left" style={{animationDelay: '0.8s'}}>
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
        
        <div className="relative animate-fade-in-right">
          <div className="relative w-[420px] h-[420px] mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-[#7c5cff] shadow-[0_0_0_1px_rgba(124,92,255,0.3),0_0_60px_rgba(124,92,255,0.4),0_0_120px_rgba(124,92,255,0.2),0_30px_60px_rgba(0,0,0,0.6)] animate-pulse-glow">
              <img src="/IMG-20240821-WA0101.jpg" alt="INEZA TETA Landra" className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] rounded-full animate-float-soft opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] rounded-full animate-float-soft opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 -left-8 w-6 h-6 bg-white/30 rounded-full animate-float-soft" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}


