import React, { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from 'framer-motion'

import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'
import project5 from '../assets/project-5.png'
import project6 from '../assets/project-6.png'
import project7 from '../assets/project-7.png'
import project8 from '../assets/project-8.jpg'

export default function Projects() {
  const cards = [
    {
      id: 1,
      title: 'TUZA',
      desc: 'Modern Rent paying application which helps land tenants to pay house rent easily and also landlords to manage the house rent easily by tracking the payment process easily',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: project7,
      liveUrl: '#',
      githubUrl: 'https://github.com/tetalandra/TUZA_Project',
      color: 'blob-shape-3'
    },
    {
      id: 2,
      title: 'Medicare',
      desc: 'Interactive medical care website which will help patients to access the health services easily ',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: project8,
      liveUrl: '#',
      githubUrl: 'https://github.com/tetalandra/Medicare',
      color: 'blob-shape-4'
    },
    {
      id: 3,
      title: 'RICH',
      desc: 'Secure blockchain application which will help people to connect their wallets together so that they can be able to buy the bitcoin easily',
      tech: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
      image: project5,
      liveUrl: '#',
      githubUrl: 'https://github.com/tetalandra/Rich-frontend',
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
            <motion.article
              key={card.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="min-w-[85vw] sm:min-w-[380px] md:min-w-0 md:flex-1 snap-center hover-lift group"
            >
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0f141b] shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={`${card.title} project screenshot`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                </div>
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
            </motion.article>
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
