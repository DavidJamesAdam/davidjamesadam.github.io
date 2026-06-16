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
    <nav className="flex-1 py-4 flex gap-16 items-center px-5">
      <div className="w-auto">
        <Link
          href="/about"
          className={`link-styles ${isActive("/about") ? "active-link" : ""}`}
        >
          // About
        </Link>
      </div>

      <Link
        href="/projects"
        className={`link-styles ${isActive("/projects") ? "active-link" : ""}`}
      >
        // Projects
      </Link>

      <Link
        href="/contact"
        className={`link-styles ${isActive("/contact") ? "active-link" : ""}`}
      >
        // Contact
      </Link>
    </nav>
  );
};

export default Navbar;
