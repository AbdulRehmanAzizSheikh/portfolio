"use client";

import { motion } from "framer-motion";
import { User, MapPin, Mail, Phone, Code2 } from "lucide-react";

export default function About() {
  const softSkills = [
    "Problem Solving",
    "Quick Learner",
    "Team Collaboration",
    "Time Management",
    "Communication",
    "Adaptability",
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            About <span className="neon-text-purple">Me</span>
          </h2>
          <div className="w-20 h-1 bg-neon-purple mx-auto rounded-full neon-glow-purple"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Profile Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 lg:col-span-4"
          >
            <div className="glassmorphism p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-purple transition-colors duration-500 rounded-2xl z-0"></div>
              <div className="relative z-10 flex flex-col space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-tr from-neon-purple to-neon-cyan rounded-full p-1 shadow-[0_0_20px_#A855F7]">
                  <div className="w-full h-full bg-card-bg rounded-full flex items-center justify-center">
                    <User className="h-16 w-16 text-foreground" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <User className="h-5 w-5 text-neon-purple" />
                    <span className="font-medium text-foreground">Abdul Rehman Aziz Sheikh</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <Code2 className="h-5 w-5 text-neon-cyan" />
                    <span>MERN Stack Web Developer</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <MapPin className="h-5 w-5 text-neon-purple" />
                    <span>Karachi, Pakistan</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <Mail className="h-5 w-5 text-neon-cyan" />
                    <span className="truncate">abdulrehmanazizsheikh@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-text-secondary">
                    <Phone className="h-5 w-5 text-neon-purple" />
                    <span>+92 318 1272010</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio and Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7 lg:col-span-8 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-text-secondary text-lg leading-relaxed">
                Motivated IT professional with core experience in web development. Currently enrolled in Modern Web Application Development at SMIT (Saylani Mass IT Training), Karachi. I am a quick learner with strong problem-solving and teamwork skills, passionate about building modern, scalable web applications and continuously improving my development skills.
              </p>
              
              <div className="p-4 rounded-lg bg-neon-cyan/5 border border-neon-cyan/20 inline-block shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                <p className="text-foreground font-medium flex items-center">
                  <span className="w-2 h-2 rounded-full bg-neon-cyan mr-3 animate-pulse"></span>
                  Currently learning the MERN Stack (MongoDB, Express, React, Node.js)
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 rounded-full border border-neon-purple/50 bg-neon-purple/5 text-sm font-medium text-text-secondary hover:text-foreground hover:border-neon-purple hover:shadow-[0_0_10px_#A855F7] transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
