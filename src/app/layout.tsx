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
    google: "VD0exI_wvMmDCLHLKowKwTzCHyAM0oRrlH9Htx7sBYQ",
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
