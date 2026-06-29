"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const Navbar = () => {
  const pages = [
    { href: "/home", title: "// Home" },
    { href: "/about", title: "// About" },
    { href: "/projects", title: "// Projects" },
    { href: "/contact", title: "// Contact" },
  ];
  const pathname = usePathname();

  const isActive = (href: string) => {
    return pathname === href || (href === "/" && pathname === "/");
  };

  return (
    <nav className="flex flex-1 md:gap-16 items-center py-4 md:px-5 justify-around md:justify-start bg-black">
      {pages.map((page, index) => (
        <Link
          href={page.href}
          key={index}
          className={`link-styles weathered-effect ${isActive(page.href) ? "active-link" : ""}`}
        >
          <p>{page.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
