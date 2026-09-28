import Navbar from "@/components/Navbar";
import Services from "@/components/Services";

export const metadata = {
  title: "Development Services | Abdul Rehman Aziz Sheikh",
  description:
    "Full-Stack Developer (MERN/Next.js) for hire. MVP builds, feature work, AI integration, Telegram bots, 3D web experiences, code audits, GitHub CI/CD. Karachi-based, remote-friendly. 30+ production projects.",
  openGraph: {
    title: "Development Services | Abdul Rehman Aziz Sheikh",
    description:
      "MERN/Next.js development services — MVP builds, AI integration, Telegram bots, 3D experiences, team augmentation.",
    url: "https://abdulrehman.sbs/services",
    siteName: "Abdul Rehman Portfolio",
    images: [{ url: "https://www.abdulrehman.sbs/og-services.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Development Services | Abdul Rehman Aziz Sheikh",
    description: "Full-Stack MERN/Next.js developer for hire. 30+ production projects.",
    images: ["https://www.abdulrehman.sbs/og-services.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function ServicesPage() {
  return (
    <main
      style={{ overflowX: "hidden" }}
      className="flex min-h-screen flex-col selection:bg-neon-cyan/30 selection:text-white"
    >
      <Navbar />
      <Services />
      <footer className="py-8 text-center border-t border-white/5 mt-20">
        <p className="text-text-secondary text-sm">
          Built with Next.js, Tailwind CSS & Framer Motion.
          <br />
          &copy; {new Date().getFullYear()} Abdul Rehman Aziz Sheikh. All rights reserved.
        </p>
      </footer>
    </main>
  );
}