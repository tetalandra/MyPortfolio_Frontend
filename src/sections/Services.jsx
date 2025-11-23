import React from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from "framer-motion"

export default function Services() {

  const services = [
    { t:'Website Design', d:'Beautiful and responsive websites', icon:'design' },
    { t:'UI/UX Design', d:'Research, wireframes, hi-fi prototypes', icon:'ux' },
    { t:'Design Systems', d:'Reusable components and tokens', icon:'system' },
    { t:'Frontend Dev', d:'Clean, accessible implementations', icon:'code' },
  ]

  return (
    <Section 
      id="services"
      eyebrow="SERVICES"
      title={
        <span>
          DESIGN <span className="text-[#38a0ff]">SERVICES</span> I AM PROVIDING
        </span>
      }
    >
      <motion.div
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { 
            opacity: 1,
            transition: { staggerChildren: 0.15, ease: "easeOut" }
          }
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.t}
            className="group cursor-pointer"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, rotate: 0.3 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0f141b] shadow-2xl backdrop-blur-md p-6 flex flex-col items-center justify-center">
              
              {/* ICON AREA */}
              <div className="text-center text-[#a6b3c2] mb-4">
                <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(100,150,255,0.6)]">
                  <Icon name={s.icon} className="w-8 h-8 text-white" />
                </div>
                <p className="text-xs tracking-wide uppercase opacity-70">Service</p>
              </div>

              {/* CONTENT CARD */}
              <div className="p-5 rounded-xl bg-white/5 border border-white/10 w-full text-center group-hover:bg-white/10 transition">
                <h3 className="text-[16px] font-semibold mb-1">{s.t}</h3>
                <p className="text-[#a6b3c2] text-sm">{s.d}</p>
              </div>

              {/* BORDER ANIMATION */}
              <span className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#38a0ff] transition-all duration-300 pointer-events-none"></span>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
