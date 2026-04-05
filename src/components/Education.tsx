"use client";

import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";

export default function Education() {
  const educationData = [
    {
      institution: "Saylani Mass IT Training (SMIT)",
      course: "Modern Web Application Development",
      duration: "Feb 2025 – Present",
      status: "In Progress",
      statusColor:
        "text-amber-400 font-semibold drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]",
      statusBorder: "border-amber-400/40",
      icon: <FaUserGraduate className="h-6 w-6 text-neon-purple shrink-0" />,
    },
    {
      institution: "Cisco Networking Academy",
      course: "Web Development (HTML, CSS, JavaScript)",
      duration: "Oct 2024 – Dec 2024",
      status: "Certified",
      statusColor:
        "text-neon-cyan font-semibold drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]",
      statusBorder: "border-neon-cyan/40",
      icon: <MdWorkspacePremium className="h-6 w-6 text-neon-cyan shrink-0" />,
    },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-neon-purple/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-neon-cyan/5 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight px-2">
            Education & <span className="neon-text-cyan">Certifications</span>
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full neon-glow-cyan shadow-[0_0_15px_rgba(0,255,255,0.5)]"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative px-2 sm:px-0">
          {/* Main Timeline Vertical Line: Fades at top and bottom for premium feel */}
          <div
            className="hidden min-[951px]:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-purple via-neon-cyan to-neon-purple opacity-30 shadow-[0_0_10px_rgba(0,255,255,0.1)]"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent, black 110px, black calc(100% - 110px), transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 110px, black calc(100% - 110px), transparent)",
            }}
          ></div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 last:mb-0 flex flex-col min-[951px]:flex-row items-start min-[951px]:items-center ${
                index % 2 === 0
                  ? "min-[951px]:flex-row-reverse text-left min-[951px]:text-right"
                  : "text-left"
              }`}
            >
              {/* Timeline Dot with Multi-layered Glow */}
              <div className="hidden min-[951px]:block absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 bg-background relative ${
                    index % 2 === 0
                      ? "border-neon-purple shadow-[0_0_12px_#A855F7]"
                      : "border-neon-cyan shadow-[0_0_12px_#00FFFF]"
                  }`}
                >
                  <div
                    className={`absolute inset-0.5 rounded-full animate-pulse ${
                      index % 2 === 0 ? "bg-neon-purple" : "bg-neon-cyan"
                    }`}
                  ></div>
                </div>
              </div>

              {/* Card Container */}
              <div
                className={`w-full min-[951px]:w-[45%] ${
                  index % 2 === 0 ? "min-[951px]:pr-12" : "min-[951px]:pl-12"
                }`}
              >
                <div className="glassmorphism p-6 sm:p-8 rounded-2xl relative group hover:border-transparent transition-all duration-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] overflow-hidden">
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div
                    className={`flex flex-wrap justify-between items-start gap-4 mb-5 ${
                      index % 2 === 0
                        ? "min-[951px]:flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex items-center space-x-3 ${
                        index % 2 === 0
                          ? "min-[951px]:flex-row-reverse min-[951px]:space-x-reverse"
                          : "flex-row"
                      }`}
                    >
                      <div className="p-3 rounded-xl bg-[#111111] shadow-inner shadow-white/5 shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight">
                        {item.course}
                      </h3>
                    </div>
                    <span
                      className={`px-4 py-1.5 rounded-full border-2 text-xs sm:text-sm font-bold bg-[#050505]/90 backdrop-blur-md ${item.statusBorder} ${item.statusColor} shadow-lg whitespace-nowrap`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-lg min-[951px]:text-xl font-semibold text-text-secondary group-hover:text-foreground transition-colors duration-300">
                      {item.institution}
                    </h4>
                  </div>

                  <div className="inline-flex items-center text-sm font-mono text-neon-cyan/70 bg-neon-cyan/5 px-3 py-1 rounded-md border border-neon-cyan/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan mr-2 animate-pulse"></span>
                    {item.duration}
                  </div>
                </div>
              </div>

              {/* Mobile Line Fix Spacer */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
