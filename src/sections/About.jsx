import React from 'react'
import Section from '../components/Section'

export default function About() {
  return (
    <Section id="about" eyebrow="ABOUT ME" title="Blending Art & Engineering for Next-Gen UX">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="relative">
          <div className="relative h-[320px] w-[320px] mx-auto">
            <div className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-[#7c5cff] shadow-2xl">
              <img src="./IMG-20240821-WA0101.jpg" alt="INEZA TETA Landra professional portrait" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#a6b3c2] mb-5 text-lg leading-relaxed">Hi! I'm Landra, a creative technologist passionate about bridging design and code. I craft accessible, high-performance apps and brands that stand out. When I'm not coding, I'm sketching new UX ideas or exploring design trends.</p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[['1+','Happy Clients'],['1+','Years Experience'],['1','Awards Won']].map(([k, v])=> (
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


