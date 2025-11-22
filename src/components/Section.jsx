import React from 'react'

export default function Section({ id, title, eyebrow, children }) {
  return (
    <section id={id} className="py-20">
      <div className="container mx-auto max-w-[1200px] px-6">
        {eyebrow && <div className="text-sm tracking-[0.2em] text-[#7aa6ff] mb-4 font-medium animate-fade-up">{eyebrow}</div>}
        {title && <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12 text-white animate-fade-up" style={{fontFamily: 'var(--font-heading)', animationDelay: '0.2s'}}>{title}</h2>}
        <div className="animate-fade-up" style={{animationDelay: '0.4s'}}>
          {children}
        </div>
      </div>
    </section>
  )
}


