import React from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import websiteImg from '../assets/website_design_service.png'
import uiuxImg from '../assets/ui_ux_design_service.png'
import systemsImg from '../assets/design_systems_service.png'
import frontendImg from '../assets/frontend_dev_service.png'

export default function Services() {
  const services = [
    { t: 'Website Design', d: 'Beautiful and responsive websites', img: websiteImg },
    { t: 'UI/UX Design', d: 'Research, wireframes, hi-fi prototypes', img: uiuxImg },
    { t: 'Design Systems', d: 'Reusable components and tokens', img: systemsImg },
    { t: 'Frontend Dev', d: 'Clean, accessible implementations', img: frontendImg },
  ]
  return (
    <Section id="services" eyebrow="SERVICES" title={<span>DESIGN <span className="text-[#38a0ff]">SERVICES</span> I AM PROVIDING</span>}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.t}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl overflow-hidden bg-[#0f141b] border border-white/10 shadow-2xl h-[400px]"
          >
            {/* Image Background */}
            <div className="absolute inset-0">
              <img
                src={s.img}
                alt={s.t}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f141b] via-[#0f141b]/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-end">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#38a0ff] transition-colors">{s.t}</h3>
                <p className="text-[#a6b3c2] text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{s.d}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
