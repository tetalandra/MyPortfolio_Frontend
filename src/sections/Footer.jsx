import React from 'react'
import Icon from '../components/Icon'
import Logo from '../assets/logo.svg'
import { motion } from 'framer-motion'

export default function Footer() {
  const year = new Date().getFullYear()
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#', color: 'from-[#1e90ff] to-[#4db6ff]' },
    { name: 'GitHub', icon: 'github', url: '#', color: 'from-[#2c3e50] to-[#34495e]' },
    { name: 'Twitter', icon: 'twitter', url: '#', color: 'from-[#00c2ff] to-[#7c5cff]' },
    { name: 'Dribbble', icon: 'dribbble', url: '#', color: 'from-[#1e90ff] to-[#4db6ff]' }
  ]
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="border-t border-white/10 pt-12 pb-8"
    >
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={Logo} alt="INEZA TETA Landra Logo" className="w-8 h-8" />
              <h3 className="text-xl font-bold bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-heading)' }}>INEZA TETA Landra</h3>
            </div>
            <p className="text-[#a6b3c2] text-sm leading-relaxed">Frontend Developer & UI/UX Designer crafting beautiful, functional digital experiences.</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center shadow-lg`}
                  title={social.name}
                >
                  <Icon name={social.icon} className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Home</a>
              <a href="#about" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">About</a>
              <a href="#projects" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Projects</a>
              <a href="#services" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Services</a>
              <a href="#experience" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Experience</a>
              <a href="#contact" className="text-[#a6b3c2] text-sm hover:text-[#00c2ff] transition-colors">Contact</a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] flex items-center justify-center">
                  <Icon name="email" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">landrate2000@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] flex items-center justify-center">
                  <Icon name="location" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">Nyabihu, Rwanda</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex items-center justify-center">
                  <Icon name="time" className="w-4 h-4 text-white" />
                </div>
                <span className="text-[#a6b3c2] text-sm">Available for projects</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a6b3c2] text-sm">© {year} INEZA TETA Landra. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[#a6b3c2] hover:text-[#00c2ff] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  )
}


