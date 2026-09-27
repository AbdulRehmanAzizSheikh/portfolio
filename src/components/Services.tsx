"use client";

import { motion } from "framer-motion";
import {
  Code,
  Bot,
  GitBranch,
  Database,
  Cloud,
  Zap,
  Globe,
  Shield,
  Smartphone,
  Layers,
  Terminal,
  Rocket,
  ShoppingCart,
} from "lucide-react";
import ServicesBackground3D from "./ServicesBackground3D";

const services = [
  {
    category: "Full-Stack Development",
    icon: Code,
    color: "neon-cyan",
    items: [
      {
        title: "MVP / Full Product Build",
        desc: "End-to-end product development — architecture, auth, APIs, admin, payments, CI/CD, deploy",
        stack: ["Next.js", "React", "TypeScript", "MongoDB", "PostgreSQL", "Supabase", "Tailwind"],
        price: "$2,000 - $15,000+",
        timeline: "4-12 weeks",
      },
      {
        title: "Feature Development & Sprint Work",
        desc: "Join your team for sprint-based feature delivery, API integration, optimization, bug fixes",
        stack: ["Next.js", "React", "TypeScript", "Node.js", "MongoDB", "PostgreSQL", "GitHub Actions"],
        price: "$25-40/hr or $3,000-6,000/mo",
        timeline: "Ongoing / per sprint",
      },
      {
        title: "Code Rescue, Audit & Migration",
        desc: "Next.js 13+ migration, JS→TS conversion, performance audit, security audit, technical debt",
        stack: ["Next.js", "React", "TypeScript", "MongoDB", "PostgreSQL", "Supabase", "Vercel"],
        price: "Audit: $500-1,500 | Migration: Project-based",
        timeline: "2-6 weeks",
      },
    ],
  },
  {
    category: "AI & LLM Integration",
    icon: Bot,
    color: "neon-purple",
    items: [
      {
        title: "RAG / Semantic Search",
        desc: "Vector databases, embeddings, hybrid search, reranking, caching for intelligent search",
        stack: ["Gemini API", "OpenAI API", "Supabase pgvector", "Pinecone", "MongoDB Atlas", "LangChain"],
        price: "$1,500 - $8,000+",
        timeline: "2-6 weeks",
      },
      {
        title: "Chatbots & Conversational AI",
        desc: "Function calling, structured outputs, streaming, guardrails, eval frameworks, tool use",
        stack: ["Vercel AI SDK", "LangChain", "LangGraph", "Next.js", "TypeScript"],
        price: "$1,500 - $8,000+",
        timeline: "2-6 weeks",
      },
      {
        title: "AI Agents & Workflows",
        desc: "Multi-step agents, human-in-the-loop, state management, observability, cost optimization",
        stack: ["LangGraph", "Vercel AI SDK", "Gemini", "OpenAI", "Supabase", "Next.js"],
        price: "$2,000 - $10,000+",
        timeline: "3-8 weeks",
      },
    ],
  },
  {
    category: "Telegram Bots & Automation",
    icon: Bot,
    color: "neon-blue",
    items: [
      {
        title: "Custom Telegram Bots",
        desc: "Full-featured bots with inline keyboards, web apps, payments, webhooks, databases",
        stack: ["Node.js", "Telegraf/grammy", "TypeScript", "MongoDB", "PostgreSQL", "Redis"],
        price: "$500 - $5,000+",
        timeline: "1-4 weeks",
      },
      {
        title: "Telegram Mini Apps (Web Apps)",
        desc: "React-based Mini Apps running inside Telegram — payments, auth, real-time sync",
        stack: ["React", "Next.js", "Telegram Web Apps SDK", "TypeScript", "Supabase"],
        price: "$1,000 - $8,000+",
        timeline: "2-6 weeks",
      },
      {
        title: "Automation & Integrations",
        desc: "Channel/post management, auto-forwarding, scheduled messages, API integrations",
        stack: ["Node.js", "Telegraf", "TypeScript", "Cron", "REST APIs", "Webhooks"],
        price: "$300 - $3,000+",
        timeline: "1-2 weeks",
      },
    ],
  },
  {
    category: "GitHub & DevOps Services",
    icon: GitBranch,
    color: "neon-green",
    items: [
      {
        title: "GitHub Actions CI/CD Setup",
        desc: "Automated testing, linting, building, preview deployments, production releases",
        stack: ["GitHub Actions", "Docker", "Vercel", "Netlify", "AWS", "TypeScript"],
        price: "$500 - $3,000+",
        timeline: "1-3 weeks",
      },
      {
        title: "Repository Architecture & Standards",
        desc: "Monorepo setup, branching strategy, code review automation, dependency management",
        stack: ["GitHub", "Turbo/Nx", "ESLint", "Prettier", "Husky", "Changesets"],
        price: "$500 - $2,500+",
        timeline: "1-2 weeks",
      },
      {
        title: "Open Source Project Maintenance",
        desc: "Issue triage, PR review, release management, documentation, community support",
        stack: ["GitHub", "GitHub Actions", "TypeScript", "Documentation", "Discord/Slack"],
        price: "$1,000-3,000/mo retainer",
        timeline: "Ongoing",
      },
    ],
  },
  {
    category: "3D & Interactive Web",
    icon: Layers,
    color: "neon-orange",
    items: [
      {
        title: "3D Product Configurators",
        desc: "Material/color selection, real-time price, AR-ready exports, mobile-optimized WebGL",
        stack: ["Three.js", "React Three Fiber", "Drei", "Framer Motion", "GSAP", "TypeScript"],
        price: "$2,000 - $12,000+",
        timeline: "3-8 weeks",
      },
      {
        title: "Scroll-Tied Animations & Effects",
        desc: "Framer Motion + R3F, performant on mobile, reduced motion support, GSAP scrollTrigger",
        stack: ["Framer Motion", "GSAP", "React Three Fiber", "Three.js", "Next.js"],
        price: "$1,500 - $8,000+",
        timeline: "2-6 weeks",
      },
      {
        title: "Data Visualization 3D",
        desc: "Interactive charts, globe visualizations, network graphs, real-time data rendering",
        stack: ["Three.js", "D3.js", "React Three Fiber", "WebGL Shaders", "TypeScript"],
        price: "$2,000 - $10,000+",
        timeline: "3-8 weeks",
      },
    ],
  },
  {
    category: "E-commerce & Payments",
    icon: ShoppingCart,
    color: "neon-pink",
    items: [
      {
        title: "Stripe / Payment Integration",
        desc: "Checkout, Subscriptions, Marketplace Connect, Webhooks, PCI compliance, Local PK gateways",
        stack: ["Stripe", "PayPal", "JazzCash", "Easypaisa", "Next.js", "TypeScript", "Webhooks"],
        price: "$1,500 - $5,000+",
        timeline: "2-4 weeks",
      },
      {
        title: "Custom E-commerce Platform",
        desc: "Cart, checkout, inventory, orders, admin dashboard, multi-vendor, subscriptions",
        stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "Tailwind"],
        price: "$3,000 - $20,000+",
        timeline: "6-16 weeks",
      },
    ],
  },
];

const processSteps = [
  { step: 1, title: "Discovery Call", desc: "15-30 min — understand goals, scope, timeline, budget. Free." },
  { step: 2, title: "Proposal & Agreement", desc: "Detailed spec, timeline, milestones, payment terms, NDA. Signed digitally." },
  { step: 3, title: "Kickoff & Architecture", desc: "DB schema, API design, component hierarchy, CI/CD setup. Week 1." },
  { step: 4, title: "Iterative Delivery", desc: "Weekly demos, feedback loops, deployed staging environment. Agile." },
  { step: 5, title: "Launch & Handoff", desc: "Production deploy, documentation, training, 30-day support included." },
];

const faqs = [
  { q: "Do you work onsite in Karachi?", a: "Yes — onsite (Karachi), remote (PKT/GMT+5), or hybrid. I'm flexible." },
  { q: "What's your availability?", a: "Immediate start for contract. Full-time roles: 2-week notice (currently freelancing)." },
  { q: "Do you sign NDAs?", a: "Yes, standard mutual NDA before any code/access sharing." },
  { q: "Payment terms?", a: "Contract: 50% upfront, 50% on delivery (or monthly for retainers). Full-time: per company policy. Wise / Bank transfer / Upwork." },
  { q: "What if I need changes after launch?", a: "30 days free support included. After that: hourly rate or new project scope." },
  { q: "Can you work with my existing team?", a: "Absolutely — I integrate into existing repos, workflows, and communication tools (Slack, Linear, Jira, GitHub)." },
  { q: "Do you do mobile apps?", a: "React Native for cross-platform. Native iOS/Android — not my focus." },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <ServicesBackground3D />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Development <span className="neon-text-cyan">Services</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full neon-glow-cyan" />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-lg">
            I build production-ready web applications with React, Next.js, and the MERN stack.
            30+ projects delivered — from AI-powered platforms to Telegram bots and immersive 3D experiences.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-16 mb-20">
          {services.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={`p-3 rounded-xl bg-card-bg shadow-inner shadow-${category.color}/20`}>
                  <category.icon className={`w-7 h-7 text-${category.color}`} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: catIndex * 0.1 + itemIndex * 0.05 }}
                    className="group relative flex flex-col bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="absolute top-4 right-4 z-10">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border bg-${category.color}/10 border-${category.color}/30 text-${category.color}`}>
                        {item.timeline}
                      </span>
                    </div>
                    <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                      <h4 className="mb-3 text-xl font-bold text-foreground">{item.title}</h4>
                      <p className="text-text-secondary flex-grow mb-5 leading-relaxed">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.stack.slice(0, 5).map((tech) => (
                          <span key={tech} className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300 bg-white/5 border-white/10 text-text-secondary hover:border-white/30 hover:text-white">
                            {tech}
                          </span>
                        ))}
                        {item.stack.length > 5 && (
                          <span className="text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border bg-white/5 border-white/10 text-text-secondary">
                            +{item.stack.length - 5} more
                          </span>
                        )}
                      </div>
                      <div className="mt-auto pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-neon-cyan">{item.price}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            How We <span className="neon-text-purple">Work Together</span>
          </h3>
          <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
            <div className="hidden min-[951px]:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple opacity-30 shadow-[0_0_10px_rgba(0,255,255,0.1)]" style={{ maskImage: "linear-gradient(to bottom, transparent, black 110px, black calc(100% - 110px), transparent)" }} />
            <div className="space-y-12">
              {processSteps.map((step, index) => {
                // Alternating zigzag: step 1 left, step 2 right, step 3 left...
                const isLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`relative mb-16 last:mb-0 flex flex-col min-[951px]:flex-row items-start min-[951px]:items-center ${
                      isLeft
                        ? "text-left"
                        : "text-left min-[951px]:flex-row-reverse min-[951px]:text-right"
                    }`}
                  >
                    <div className="hidden min-[951px]:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                      <div className="w-3.5 h-3.5 rounded-full border-2 bg-background relative border-neon-purple shadow-[0_0_12px_#A855F7]">
                        <div className="absolute inset-0.5 rounded-full animate-pulse bg-neon-purple" />
                      </div>
                    </div>
                    <div
                      className={`w-full min-[951px]:w-[45%] ${
                        isLeft ? "min-[951px]:pr-12" : "min-[951px]:pl-12"
                      }`}
                    >
                      <div className="glassmorphism p-6 sm:p-8 rounded-2xl relative group hover:border-transparent transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className={`flex flex-wrap justify-between items-start gap-4 mb-5 ${isLeft ? "" : "min-[951px]:flex-row-reverse"}`}>
                          <div className={`flex items-center space-x-3 ${isLeft ? "" : "min-[951px]:flex-row-reverse min-[951px]:space-x-reverse"}`}>
                            <div className="p-3 rounded-xl bg-[#111111] shadow-inner shadow-white/5 shrink-0">
                              <span className="text-2xl font-bold text-neon-cyan">{step.step}</span>
                            </div>
                            <h4 className="text-xl font-bold text-foreground leading-tight">{step.title}</h4>
                          </div>
                        </div>
                        <p className="text-text-secondary">{step.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Frequently Asked <span className="neon-text-cyan">Questions</span>
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group glassmorphism rounded-xl overflow-hidden border border-white/5"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-foreground pr-10">{faq.q}</span>
                  <span className="text-neon-cyan transition-transform group-open:rotate-180">▼</span>
                </summary>
                <div className="px-6 pb-6 text-text-secondary border-t border-white/5">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="neon-text-cyan">Build Together</span>?
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto mb-8">
            Let's discuss your project — no pressure, just a conversation about what's possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:coderabdulrehman@gmail.com?subject=Book%20a%2015-min%20Call&body=Hi%20Abdul%20Rehman%2C%0A%0AI%27d%20like%20to%20book%20a%2015-minute%20call%20to%20discuss%20my%20project.%0A%0AProject%20idea%3A%0APreferred%20time%20(slot)%3A%0A%0AThanks%21"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-white font-medium hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a 15-min Call
            </a>
            <a
              href="mailto:mail@abdulrehman.sbs?subject=Project%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-white/5 border border-white/10 text-white font-medium hover:border-white/30 hover:bg-white/10 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email Me
            </a>
            <a
              href="https://wa.me/923181272010"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-green-500/10 border border-green-500/30 text-white font-medium hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square" aria-hidden="true">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}