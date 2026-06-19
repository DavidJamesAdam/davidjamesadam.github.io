/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href === "/" && pathname === "/");
  };

  return (
    <nav className="flex flex-1 md:gap-16 items-center py-4 px-5 justify-between md:justify-start">
      <Link
        href="/about"
        className={`link-styles weathered-effect ${isActive("/about") ? "active-link" : ""}`}
      >
        // About
      </Link>
      <Link
        href="/projects"
        className={`link-styles weathered-effect ${isActive("/projects") ? "active-link" : ""}`}
      >
        // Projects
      </Link>
      <Link
        href="/contact"
        className={`link-styles weathered-effect ${isActive("/contact") ? "active-link" : ""}`}
      >
        // Contact
      </Link>
      {/* <div className="flex flex-1 justify-end">
        <TerminalWindow />
      </div> */}
    </nav>
  );
};

export default Navbar;
