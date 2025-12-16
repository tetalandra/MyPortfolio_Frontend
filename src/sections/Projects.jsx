import React, { useEffect, useRef, useState } from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from 'framer-motion'

export default function Projects() {
  const cards = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      desc: 'Modern online store with advanced filtering, secure payments, and admin dashboard. Built with performance and accessibility in mind.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'blob-shape-3'
    },
    {
      id: 2,
      title: 'Creative Portfolio',
      desc: 'Interactive portfolio showcasing design work with smooth animations and unique visual effects. Fully responsive and optimized.',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'blob-shape-4'
    },
    {
      id: 3,
      title: 'Mobile Banking App',
      desc: 'Secure banking application with biometric authentication, transaction history, and real-time notifications. Focus on user trust and security.',
      tech: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
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
