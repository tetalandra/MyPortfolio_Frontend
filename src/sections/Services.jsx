import React from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'

export default function Services() {
  const services = [
    {t:'Website Design',d:'Beautiful and responsive websites', icon:'design'},
    {t:'UI/UX Design',d:'Research, wireframes, hi-fi prototypes', icon:'ux'},
    {t:'Design Systems',d:'Reusable components and tokens', icon:'system'},
    {t:'Frontend Dev',d:'Clean, accessible implementations', icon:'code'},
  ]
  return (
    <Section id="services" eyebrow="SERVICES" title={<span>DESIGN <span className="text-[#38a0ff]">SERVICES</span> I AM PROVIDING</span>}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <div key={s.t} className="hover-lift group">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0f141b] shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0f141b] to-[#1a2332] flex items-center justify-center">
                <div className="text-center text-[#a6b3c2]">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-r from-[#7c5cff] to-[#00c2ff] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={s.icon} className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-xs">Services</p>
                </div>
            <div className="p-5 bg-[rgba(255,255,255,0.02)] border border-white/10 rounded-2xl mt-4">
              <h3 className="text-[16px] font-semibold mb-2">{s.t}</h3>
              <p className="text-[#a6b3c2] text-sm">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}


