import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Download, FileText, Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'BTech in Computer Science & Engineering',
    org: 'Kalinga Institute of Industrial Technology - Deemed to be University',
    grade: '9.18/10',
    period: '2023 – Present',
    desc: 'Coursework: Programming in C, Data Structues, OOP in Java, DBMS, OS, Design and Analysis of Algorithms, Software Engineering, Web design, Cloud Computing, AI, ML.',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'Class 12th ISC',
    org: 'St. Josephs College',
    grade: '87.75%',
    period: '2022 – 2023',
    desc: 'Science stream with Mathematics, Physics, Chemistry and Computer Science.',
  },
  {
    type: 'edu',
    icon: GraduationCap,
    title: 'Class 10th ICSE',
    org: 'St. Josephs College',
    grade: '93%',
    period: '2020 – 2021',
    desc: 'Physics, Chemistry, Mathematics, English, Hindi, History, Civics, Geography, Computer Science.',
  },
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="resume" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-accent text-sm">04.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">Resume</h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body text-slate-400 mb-14 ml-10 max-w-xl"
        >
          My education and experience at a glance. Download the full PDF for more details.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-5">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glow-border rounded-2xl bg-surface p-6 flex gap-5 group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                      <h3 className="font-display font-semibold text-white text-base">{item.title}</h3>
                      <span className="font-mono text-xs text-slate-500 whitespace-nowrap">{item.period}</span>
                    </div>
                    <p className="font-body text-sm text-accent mb-2">{item.org}</p>
                    <p className="font-body text-sm text-accent mb-2">{item.grade}</p>
                    <p className="font-body text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Download card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-24"
          >
            <div className="glow-border rounded-2xl bg-surface p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-5">
                  <FileText size={28} className="text-accent" />
                </div>
                <h3 className="font-display font-bold text-xl text-white mb-2">My Resume</h3>
                <p className="font-body text-sm text-slate-400 mb-7 leading-relaxed">
                  Download the full version with all details, projects, and contact information.
                </p>
                <a
                  href="/portfolio/resume.pdf"
                  download
                  className="group inline-flex items-center gap-2.5 w-full justify-center px-6 py-3.5 bg-accent text-white font-body font-medium rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:shadow-xl"
                >
                  <Download size={16} className="group-hover:animate-bounce" />
                  Download PDF
                </a>
                <p className="font-mono text-xs text-slate-600 mt-4">Last updated: 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
