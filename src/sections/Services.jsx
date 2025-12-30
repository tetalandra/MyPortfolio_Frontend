import React from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'
import websiteImg from '../assets/website_design_service.png'
import uiuxImg from '../assets/ui_ux_design_service.png'
import systemsImg from '../assets/design_systems_service.png'
import frontendImg from '../assets/frontend_dev_service.png'
import design1 from '../assets/design-1.png'
import design2 from '../assets/design-2.png'
import design3 from '../assets/design-3.png'
import design4 from '../assets/design-4.png'

export default function Services() {
  const services = [
    { t: 'Website Design', d: 'Beautiful and responsive websites', img: design1 },
    { t: 'UI/UX Design', d: 'Research, wireframes, hi-fi prototypes', img: design2 },
    { t: 'Design Systems', d: 'Reusable components and tokens', img: design3 },
    { t: 'Frontend Dev', d: 'Clean, accessible implementations', img: design4 },
  ]

  return (
    <Section id="services" eyebrow="SERVICES" title={<span>DESIGN <span className="text-[#7c5cff]">SERVICES</span> I AM PROVIDING</span>}>
      <div className="dashboard-container">


        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: 90 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 35 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="panel-side panel-left"
        >
          <div className="tech-grid-bg" />
          <div className="hud-corner hud-tl" />
          <div className="panel-header">
            <div className="panel-title" style={{ color: '#00c2ff' }}>WEB.DEV</div>
            <div className="text-[10px] text-[#7c5cff] font-mono">MOD.01</div>
          </div>
          <div className="panel-body">
            <div className="relative h-48 border border-[#7c5cff]/20 bg-black/50 overflow-hidden">
              <img src={services[0].img} alt={services[0].t} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#7c5cff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-4">{services[0].t}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{services[0].d}</p>

            <div className="mt-auto">
              <div className="text-[10px] text-[#7c5cff] font-mono mb-1">SYSTEM STATUS</div>
              <div className="data-bar"><div className="data-bar-fill" style={{ background: '#00c2ff', boxShadow: '0 0 10px #00c2ff' }} /></div>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.8, z: -100 }}
          whileInView={{ opacity: 1, scale: 1, z: 100 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="panel-center"
        >
          <div className="tech-grid-bg" />
          <div className="hud-corner hud-tr" />
          <div className="hud-corner hud-bl" />


          <div className="central-lens">
            <div className="lens-core" style={{ background: 'radial-gradient(circle, rgba(124, 92, 255, 0.2), transparent 70%)' }} />
          </div>

          <div className="panel-header border-b border-[#7c5cff]/30 bg-[#7c5cff]/5">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-[#7c5cff] rounded-full animate-pulse shadow-[0_0_10px_#7c5cff]" />
              <div className="panel-title text-xl" style={{ color: '#fff' }}>CORE SYSTEMS</div>
            </div>
            <div className="text-xs font-mono text-[#00c2ff]">ONLINE</div>
          </div>

          <div className="panel-body relative z-10 grid grid-rows-2 gap-0 p-0 h-full">

            <div className="relative p-8 flex items-center justify-between border-b border-[#7c5cff]/10 group hover:bg-[#7c5cff]/5 transition-colors">
              <div className="w-1/2">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#7c5cff] transition-colors">{services[1].t}</h3>
                <p className="text-gray-400 text-sm">{services[1].d}</p>
              </div>
              <div className="w-32 h-32 border border-[#7c5cff]/30 rounded-full flex items-center justify-center bg-black/50">
                <img src={services[1].img} alt="icon" className="w-16 h-16 opacity-80" />
              </div>
            </div>


            <div className="relative p-8 flex items-center justify-between group hover:bg-[#7c5cff]/5 transition-colors">
              <div className="w-32 h-32 border border-[#7c5cff]/30 relative flex items-center justify-center bg-black/50">
                <div className="absolute inset-0 border-t border-b border-[#7c5cff] opacity-50" />
                <img src={services[2].img} alt="icon" className="w-16 h-16 opacity-80" />
              </div>
              <div className="w-1/2 text-right">
                <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#7c5cff] transition-colors">{services[2].t}</h3>
                <p className="text-gray-400 text-sm">{services[2].d}</p>
              </div>
            </div>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: -90 }}
          whileInView={{ opacity: 1, x: 0, rotateY: -35 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="panel-side panel-right"
        >
          <div className="tech-grid-bg" />
          <div className="hud-corner hud-br" />
          <div className="panel-header justify-end">
            <div className="text-[10px] text-[#7c5cff] font-mono mr-2">MOD.03</div>
            <div className="panel-title" style={{ color: '#00c2ff' }}>FRONT.END</div>
          </div>
          <div className="panel-body">
            <div className="relative h-48 border border-[#7c5cff]/20 bg-black/50 overflow-hidden">
              <img src={services[3].img} alt={services[3].t} className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500" />
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#7c5cff]" />
            </div>
            <h3 className="text-2xl font-bold text-white mt-4 text-right">{services[3].t}</h3>
            <p className="text-gray-400 text-sm leading-relaxed text-right">{services[3].d}</p>

            <div className="mt-auto">
              <div className="text-[10px] text-[#7c5cff] font-mono mb-1 text-right">PERFORMANCE</div>
              <div className="data-bar"><div className="data-bar-fill ml-auto" style={{ background: '#00c2ff', boxShadow: '0 0 10px #00c2ff' }} /></div>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  )
}
