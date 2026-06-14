/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href === "/" && pathname === "/");
  };

  return (
    <nav className="w-full py-4 flex justify-items-start gap-16 weathered-effect">
      <div className="link-wrapper">
        <Link href="/about" className={`link-styles ${isActive("/about") ? "active-link" : ""}`}>
          // About
        </Link>
      </div>
      <div className="link-wrapper">
        <Link href="/projects" className={`link-styles ${isActive("/projects") ? "active-link" : ""}`}>
          // Projects
        </Link>
      </div>
      <div className="link-wrapper">
        <Link href="/contact" className={`link-styles ${isActive("/contact") ? "active-link" : ""}`}>
          // Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
