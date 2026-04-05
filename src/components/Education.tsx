"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export default function Education() {
  const educationData = [
    {
      institution: "Saylani Mass IT Training (SMIT)",
      course: "Modern Web Application Development",
      duration: "Feb 2025 – Present",
      status: "In Progress",
      statusColor: "text-amber-400 font-semibold drop-shadow-[0_0_5px_rgba(251,191,36,0.8)]",
      statusBorder: "border-amber-400/50",
      icon: <GraduationCap className="h-6 w-6 text-neon-purple" />
    },
    {
      institution: "Cisco Networking Academy",
      course: "Web Development (HTML, CSS, JavaScript)",
      duration: "Oct 2024 – Dec 2024",
      status: "Certified",
      statusColor: "text-neon-cyan font-semibold drop-shadow-[0_0_5px_rgba(0,255,255,0.8)]",
      statusBorder: "border-neon-cyan/50",
      icon: <Award className="h-6 w-6 text-neon-cyan" />
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Education & <span className="neon-text-cyan">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative pl-8 md:pl-0 mb-12 last:mb-0"
            >
              <div className="md:flex items-center justify-between">
                {/* Timeline Line (Desktop view integration trick) */}
                <div className="hidden md:block w-2 bg-gradient-to-b from-neon-purple to-neon-cyan h-full absolute left-0 top-0 rounded-full"></div>
                
                <div className="w-full glassmorphism rounded-xl p-6 md:ml-6 relative group border-l-4 border-l-neon-cyan hover:border-l-neon-purple transition-colors duration-500 hover:shadow-[0_0_20px_rgba(0,255,255,0.1)]">
                  {/* Outer glowing dot for timeline - visible on mobile mostly */}
                  <div className="md:hidden absolute -left-10 top-6 w-4 h-4 rounded-full bg-neon-cyan shadow-[0_0_10px_#00FFFF]"></div>

                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-card-bg">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-foreground">
                        {item.course}
                      </h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-sm ${item.statusBorder} ${item.statusColor} bg-[#111111]/80 whitespace-nowrap`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="mb-2">
                    <h4 className="text-lg font-medium text-text-secondary group-hover:text-foreground transition-colors">
                      {item.institution}
                    </h4>
                  </div>
                  
                  <div className="text-sm font-mono text-text-secondary/70">
                    {item.duration}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
