import React from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'

export default function Experience() {
  const items = [
    { role: 'Frontend Developer & UI/UX Designer', org: 'Freelance', time: '2020 — Present', desc: 'Designing and building accessible, performant web apps with a focus on design systems and motion.' },
    { role: 'Product Designer', org: 'Studio', time: '2018 — 2020', desc: 'Led UX from research to hi-fi prototypes; collaborated closely with engineering.' },
  ]
  return (
    <Section id="experience" title="Experience">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i, index) => (
          <motion.article
            key={i.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -5 }}
            className="rounded-2xl p-4 border border-white/10 shadow-soft bg-gradient-to-b from-white/5 to-transparent hover:border-white/20 transition-colors"
          >
            <h3 className="m-0 text-lg font-semibold">{i.role}</h3>
            <p className="m-0 text-[#a6b3c2]">{i.org} • {i.time}</p>
            <p className="mt-2 text-[#a6b3c2]">{i.desc}</p>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}


