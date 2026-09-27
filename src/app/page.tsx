import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ServicesPreview from "@/components/ServicesPreview";
import Education from "@/components/Education";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import ServicesBackground3D from "@/components/ServicesBackground3D";

export default function Home() {
  return (
    <main
      style={{ overflowX: "hidden" }}
      className="flex min-h-screen flex-col selection:bg-neon-cyan/30 selection:text-white"
    >
      {/* 3D cursor-tracking background — poore homepage par */}
      <ServicesBackground3D />
      <Navbar />
      <Hero key="hero-v1" />
      <About />
      <Skills />
      <Projects />
      <ServicesPreview />
      <Education />
      <WorkProcess />
      <Contact />

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 mt-20 relative z-10">
        <p className="text-text-secondary text-sm">
          Built with Next.js, Tailwind CSS & Framer Motion.
          <br />
          &copy; {new Date().getFullYear()} Abdul Rehman Aziz Sheikh. All rights
          reserved.
        </p>
      </footer>
    </main>
  );
}
