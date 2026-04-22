import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-bg/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
            className="font-display font-bold text-lg tracking-tight group"
          >
            <span className="text-white">YS</span>
            <span className="text-accent">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                className="px-4 py-2 text-sm font-body text-slate-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="ml-3 px-4 py-2 text-sm font-body font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-bg/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <nav className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                  className="px-4 py-3 text-sm font-body text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="mt-2 px-4 py-3 text-sm font-body font-medium bg-accent/10 text-accent border border-accent/20 rounded-lg text-center"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
