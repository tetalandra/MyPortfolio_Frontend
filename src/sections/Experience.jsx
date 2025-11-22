import React from 'react'
import Section from '../components/Section'

export default function Experience() {
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


