"use client";

import { motion } from "framer-motion";
import { CodeXml, Briefcase, Mail, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "Web Developer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "Express.js Developer",
  "MongoDB Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1),
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Particles/Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background hidden md:block"></div>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[40vw] h-[40vw] bg-neon-cyan/5 rounded-full blur-[100px]"></div>
        <div className="w-[30vw] h-[30vw] bg-neon-purple/5 rounded-full blur-[100px] -ml-[10vw]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-neon-cyan font-mono mb-4 block">
            Hi, my name is
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight text-foreground"
        >
          <span className="neon-text-cyan hover:text-white transition-colors duration-300">
            Abdul Rehman
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="min-h-[4rem] md:h-20 mb-8 flex items-center justify-center"
        >
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-secondary">
            I am a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-neon-purple">
              {text}
            </span>
            <span className="animate-ping border-r-2 border-neon-cyan inline-block h-6 md:h-8 ml-1 align-middle"></span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl text-text-secondary text-base sm:text-lg mb-10 px-4"
        >
          I build modern web applications. Currently focused on expanding my
          skills as a MERN Stack Developer. Exploring clean code, modern
          aesthetics, and performant user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group px-8 py-3 rounded-md bg-transparent border border-neon-cyan text-neon-cyan font-medium flex items-center justify-center neon-glow-cyan-hover transition-all duration-300"
          >
            View Projects
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex space-x-6"
        >
          <a
            href="https://github.com/AbdulRehmanAzizSheikh"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 hover:scale-110 transform"
          >
            <CodeXml className="h-6 w-6" />
          </a>
          <a
            href="https://linkedin.com/in/abdulrehmanazizsheikh"
            target="_blank"
            rel="noreferrer"
            className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 hover:scale-110 transform"
          >
            <Briefcase className="h-6 w-6" />
          </a>
          <a
            href="mailto:abdulrehmanazizsheikh@gmail.com"
            className="text-text-secondary hover:text-neon-cyan transition-colors duration-300 hover:scale-110 transform"
          >
            <Mail className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
