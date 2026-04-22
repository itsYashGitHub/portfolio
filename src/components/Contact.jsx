import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "singhyashovardhan9@gmail.com",
    href: "mailto:singhyashovardhan9@gmail.com",
    color: "#4f8ef7",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/itsYashGitHub",
    href: "https://github.com/itsYashGitHub",
    color: "#e2e8f0",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yashovardhan-singh-",
    href: "https://linkedin.com/in/yashovardhan-singh-",
    color: "#0ea5e9",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_zezup5o",
        "template_gmu5gc7",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "6kQi23mQRvqzx_GUI",
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Something went wrong. Try again.");
        },
      );
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-accent text-sm">05.</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Contact
          </h2>
          <div className="flex-1 h-px bg-border max-w-xs" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="font-body text-slate-400 mb-14 ml-10 max-w-xl"
        >
          Got an internship opportunity, project idea, or just want to say hi?
          I'd love to hear from you.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-5"
          >
            <div className="glow-border rounded-2xl bg-surface p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-accent opacity-[0.04] blur-3xl" />
              <h3 className="font-display font-bold text-xl text-white mb-2">
                Let's Connect
              </h3>
              <p className="font-body text-slate-400 text-sm leading-relaxed mb-8">
                I'm currently open to internship positions and collaborative
                projects. Whether you have a question or just want to say hi, my
                inbox is always open.
              </p>

              <div className="space-y-4">
                {contactLinks.map(
                  ({ icon: Icon, label, value, href, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={label !== "Email" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-4 rounded-xl bg-white/3 border border-border hover:border-accent/30 transition-all duration-200 hover:bg-white/5"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor: `${color}15`,
                          border: `1px solid ${color}25`,
                        }}
                      >
                        <Icon size={16} style={{ color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-mono text-xs text-slate-500 mb-0.5">
                          {label}
                        </p>
                        <p className="font-body text-sm text-slate-300 truncate">
                          {value}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={14}
                        className="text-slate-600 group-hover:text-accent transition-colors flex-shrink-0"
                      />
                    </a>
                  ),
                )}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="glow-border rounded-2xl bg-surface p-7">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-slate-200 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-slate-200 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-slate-200 placeholder-slate-600 font-body text-sm focus:outline-none focus:border-accent/50 focus:bg-white/8 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-accent text-white font-body font-medium rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/30 hover:shadow-xl disabled:opacity-50"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {sent ? (
                    <>
                      <span className="text-green-300">✓</span>
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send
                        size={16}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                      Send Message
                    </>
                  )}
                </button>

                <p className="font-mono text-xs text-slate-600 text-center">
                  Or email me directly — I usually respond within 24h.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
