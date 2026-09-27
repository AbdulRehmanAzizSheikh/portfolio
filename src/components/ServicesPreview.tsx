"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code, Bot, GitBranch, Layers, Sparkles } from "lucide-react";

const serviceHighlights = [
  { icon: Code, title: "Full-Stack Development", desc: "MVP builds, feature sprints, code audits", color: "neon-cyan" },
  { icon: Bot, title: "AI & Telegram Bots", desc: "RAG, chatbots, agents, Mini Apps, automation", color: "neon-purple" },
  { icon: GitBranch, title: "GitHub & DevOps", desc: "CI/CD, repo architecture, open source maintenance", color: "neon-green" },
  { icon: Layers, title: "3D & Interactive Web", desc: "Product configurators, scroll animations, data viz", color: "neon-orange" },
];

export default function ServicesPreview() {
  return (
    <motion.section
      id="services-preview"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            Available for Freelance & Contract Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            I Build More Than <span className="neon-text-cyan">Portfolio Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full neon-glow-cyan" />
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            From AI-powered SaaS platforms to Telegram bots and 3D experiences — 
            I deliver production-ready solutions for startups, agencies, and businesses worldwide.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceHighlights.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-500 hover:border-transparent hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className={`p-3 rounded-xl bg-card-bg shadow-inner shadow-${service.color}/20 mb-4`}>
                <service.icon className={`w-6 h-6 text-${service.color}`} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-bold text-lg hover:from-purple-700 hover:to-cyan-700 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 group"
          >
            <span className="relative z-10">View All Services & Pricing</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <p className="mt-6 text-text-secondary text-sm">
            30+ projects delivered • Karachi-based • PKT/GMT+5 • Onsite & Remote
          </p>
        </div>
      </div>
    </motion.section>
  );
}