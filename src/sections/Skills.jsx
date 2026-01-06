import React from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from 'framer-motion'

export default function Skills() {
  const skills = [
    { name: "React", color: "#61dafb", icon: <Icon name="code" className="w-7 h-7" /> },
    { name: "Node.js", color: "#8cc84b", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Tailwind CSS", color: "#38bdf8", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "Figma", color: "#a259ff", icon: <Icon name="ux" className="w-7 h-7" /> },
    { name: "Photoshop", color: "#31a8ff", icon: <Icon name="design" className="w-7 h-7" /> },
    { name: "MongoDB", color: "#10aa50", icon: <Icon name="system" className="w-7 h-7" /> },
    { name: "Git", color: "#0055ff", icon: <Icon name="ux" className="w-7 h-7" /> },
    { name: "Spring Boot", color: "#6DB33F", icon: <Icon name="springboot" className="w-7 h-7" /> },
    { name: "Flutter", color: "#02569B", icon: <Icon name="flutter" className="w-7 h-7" /> },
    { name: "TypeScript", color: "#3178C6", icon: <Icon name="typescript" className="w-7 h-7" /> },
    { name: "Next.js", color: "#FFFFFF", icon: <Icon name="nextjs" className="w-7 h-7" /> },
    { name: "MySQL", color: "#4479A1", icon: <Icon name="mysql" className="w-7 h-7" /> },
    { name: "NestJS", color: "#E0234E", icon: <Icon name="nestjs" className="w-7 h-7" /> },
    { name: "Software Skills", color: "#A020F0", icon: <Icon name="system" className="w-7 h-7" /> },

  ]
  return (
    <Section id="skills" eyebrow="SKILLS & TOOLS" title="My Toolbox">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            title={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-soft font-bold cursor-default"
            style={{ background: `${skill.color}22`, color: skill.color, border: `1.5px solid ${skill.color}99` }}
          >
            {skill.icon} <span style={{ fontFamily: 'Poppins, Inter', color: '#fff' }}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}


