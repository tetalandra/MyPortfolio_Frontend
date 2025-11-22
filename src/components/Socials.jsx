import React from 'react'
import Icon from '../components/Icon'

export default function Socials() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile', color: 'from-[#0077b5] to-[#00a0dc]' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername', color: 'from-[#333] to-[#555]' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourhandle', color: 'from-[#1da1f2] to-[#0d8bd9]' },
    
  ]
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(social => (
        <a 
          key={social.name}
          href={social.url} 
          className={`w-10 h-10 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
          title={social.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name={social.icon} className="w-5 h-5 text-white" />
        </a>
      ))}
    </div>
  )
}


