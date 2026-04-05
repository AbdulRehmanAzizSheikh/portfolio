"use client";

import { motion } from "framer-motion";
import { MonitorPlay, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <MonitorPlay className="w-6 h-6 text-neon-cyan" />,
      color: "cyan",
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-6 h-6 text-neon-purple" />,
      color: "purple",
      skills: ["Node.js", "Express.js"],
    },
    {
      title: "Database / Cloud",
      icon: <Database className="w-6 h-6 text-neon-cyan" />,
      color: "cyan",
      skills: ["MongoDB", "Firebase", "Supabase"],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-neon-purple" />,
      color: "purple",
      skills: ["Git", "GitHub", "Vercel", "Netlify", "Postman"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technical <span className="neon-text-cyan">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-neon-cyan mx-auto rounded-full neon-glow-cyan"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className={`glassmorphism rounded-2xl p-6 group transition-all duration-500 hover:border-transparent ${
                category.color === "cyan" ? "hover:shadow-[0_0_15px_#00FFFF]" : "hover:shadow-[0_0_15px_#A855F7]"
              }`}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-card-bg shadow-inner ${
                  category.color === "cyan" ? "shadow-neon-cyan/20" : "shadow-neon-purple/20"
                }`}>
                  {category.icon}
                </div>
                <h3 className={`text-xl font-semibold ${
                  category.color === "cyan" ? "group-hover:neon-text-cyan text-foreground" : "group-hover:neon-text-purple text-foreground"
                } transition-all duration-300`}>
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md bg-card-bg text-text-secondary border ${
                      category.color === "cyan" ? "border-neon-cyan/20" : "border-neon-purple/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
