"use client";

import { motion } from "framer-motion";
import { CodeXml, ExternalLink, Sparkles, Zap, Globe } from "lucide-react";
import { useState } from "react";

type ProjectCategory = "All" | "Full-Stack" | "SaaS" | "3D/Animation" | "Business";

interface Project {
  title: string;
  isLogoTitle?: boolean;
  description: string;
  tech: string[];
  github: string;
  live: string;
  color: string;
  category: ProjectCategory;
  featured?: boolean;
  badge?: string;
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("All");

  const projects: Project[] = [
    {
      title: "MaintainIQ",
      isLogoTitle: true,
      description:
        "Enterprise-grade full-stack management platform with JWT authentication, QR code generation, Cloudinary image uploads, and real-time analytics dashboard powered by Recharts.",
      tech: ["Next.js 16", "MongoDB", "JWT", "Cloudinary", "Recharts", "Nodemailer"],
      github: "https://github.com/AbdulRehmanAzizSheikh/MaintainIQ",
      live: "https://maintainiq.abdulrehman.sbs",
      color: "purple",
      category: "Full-Stack",
      featured: true,
      badge: "Featured",
    },
    {
      title: "Helplytics AI",
      isLogoTitle: true,
      description:
        "AI-powered analytics SaaS platform featuring secure user authentication, data visualization dashboards, and protected RESTful API endpoints with Express.js backend.",
      tech: ["React", "Vite", "Supabase", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/AbdulRehmanAzizSheikh/Helplytics-AI",
      live: "https://helplytics-ai.vercel.app",
      color: "cyan",
      category: "SaaS",
      featured: true,
      badge: "SaaS",
    },
    {
      title: "Karachi Fiber Doors",
      isLogoTitle: false,
      description:
        "Immersive 3D business website featuring interactive Three.js animations, React Three Fiber integration, smooth page transitions with Framer Motion, and contact form automation.",
      tech: ["Next.js", "Three.js", "React Three Fiber", "Framer Motion", "Nodemailer"],
      github: "https://github.com/AbdulRehmanAzizSheikh/karachi-fiber-doors",
      live: "https://karachi-fiber-doors.vercel.app",
      color: "green",
      category: "3D/Animation",
      featured: true,
      badge: "3D",
    },
    {
      title: "PostHub",
      isLogoTitle: true,
      description:
        "Full-stack social media platform with user authentication, post/blog publishing system, like functionality, and real-time profile management using Supabase backend.",
      tech: ["React", "Supabase", "CSS3", "RESTful API"],
      github: "https://github.com/AbdulRehmanAzizSheikh/smitPostHubSupabase",
      live: "https://smitposthubsupabase.vercel.app",
      color: "purple",
      category: "Full-Stack",
    },
    {
      title: "ROLEX Showcase",
      isLogoTitle: false,
      description:
        "Premium luxury watch showcase website with elegant UI design, smooth animations, and responsive layout demonstrating advanced CSS techniques and modern web design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      github: "https://github.com/AbdulRehmanAzizSheikh/ROLEX",
      live: "https://rolex-watch-premium.vercel.app",
      color: "orange",
      category: "Business",
    },
    {
      title: "Online Clinic",
      isLogoTitle: false,
      description:
        "Healthcare management platform with appointment booking system, patient management, and modern responsive interface for clinic operations.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/AbdulRehmanAzizSheikh/online-clinic",
      live: "https://online-clinic-rho.vercel.app",
      color: "cyan",
      category: "Business",
    },
  ];

  const categories: ProjectCategory[] = ["All", "Full-Stack", "SaaS", "3D/Animation", "Business"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const getGlowColor = (color: string) => {
    const colors: Record<string, string> = {
      cyan: "hover:shadow-[0_0_20px_rgba(0,255,255,0.3)]",
      orange: "hover:shadow-[0_0_20px_rgba(255,165,0,0.3)]",
      green: "hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]",
      purple: "hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    };
    return colors[color] || colors.purple;
  };

  const getBadgeIcon = (badge?: string) => {
    if (badge === "Featured") return <Sparkles className="w-3 h-3" />;
    if (badge === "SaaS") return <Zap className="w-3 h-3" />;
    if (badge === "3D") return <Globe className="w-3 h-3" />;
    return null;
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="neon-text-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple"></div>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            Production-ready applications built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-white shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  : "bg-white/5 border border-white/10 text-text-secondary hover:border-white/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredProjects.map((project, index) => {
            // Bento grid layout variations
            const isLarge = project.featured && index === 0;
            const isWide = project.featured && index === 1;
            
            return (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`group relative flex flex-col bg-[#111111]/80 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-500 ${getGlowColor(project.color)} ${
                  isLarge ? "md:col-span-2 md:row-span-1" : isWide ? "md:col-span-2" : ""
                }`}
              >
                {/* Glassmorphism overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Featured badge */}
                {project.badge && (
                  <div className={`absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-md border ${
                    project.color === "cyan"
                      ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-400"
                      : project.color === "green"
                      ? "bg-green-500/10 border-green-500/30 text-green-400"
                      : project.color === "orange"
                      ? "bg-orange-500/10 border-orange-500/30 text-orange-400"
                      : "bg-purple-500/10 border-purple-500/30 text-purple-400"
                  }`}>
                    {getBadgeIcon(project.badge)}
                    {project.badge}
                  </div>
                )}

                <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
                  {project.isLogoTitle ? (
                    <h3 className="mb-4">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#00FFFF] text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {project.title}
                      </span>
                    </h3>
                  ) : (
                    <h3
                      className={`text-2xl font-bold mb-4 text-foreground ${project.color} transition-colors`}
                    >
                      {project.title}
                    </h3>
                  )}
                  <p className="text-text-secondary flex-grow mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Tech badges with pill styling */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                          project.color === "cyan"
                            ? "bg-cyan-500/5 border-cyan-500/20 text-cyan-400 hover:border-cyan-500/40"
                            : project.color === "green"
                            ? "bg-green-500/5 border-green-500/20 text-green-400 hover:border-green-500/40"
                            : project.color === "orange"
                            ? "bg-orange-500/5 border-orange-500/20 text-orange-400 hover:border-orange-500/40"
                            : "bg-purple-500/5 border-purple-500/20 text-purple-400 hover:border-purple-500/40"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer with links */}
                <div className="px-6 sm:px-8 py-5 border-t border-white/5 bg-white/[0.02] flex justify-between items-center relative z-10">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center text-sm font-medium text-text-secondary hover:text-foreground transition-colors group/link"
                  >
                    <CodeXml className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center text-sm font-medium transition-all group/link ${
                      project.color === "cyan"
                        ? "text-cyan-400 hover:text-cyan-300"
                        : project.color === "green"
                        ? "text-green-400 hover:text-green-300"
                        : project.color === "orange"
                        ? "text-orange-400 hover:text-orange-300"
                        : "text-purple-400 hover:text-purple-300"
                    }`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/AbdulRehmanAzizSheikh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-white font-medium hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300"
          >
            <CodeXml className="w-5 h-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
