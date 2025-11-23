import React from 'react'
import Section from '../components/Section'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <Section 
      id="about"
      eyebrow="ABOUT ME"
      title="Blending Art & Engineering for Next-Gen UX"
    >
      <div className="grid gap-8 md:grid-cols-2 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div
            className="relative h-[320px] w-[320px] mx-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-2xl overflow-hidden ring-4 ring-[#7c5cff] shadow-2xl"
            >
              <img
                src="./IMG-20240821-WA0101.jpg"
                alt="INEZA TETA Landra professional portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RIGHT — TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            className="text-[#a6b3c2] mb-5 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi! I'm Landra, a creative technologist passionate about bridging design and code.
            I craft accessible, high-performance apps and brands that stand out. When I'm not
            coding, I'm sketching new UX ideas or exploring design trends.
          </motion.p>

          {/* COUNTERS */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {[['1+','Happy Clients'],['1+','Years Experience'],['1','Awards Won']].map(([k, v]) => (
              <motion.div
                key={v}
                className="rounded-2xl p-4 border border-white/10 text-center bg-[rgba(255,255,255,0.02)] 
                hover:bg-[rgba(255,255,255,0.05)] transition-colors"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <div className="text-[22px] font-extrabold">{k}</div>
                <div className="text-[#a6b3c2] text-xs">{v}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTON */}
          <motion.a
            href="#projects"
            className="inline-block bg-[#1a7cff] hover:bg-[#2a88ff] transition-all text-white font-semibold 
            rounded-full px-5 py-2"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>
    </Section>
  )
}
