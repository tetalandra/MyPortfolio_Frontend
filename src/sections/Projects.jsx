import React from 'react'
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
      color: 'from-[#1e90ff] to-[#4db6ff]'
    },
    {
      id: 2,
      title: 'Medicare',
      desc: 'Interactive medical care website which will help patients to access the health services easily ',
      tech: ['Next.js', 'Tailwind', 'Framer Motion', 'GSAP'],
      image: project8,
      liveUrl: '#',
      githubUrl: 'https://github.com/tetalandra/Medicare',
      color: 'from-[#00c2ff] to-[#7c5cff]'
    },
    {
      id: 3,
      title: 'RICH',
      desc: 'Secure blockchain application which will help people to connect their wallets together so that they can be able to buy the bitcoin easily',
      tech: ['React Native', 'Figma', 'Firebase', 'TypeScript'],
      image: project5,
      liveUrl: '#',
      githubUrl: 'https://github.com/tetalandra/Rich-frontend',
      color: 'from-[#7c5cff] to-[#be4bdb]'
    }
  ]

  return (
    <Section id="projects" eyebrow="MY WORK" title="Featured Projects">
      <div className="flex flex-col gap-32">
        {cards.map((card, i) => (
          <motion.article
            key={card.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
          >

            <div className="w-full lg:w-3/5 group perspective-1000">
              <div className="device-trio transform transition-transform duration-700 group-hover:scale-[1.02]">


                <div className="monitor-wrapper">
                  <div className="monitor-frame">
                    <div className="monitor-screen">
                      <img src={card.image} alt="Desktop view" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                    </div>
                  </div>
                </div>


                <div className="laptop-wrapper">
                  <div className="laptop-frame">
                    <div className="laptop-screen">
                      <img src={card.image} alt="Laptop view" />
                    </div>
                    <div className="laptop-base" />
                  </div>
                </div>

                <div className="phone-wrapper">
                  <div className="phone-frame">
                    <div className="phone-screen">
                      <div className="phone-notch" />
                      <img src={card.image} alt="Mobile view" className="object-cover object-left" />
                    </div>
                  </div>
                </div>

              </div>
            </div>


            <div className="w-full lg:w-2/5 flex flex-col gap-6">
              <div>
                <h3 className={`text-3xl font-bold bg-gradient-to-r ${card.color} bg-clip-text text-transparent mb-4 inline-block`}>
                  {card.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {card.tech.map(tech => (
                  <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href={card.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Live Demo
                </a>
                <a
                  href={card.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <Icon name="github" className="w-5 h-5" />
                  Code
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
