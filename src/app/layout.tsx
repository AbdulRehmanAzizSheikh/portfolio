import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Abdul Rehman - Portfolio",
  description:
    "Personal Portfolio of Abdul Rehman Aziz Sheikh - MERN Stack Web Developer",
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
