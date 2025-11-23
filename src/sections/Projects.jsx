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
      color: 'from-blue-600/40 to-blue-300/20'
    },
    { 
      id: 2, 
      title: 'Creative Portfolio', 
      desc: 'Interactive portfolio showcasing design work with smooth animations and unique visual effects. Fully responsive and optimized.', 
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-purple-600/40 to-pink-400/20'
    },
    { 
      id: 3, 
      title: 'Mobile Banking App', 
      desc: 'Secure banking application with biometric authentication, transaction history, and real-time notifications. Focus on user trust and security.', 
      tech: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop&crop=center',
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-green-600/40 to-lime-400/20'
    }
  ]

  const trackRef = useRef(null)
  const [index, setIndex] = useState(0)

  const scrollTo = (i) => {
    const el = trackRef.current
    if (!el) return
    const children = Array.from(el.children)
    const target = children[i]
    if (target) target.scrollIntoView({ behavior: 'smooth', inline: 'center' })
    setIndex(i)
  }

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const onScroll = () => {
      const w = el.firstElementChild?.getBoundingClientRect().width || 1
      const i = Math.round(el.scrollLeft / (w + 20))
      setIndex(Math.max(0, Math.min(cards.length - 1, i)))
    }
    el.addEventListener('scroll', onScroll)
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <Section id="projects" eyebrow="MY WORK" title="Featured Projects">

      {/* Section Animation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .7, ease: "easeOut" }}
        className="relative"
      >

        <div
          ref={trackRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 no-scrollbar"
        >
          {cards.map((card, i) => (
            <motion.article
              key={card.id}
              className="min-w-[380px] md:flex-1 snap-center group relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04, rotate: 0.5 }}
            >
              
              {/* Floating Blob */}
              <motion.div
                className={`absolute -inset-4 blur-3xl bg-gradient-to-br ${card.color} opacity-40 group-hover:opacity-60 transition duration-500 rounded-full`}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />

              {/* Card */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-[#0f141b] shadow-2xl cursor-pointer group">
                
                {/* Spotlight Hover Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition duration-300 bg-gradient-to-br from-white/10 to-transparent"></div>

                {/* Image */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  
                  {/* Animated Tech Badges */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {card.tech.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium text-white border border-white/30"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">{card.desc}</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <a
                  href={card.liveUrl}
                  className="flex-1 bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-semibold rounded-xl px-4 py-3 text-center hover:scale-105 transition-transform shadow-lg"
                  target="_blank"
                >
                  Live Demo
                </a>

                <a
                  href={card.githubUrl}
                  className="flex-1 border border-white/20 bg-white/5 text-white font-semibold rounded-xl px-4 py-3 text-center hover:bg-white/10 transition-colors"
                  target="_blank"
                >
                  <Icon name="github" className="w-5 h-5 inline mr-2" />
                  Code
                </a>
              </div>

            </motion.article>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {cards.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === i ? 'bg-white/90 scale-125' : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.4 }}
              animate={index === i ? { scale: 1.4 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ))}
        </div>
      </motion.div>

    </Section>
  )
}
