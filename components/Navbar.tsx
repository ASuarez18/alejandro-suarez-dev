"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useState } from "react";

import "@/app/globals.css";
import "@/styles/components/Navbar.css";

import logoDev from "@/public/images/icons/logo_dev.svg";
import profilePic from "@/public/images/portraits/me.jpg";
import { Menu } from "lucide-react";

const routes = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "PROJECTS", path: "/projects" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="icon">
          <Image src={logoDev} alt="Logo" width={32} height={32} priority />
          <h3>Alejandro Suarez</h3>
        </div>

        <div className="buttons">
          {routes.map((route) => {
            const isActive =
              route.path === "/"
                ? pathname === "/"
                : pathname === route.path ||
                  pathname.endsWith(`/${route.name.toLowerCase()}`);

            return (
              <Link
                key={route.name}
                href={route.path}
                className={isActive ? "active" : ""}
              >
                {route.name}
              </Link>
            );
          })}

          <a
            className="profile-icon"
            href="https://www.linkedin.com/in/alejandrosuarezgonzalez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={profilePic}
              alt="Alejandro Suarez"
              width={40}
              height={40}
            />
          </a>
        </div>

        
        {/* <Image
          className={`menu-hamburger ${isMenuOpen ? "-rotate-90 transition-all ease-in duration-300 " : ""}`}
          onClick={toggleMenu}
          src={menuIcon}
          alt="Menu"
          width={24}
          height={24}
        /> */}
        <button onClick={toggleMenu} className="block md:hidden">
          <Menu size={32}  className={`text-primary-color transition-all ease-in duration-300 ${isMenuOpen ? "-rotate-90" : "rotate-0"}`} />
        </button>
      </nav>

        <div className={`fixed top-15 w-full h-full z-50 bg-background-color flex flex-col gap-8 items-center justfy-center pt-8! transition-all ease-in duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          {routes.map((route) => {
            const isActive =
              route.path === "/"
                ? pathname === "/"
                : pathname === route.path ||
                  pathname.endsWith(`/${route.name.toLowerCase()}`);

            return (
              <Link
                key={route.name}
                href={route.path}
                onClick={toggleMenu}
                className={`text-3xl font-secondary tracking-wider text-white cursor-pointer transition-all ease-in duration-300   ${isActive ? "text-primary-color! font-bold" : ""}`}
              >
                {route.name}
              </Link>
            );
          })}

          <a
            className={`text-3xl font-secondary tracking-wider text-white cursor-pointer transition-all ease-in duration-300`}
            href="https://www.linkedin.com/in/alejandrosuarezgonzalez/"
            target="_self"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className={`text-3xl font-secondary tracking-wider text-white cursor-pointer transition-all ease-in duration-300`}
            href="https://github.com/ASuarez18/"
            target="_self"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
    </>
  );
};

export default Navbar;
