import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skillGroups = [
  {
    category: "Languages",
    color: "#4f8ef7",
    skills: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 75 },
      { name: "Python", level: 80 },
      { name: "SQL", level: 80 },
      { name: "C", level: 65 },
    ],
  },
  {
    category: "Frontend",
    color: "#34d399",
    skills: [
      { name: "React", level: 82 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML/CSS", level: 88 },
      { name: "JavaScript (DOM)", level: 75 },
    ],
  },
  {
    category: "Backend & Databases",
    color: "#a78bfa",
    skills: [
      { name: "Spring Boot", level: 85 },
      { name: "REST APIs", level: 85 },
      { name: "Node.js", level: 70 },
      { name: "MySQL", level: 80 },
      { name: "Flask", level: 65 },
    ],
  },
  {
    category: "Data & ML",
    color: "#22c55e",
    skills: [
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 70 },
      { name: "scikit-learn", level: 70 },
      { name: "Data Preprocessing", level: 75 },
      { name: "Feature Engineering", level: 70 },
    ],
  },
  {
    category: "Tools & Technologies",
    color: "#fb923c",
    skills: [
      { name: "Git / GitHub", level: 85 },
      { name: "Postman", level: 85 },
      { name: "IntelliJ IDEA", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="font-body text-sm text-slate-300">{name}</span>
        <span className="font-mono text-xs text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-accent text-sm">03.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Skills
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body text-slate-400 mb-14 ml-10 max-w-xl"
        >
          Technologies I work with and the proficiency I've built over time.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="glow-border rounded-2xl bg-surface p-7"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-7">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: group.color,
                    boxShadow: `0 0 8px ${group.color}80`,
                  }}
                />
                <h3
                  className="font-display font-semibold text-base"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={group.color}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pill badges row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap gap-2"
        >
          {[
            "Data Structures & Algorithms",
            "Object-Oriented Programming",
            "DBMS",
            "Operating Systems",
            "System Design Basics",
            "MVC Architecture",
            "RESTful APIs",
            "Machine Learning Fundamentals",
            "Data Analysis",
          ].map((tag) => (
            <span
              key={tag}
              className="px-3.5 py-1.5 text-xs font-mono rounded-full bg-white/5 text-slate-400 border border-white/8 hover:border-accent/30 hover:text-accent transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
