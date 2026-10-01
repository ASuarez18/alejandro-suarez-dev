import type { Metadata } from "next";
import { Aldrich, Fira_Code, Tektur, Tourney } from "next/font/google";
import "@/app/globals.css";
import "@/styles/pages/home.css";
import "@/styles/pages/projects.css";
import "@/styles/pages/experience.css";
import "@/styles/pages/about.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const aldrich = Aldrich({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-primary",
});

const tourney = Tourney({
  subsets: ["latin"],
  variable: "--font-impact",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-secondary",
});

const tektur = Tektur({
  subsets: ["latin"],
  variable: "--font-tertiary",
});

export const metadata: Metadata = {
  title: "Alejandro Suarez DEV",
  description:
    "Welcome to my personal portfolio website! I'm a passionate Full-Stack Developer specializing in building high-performance web applications and exceptional digital experiences. Explore my projects, experience, and skills as I craft scalable digital solutions with a human-centric approach.",
    icons: {
      icon: [
        { url: "/favicon.svg", sizes:"32x32" ,type: "image/x-icon" },
        { url: "/favicon.svg", type: "image/svg+xml" },
      ]
    }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${aldrich.variable} ${tourney.variable} ${firaCode.variable} ${tektur.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
