import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display font-bold text-lg text-white">
            YS<span className="text-accent">.</span>
          </p>
          <p className="font-body text-sm text-slate-500 mt-1">
            Yashovardhan Singh — Built with React & Tailwind
          </p>
        </div>

        <div className="flex items-center gap-2 font-body text-xs text-slate-600">
          <span>Made with</span>
          <Heart size={12} className="text-red-500 fill-red-500" />
          <span>and too much coffee</span>
        </div>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: 'https://github.com/itsYashGitHub', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/yashovardhan-singh-', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:singhyashovardhan9@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 text-slate-600 hover:text-white transition-colors rounded-lg hover:bg-white/5"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
