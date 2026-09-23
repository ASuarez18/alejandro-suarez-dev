import React from "react";
import Image from "next/image";
import Link from "next/link";

import "@/app/globals.css";
import "@/styles/components/Navbar.css";

import logoDev from "@/public/images/icons/logo_dev.svg";
import profilePic from "@/public/images/portraits/me.jpg";
import menuIcon from "@/public/images/icons/menu.svg";

export const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="icon">
        <Image src={logoDev} alt="Logo" width={32} height={32} priority />
        <h3>Alejandro Suarez</h3>
      </div>

      <div className="buttons">
        <Link href="/">HOME</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/experience" className="active">
          EXPERIENCE
        </Link>
        <Link href="/projects">PROJECTS</Link>

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