"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/#home", section: "home" },
  { name: "About", href: "/#about", section: "about" },
  { name: "Skills", href: "/#skills", section: "skills" },
  { name: "Projects", href: "/#projects", section: "projects" },
  { name: "Services", href: "/services", section: "services" },
  { name: "Education", href: "/#education", section: "education" },
  { name: "Contact", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const updateSectionFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", updateSectionFromHash);

    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    updateSectionFromHash();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", updateSectionFromHash);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a
              href="/#home"
              className="text-3xl font-bold text-foreground neon-text-cyan flex items-center"
            >
              <img className="w-10 h-10" src="favicon.ico" alt="A" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`transition-all duration-300 font-medium ${
                    isActive
                      ? "text-neon-cyan neon-text-cyan border-b-2 border-neon-cyan pb-1"
                      : "text-text-secondary hover:text-neon-cyan hover:neon-text-cyan"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a
              href="/#contact"
              className="px-4 py-2 rounded-full bg-neon-cyan text-black font-semibold neon-glow-cyan-hover transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-neon-cyan focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden glassmorphism mt-2 pb-4 px-4 space-y-2 rounded-b-xl"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.section;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive
                    ? "text-neon-cyan neon-text-cyan border-l-4 border-neon-cyan pl-2 bg-white/5"
                    : "text-text-secondary hover:text-neon-cyan hover:neon-text-cyan"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </motion.div>
      )}
    </motion.nav>
  );
}
