import React from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from "framer-motion"

export default function Skills() {

  const skills = [
    { name: "React", color: "#61dafb", icon: <Icon name="code" className="w-7 h-7" /> },
    { name: "Node.js", color: "#8cc84b", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Tailwind CSS", color: "#38bdf8", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "Figma", color: "#a259ff", icon: <Icon name="ux" className="w-7 h-7" /> },
    { name: "Photoshop", color: "#31a8ff", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "MongoDB", color: "#10aa50", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Git", color: "#0055ff", icon: <Icon name="ux" className="w-7 h-7" /> },
  ]

  return (
    <Section 
      id="skills" 
      eyebrow="SKILLS & TOOLS" 
      title="My Toolbox"
    >
      
      {/* Parent animation wrapper */}
      <motion.div
        className="flex flex-wrap gap-4 justify-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 }
          }
        }}
      >
        {skills.map(skill => (
          
          // Individual skill animation
          <motion.div 
            key={skill.name}
            variants={{
              hidden: { opacity: 0, scale: 0.7, y: 20 },
              show: { opacity: 1, scale: 1, y: 0 }
            }}
            whileHover={{ 
              scale: 1.12, 
              boxShadow: `0px 0px 20px ${skill.color}55` 
            }}
            transition={{ type: "spring", stiffness: 180, damping: 12 }}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl font-semibold cursor-pointer relative overflow-hidden"
            style={{ 
              background: `linear-gradient(92deg, ${skill.color}22 60%, #111420)`,
              border: `1.5px solid ${skill.color}99`,
              color: skill.color
            }}
          >

            {/* GLOW ON HOVER */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
              style={{
                background: `radial-gradient(circle at center, ${skill.color}33, transparent)`
              }}
              transition={{ duration: 0.3 }}
            />

            {skill.icon} 
            <span style={{ fontFamily:'Poppins, Inter', color: '#fff' }}>
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>

    </Section>
  )
}
