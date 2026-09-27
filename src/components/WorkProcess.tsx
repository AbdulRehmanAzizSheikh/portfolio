"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: 1,
    title: "Discovery Call",
    desc: "15-30 min free call — we understand your goals, scope, timeline and budget. No pressure, no commitment.",
  },
  {
    step: 2,
    title: "Proposal & Agreement",
    desc: "You get a detailed spec, timeline, milestones and payment terms. Everything signed digitally before we start.",
  },
  {
    step: 3,
    title: "Kickoff & Architecture",
    desc: "Database schema, API design, component hierarchy and CI/CD setup — solid foundations from week 1.",
  },
  {
    step: 4,
    title: "Iterative Delivery",
    desc: "Weekly demos, feedback loops and a deployed staging environment. You see progress every single week.",
  },
  {
    step: 5,
    title: "Launch & Handoff",
    desc: "Production deploy, full documentation, handover training and 30 days of free support after launch.",
  },
];

export default function WorkProcess() {
  return (
    <section id="process" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How We <span className="neon-text-purple">Work Together</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple-hover" />
          <p className="mt-6 text-text-secondary max-w-2xl mx-auto text-lg">
            We work for our clients — a clear, transparent process that turns your
            idea into a launched product. Here is exactly what happens after you reach out.
          </p>
        </div>

        <div className="relative px-2 sm:px-0">
          {/* Center timeline line */}
          <div
            className="hidden min-[951px]:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple opacity-30 shadow-[0_0_10px_rgba(0,255,255,0.1)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 110px, black calc(100% - 110px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 110px, black calc(100% - 110px), transparent)",
            }}
          />
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
                  {/* Timeline dot */}
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
                          <h3 className="text-xl font-bold text-foreground leading-tight">{step.title}</h3>
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

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-text-secondary mb-6">
            Ready to start? Book a free 15-minute call — I reply within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:coderabdulrehman@gmail.com?subject=Book%20a%2015-min%20Call&body=Hi%20Abdul%20Rehman%2C%0A%0AI%27d%20like%20to%20book%20a%2015-minute%20call%20to%20discuss%20my%20project.%0A%0AProject%20idea%3A%0APreferred%20time%20(slot)%3A%0A%0AThanks%21"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-white font-medium hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Book a 15-min Call
            </a>
            <a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-neon-cyan text-black font-medium hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              View All Services
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
