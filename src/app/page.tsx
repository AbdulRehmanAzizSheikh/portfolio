import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0a0a] selection:bg-neon-cyan/30 selection:text-white">
      <Navbar />
      <Hero key="hero-v1" />
      <About />
      <Skills />
      <Projects />
      <Education />
      
      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 mt-20">
        <p className="text-text-secondary text-sm">
          Built with Next.js, Tailwind CSS & Framer Motion.<br/>
          &copy; {new Date().getFullYear()} Abdul Rehman Aziz Sheikh. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
