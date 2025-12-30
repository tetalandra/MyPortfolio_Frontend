import React, { useState } from 'react'
import Section from '../components/Section'
import Icon from '../components/Icon'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' })
        alert('Message sent successfully!')
      } else {
        alert(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Failed to connect to the server. Please ensure the backend is running.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Section id="contact" title="Let's build something great">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-morphism rounded-3xl p-8 neon-glow"
        >
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#1e90ff] to-[#4db6ff] text-white font-bold rounded-xl px-6 py-3 w-fit disabled:opacity-50 disabled:cursor-not-allowed"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
        <div className="grid gap-6">
          {[
            { title: 'Email', value: 'landrate2000@gmail.com', icon: 'email', color: 'from-[#00c2ff] to-[#7c5cff]' },
            { title: 'Location', value: 'Nyabihu, Rwanda', icon: 'location', color: 'from-[#1e90ff] to-[#4db6ff]' },
            { title: 'Response Time', value: 'Within 24-48 hours', icon: 'time', color: 'from-[#2c3e50] to-[#34495e]' }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass-morphism rounded-2xl p-6 hover-lift"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  <Icon name={item.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
              <p className="text-[#a6b3c2]">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}


