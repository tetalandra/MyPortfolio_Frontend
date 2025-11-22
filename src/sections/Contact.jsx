import React, { useState } from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    }, 2000)
  }

  return (
    <Section id="contact" title="Let's build something great">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-morphism rounded-3xl p-8 neon-glow">
          <h3 className="text-[20px] font-semibold mb-2">Get In Touch</h3>
          <p className="text-[#a6b3c2] mb-6">Tell me about your project, timeline, and goals. I'll get back within 24–48 hours.</p>
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Full name</label>
              <input 
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] focus:border-[#00c2ff] focus:outline-none transition-colors" 
                type="text" 
                name="name" 
                placeholder="Your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required 
              />
            </div>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Email</label>
              <input 
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] focus:border-[#00c2ff] focus:outline-none transition-colors" 
                type="email" 
                name="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required 
              />
            </div>
            <div className="relative">
              <label className="text-sm text-[#a6b3c2] mb-2 block">Message</label>
              <textarea 
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[rgba(255,255,255,0.05)] text-[#e6edf3] min-h-[120px] focus:border-[#00c2ff] focus:outline-none transition-colors resize-none" 
                name="message" 
                placeholder="What are we building?" 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required 
              />
            </div>
            <button 
              className="bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-bold rounded-xl px-6 py-3 w-fit hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        <div className="grid gap-6">
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00c2ff] to-[#7c5cff] flex items-center justify-center">
                <Icon name="email" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Email</h3>
            </div>
            <p className="text-[#a6b3c2]">landrate2000@gmail.com</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] flex items-center justify-center">
                <Icon name="location" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Location</h3>
            </div>
            <p className="text-[#a6b3c2]">Nyabihu, Rwanda</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 hover-lift">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#2c3e50] to-[#34495e] flex items-center justify-center">
                <Icon name="time" className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Response Time</h3>
            </div>
            <p className="text-[#a6b3c2]">Within 24-48 hours</p>
          </div>
        </div>
      </div>
    </Section>
  )
}


