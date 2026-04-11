import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Rehman | Full-Stack MERN Developer",
  description:
    "Professional Full-Stack Developer specializing in MERN stack. I build unique, high-performance websites with free deployment.",

  // Open Graph (WhatsApp, LinkedIn, Facebook ke liye)
  openGraph: {
    title: "Abdul Rehman | Full-Stack MERN Developer",
    description:
      "Building unique & budget-friendly full-stack websites. Check out my projects!",
    url: "https://abdulrehmanazizsheikh.vercel.app/",
    siteName: "Abdul Rehman Portfolio",
    images: [
      {
        url: "https://abdulrehmanazizsheikh.vercel.app/og-image.jpg", // Yahan apni kisi acchi image ya screenshot ka link dein
        width: 1200,
        height: 630,
        alt: "Abdul Rehman Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter/Discord ke liye specific tags
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman | Full-Stack MERN Developer",
    description: "I build and deploy custom MERN stack websites.",
    images: ["https://abdulrehmanazizsheikh.vercel.app/og-image.jpg"],
  },

  verification: {
    google: "K7YIaX3Ejkkx2GzQAzlj-a7PKs_FgycE6TdTaP2itEg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground bg-[#0a0a0a]">
        {children}
      </body>
    </html>
  );
}
