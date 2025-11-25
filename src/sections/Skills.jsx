import React from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'

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
    <Section id="skills" eyebrow="SKILLS & TOOLS" title="My Toolbox">
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map(skill => (
          <div key={skill.name} title={skill.name} className="flex items-center gap-2 px-4 py-2 rounded-2xl shadow-soft font-bold" style={{background: `linear-gradient(92deg, ${skill.color}22 60%, #111420)`, color: skill.color, border: `1.5px solid ${skill.color}99`}}>
            {skill.icon} <span style={{fontFamily:'Poppins, Inter', color: '#fff'}}>{skill.name}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}


