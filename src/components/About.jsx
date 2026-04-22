import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Coffee, Zap } from "lucide-react";

const stats = [
  { value: "3rd", label: "Year BTech CSE" },
  { value: "5+", label: "Projects Built" },
  { value: "∞", label: "Curiosity Level" },
];

const highlights = [
  { icon: GraduationCap, text: "BTech CSE · CGPA 9.18" },
  { icon: MapPin, text: "India · Open to Remote & Relocation" },
  { icon: Coffee, text: "Backend-focused with full-stack experience" },
  { icon: Zap, text: "Experience in ML projects & system simulations" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-accent text-sm">01.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="font-body text-slate-300 text-lg leading-relaxed mb-5">
              I'm a third-year Computer Science undergraduate with a strong
              academic foundation (CGPA 9.18) and a focus on building reliable,
              scalable software systems. I enjoy working across backend and
              full-stack development, while also exploring the intersection of
              software and data-driven intelligence.
            </p>

            <p className="font-body text-slate-400 leading-relaxed mb-5">
              My experience spans developing secure Spring Boot applications,
              responsive React-based interfaces, and collaborating on machine
              learning projects such as car price prediction systems and
              simulation-based computing models. I’ve worked with real-world
              data, handled preprocessing and feature engineering, and
              integrated ML models into web applications.
            </p>

            <p className="font-body text-slate-400 leading-relaxed mb-10">
              Currently, I’m deepening my understanding of system design,
              backend architecture, and applied machine learning — with a focus
              on building efficient, production-ready systems that solve
              practical problems at scale.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-sm text-slate-400"
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon size={14} className="text-accent" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats card side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-col gap-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="glow-border rounded-2xl bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="font-display font-bold text-3xl text-gradient mb-1">
                    {value}
                  </div>
                  <div className="font-body text-xs text-slate-500 leading-tight">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* About card */}
            <div className="glow-border rounded-2xl bg-surface p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent opacity-[0.06] blur-3xl" />
              <div className="font-mono text-xs text-accent mb-4">
                // Who I am
              </div>
              <div className="space-y-2 font-mono text-sm">
                <div>
                  <span className="text-violet-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-white">= {"{"}</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">name:</span>{" "}
                  <span className="text-green-400">"Yashovardhan Singh"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">focus:</span>{" "}
                  <span className="text-green-400">"Backend + Fullstack"</span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">goal:</span>{" "}
                  <span className="text-green-400">
                    "Build things that matter"
                  </span>
                  <span className="text-white">,</span>
                </div>
                <div className="pl-4">
                  <span className="text-slate-500">status:</span>{" "}
                  <span className="text-amber-400">"Seeking internship"</span>
                </div>
                <div>
                  <span className="text-white">{"}"}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
