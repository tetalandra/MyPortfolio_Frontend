import React from 'react'
import Icon from '../components/Icon'

export default function Socials() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com/in/yourprofile', color: 'bg-[#0077b5]' },
    { name: 'GitHub', icon: 'github', url: 'https://github.com/yourusername', color: 'bg-[#333]' },
    { name: 'Twitter', icon: 'twitter', url: 'https://twitter.com/yourhandle', color: 'bg-[#1da1f2]' },

  ]
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map(social => (
        <a
          key={social.name}
          href={social.url}
          className={`w-10 h-10 rounded-full ${social.color} flex items-center justify-center hover:scale-110 transition-transform shadow-lg hover:shadow-xl`}
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


