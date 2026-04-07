"use client";

import { motion } from "framer-motion";
import { CodeXml, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "PostHub",
      isLogoTitle: true,
      description:
        "A full-stack social media application for publishing posts and blogs. Features user authentication, post liking, and profile management for content creators.",
      tech: ["React", "Supabase", "CSS 3"],
      github: "https://github.com/AbdulRehmanAzizSheikh/smitPostHubSupabase",
      live: "https://smitposthubsupabase.vercel.app/",
      color: "purple",
    },
    {
      title: "E-Commerce App",
      isLogoTitle: false,
      description:
        "A complete e-commerce website featuring a shopping cart and user functionality like login/signup utilizing localStorage. New products can be added via the /addProduct route.",
      tech: ["React", "CSS 3", "localStorage"],
      github: "https://github.com/AbdulRehmanAzizSheikh/smitECommerceWebReact",
      live: "https://smitecommercewebreact.vercel.app/",
      color: "cyan",
    },
    {
      title: "Restaurant App clone",
      isLogoTitle: false,
      description:
        "Javed Nihari Restaurant Website Clone App was created as an assignment",
      tech: ["React", "CSS 3"],
      github: "https://github.com/AbdulRehmanAzizSheikh/smitRestaurantWebReact",
      live: "https://smitrestaurantwebreact.vercel.app/",
      color: "orange",
    },
  ];

  return (
    <section id="projects" className="py-20 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="neon-text-purple">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col h-full bg-[#111111] border border-white/5 rounded-2xl overflow-hidden group hover:border-transparent transition-all duration-300 ${
                project.color === "cyan"
                  ? "hover:shadow-[0_0_15px_#00FFFF]"
                  : project.color === "orange"
                    ? "hover:shadow-[0_0_15px_#FFA500]"
                    : project.color === "green"
                      ? "hover:shadow-[0_0_15px_#00FF00]"
                      : "hover:shadow-[0_0_15px_#A855F7]"
              }`}
            >
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                {project.isLogoTitle ? (
                  <h3 className="mb-3">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#00FFFF] text-2xl sm:text-3xl font-extrabold tracking-tight">
                      {project.title}
                    </span>
                  </h3>
                ) : (
                  <h3
                    className={`text-2xl font-bold mb-3 text-foreground ${
                      project.color
                    } transition-colors`}
                  >
                    {project.title}
                  </h3>
                )}
                <p className="text-text-secondary flex-grow mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className={`text-xs font-medium px-2.5 py-1 rounded-md bg-white/5 border ${
                        project.color === "cyan"
                          ? "border-neon-cyan/20 text-neon-cyan"
                          : "border-neon-purple/20 text-neon-purple"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 border-t border-white/5 bg-white/[0.02] flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center text-sm font-medium text-text-secondary hover:text-foreground transition-colors"
                >
                  <CodeXml className="w-4 h-4 mr-2" />
                  Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center text-sm font-medium transition-colors ${project.color}-live-demo`}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
