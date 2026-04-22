import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Code2 } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-16"
    >
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4f8ef7 1px, transparent 1px), linear-gradient(to right, #4f8ef7 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          {...fadeUp(0.1)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          Available for internships & opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.2)}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none mb-4"
        >
          <span className="text-gradient">Yashovardhan</span>
          <br />
          <span className="text-white">Singh</span>
        </motion.h1>

        {/* Title */}
        <motion.div {...fadeUp(0.3)} className="mb-6">
          <p className="font-mono text-sm sm:text-base text-accent tracking-widest uppercase mb-2">
            BTech CSE Student · Aspiring Software Engineer
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.4)}
          className="font-body text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Building scalable systems and intuitive interfaces — one commit at a
          time. Passionate about backend architecture, modern web development,
          and solving real-world problems through clean code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-7 py-3.5 bg-accent text-white font-body font-medium rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2"
          >
            <Code2 size={16} />
            View My Work
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 bg-white/5 text-white font-body font-medium rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          {...fadeUp(0.6)}
          className="flex items-center justify-center gap-5"
        >
          {[
            {
              icon: Github,
              label: "GitHub",
              href: "https://github.com/itsYashGitHub",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              href: "https://linkedin.com/in/yashovardhan-singh-",
            },
            {
              icon: Mail,
              label: "Email",
              href: "mailto:singhyashovardhan9@example.com",
            },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2.5 text-slate-500 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 border border-transparent hover:border-border"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
