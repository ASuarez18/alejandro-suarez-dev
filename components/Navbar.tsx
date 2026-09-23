"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

import "@/app/globals.css";
import "@/styles/components/Navbar.css";

import logoDev from "@/public/images/icons/logo_dev.svg";
import profilePic from "@/public/images/portraits/me.jpg";
import menuIcon from "@/public/images/icons/menu.svg";

const routes = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "PROJECTS", path: "/projects" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();

  return (
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

      <Image
        className="menu-hamburger"
        src={menuIcon}
        alt="Menu"
        width={24}
        height={24}
      />
    </nav>
  );
};

export default Navbar;
