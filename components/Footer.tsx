import React from "react";
import Image from "next/image";

import "@/app/globals.css";
import "@/styles/components/Footer.css";

import logoDev from "@/public/images/icons/logo_dev.svg";

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="icon">
        <Image src={logoDev} alt="Logo" width={32} height={32} />
        <h3>Alejandro Suarez</h3>
      </div>

      <p className="copyright">
        &copy; <em>Alejandro Suarez Gonzalez</em>. All Rights Reserved. <br />
        Designed with passion and precision.
      </p>

      <div className="footer-links">
        <a
          href="https://github.com/ASuarez18"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="profile-icon"
          href="https://www.linkedin.com/in/alejandrosuarezgonzalez/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;