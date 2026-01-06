import React, { useEffect, useState } from 'react'
import Socials from '../components/Socials'
import { motion } from 'framer-motion'

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
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-2 h-2 bg-white rounded-full"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-32 w-1 h-1 bg-blue-400 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full"
        />
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 grid gap-16 md:grid-cols-[1.1fr_0.9fr] items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(124,92,255,0.1)] border border-[#7c5cff]/30 mb-4">
              <div className="w-2 h-2 bg-[#7c5cff] rounded-full animate-pulse-glow"></div>
              <span className="text-[#7c5cff] text-sm font-medium tracking-wider">INEZA TETA LANDRA</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-7xl font-black leading-[0.9] mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              <span className="block text-white">CREATING</span>
              <span className="block text-[#00c2ff]">
                DIGITAL
              </span>
              <span className="block text-white">EXPERIENCES</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-16 relative overflow-hidden">
              <h2 key={roleIndex} className="absolute inset-0 text-2xl sm:text-3xl font-bold text-[#a6b3c2] transition-all duration-500 ease-in-out">
                {roles[roleIndex]}
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg sm:text-xl text-[#a6b3c2] leading-relaxed max-w-2xl font-light">
              I craft exceptional digital products that combine cutting-edge technology with intuitive design.
              Specializing in modern web applications and user experiences that drive business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <a href="#contact" className="group relative bg-[#1e90ff] text-white font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-[0_20px_40px_rgba(30,144,255,0.4)] transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start a Project</span>
                <div className="absolute inset-0 bg-[#1e90ff] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a href="/resume.pdf" className="group border-2 border-[#00c2ff] text-[#00c2ff] font-semibold px-8 py-4 rounded-2xl hover:bg-[#00c2ff] hover:text-white transition-all duration-300 hover:scale-105" download>
                Download Resume
              </a>
            </div>
            <div className="mt-6">
              <Socials />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full max-w-[420px] aspect-square mx-auto">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-8 ring-[#7c5cff] shadow-[0_0_0_1px_rgba(124,92,255,0.3),0_0_60px_rgba(124,92,255,0.4),0_0_120px_rgba(124,92,255,0.2),0_30px_60px_rgba(0,0,0,0.6)] animate-pulse-glow">
              <img src="/IMG-20240821-WA0101.jpg" alt="INEZA TETA Landra" className="w-full h-full object-cover" loading="eager" />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-[#00c2ff] rounded-full opacity-80"
            />
            <motion.div
              animate={{ y: [0, 15, 0] }}

              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-12 h-12 bg-[#7c5cff] rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/2 -left-8 w-6 h-6 bg-white/30 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
