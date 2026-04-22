import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Newspaper, Users, ShoppingBag, Car, Layout } from 'lucide-react'

const projects = [
  {
    id: 1,
    icon: Newspaper,
    title: 'News App',
    description:
      'A dynamic news aggregator that fetches real-time headlines using a public News API. Features category filtering, search, and a clean card-based UI for quick browsing.',
    tech: ['HTML', 'CSS', 'JavaScript', 'News API'],
    github: 'https://github.com/itsYashGitHub/News-App',
    live: 'https://itsyashgithub.github.io/News-App/',
    color: '#4f8ef7',
    featured: true,
  },
  {
    id: 2,
    icon: Users,
    title: 'Smart Contact Manager',
    description:
      'A full-stack contact management system built with Spring Boot following MVC architecture. Includes secure authentication (OAuth2 via Google/GitHub), CRUD operations, and persistent storage using MySQL.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Thymeleaf', 'TailwindCSS', 'EmailJS'],
    github: 'https://github.com/itsYashGitHub/Smart-Contact-Manager',
    live: null,
    color: '#a78bfa',
    featured: true,
  },
  {
    id: 3,
    icon: ShoppingBag,
    title: 'Swan Botanicals',
    description:
      'A responsive React-based website built for a skincare brand during the Build for Botanicals competition. Features product showcase, interactive UI components, and optimized mobile experience.',
    tech: ['React', 'TailwindCSS', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/itsYashGitHub/swan-botanicals',
    live: 'https://swan-botanicals-two.vercel.app/',
    color: '#34d399',
    featured: true,
  },
  {
    id: 4,
    icon: Car,
    title: 'AutoVal – Car Price Predictor',
    description:
      'An ML-based web application that predicts used car prices using real-world data. Involved data preprocessing, feature engineering, and integration of trained models into a Flask-based web app.',
    tech: ['Python', 'Flask', 'scikit-learn', 'Pandas', 'NumPy', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/itsYashGitHub/AutoVal',
    live: null,
    color: '#fb923c',
    featured: true,
  },
  {
    id: 5,
    icon: Layout,
    title: 'Vehicular Fog Computing Simulator',
    description:
      'A simulation system for task offloading in vehicular networks using priority-based scheduling. Built with Flask and SUMO, featuring a dashboard to monitor task execution and system performance.',
    tech: ['Python', 'Flask', 'SUMO', 'HTML', 'CSS', 'TraciAPI'],
    github: 'https://github.com/itsYashGitHub/VFCTaskScheduling',
    live: null,
    color: '#f472b6',
    featured: false,
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = project.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group glow-border rounded-2xl bg-surface p-6 flex flex-col transition-all duration-300 hover:-translate-y-1"
    >
      {/* Icon + links row */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${project.color}15`, border: `1px solid ${project.color}25` }}
        >
          <Icon size={20} style={{ color: project.color }} />
        </div>

        <div className="flex items-center gap-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-border"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-600 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-border"
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-lg text-white mb-2 group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-slate-400 leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono rounded-md bg-white/5 text-slate-400 border border-white/5"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-accent text-sm">02.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Projects</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body text-slate-400 mb-14 ml-10 max-w-xl"
        >
          A selection of things I've built — from APIs to full-stack apps.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
