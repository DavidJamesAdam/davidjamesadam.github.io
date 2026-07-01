"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
          className={`font-space-grotesk hover:text-[#bc77e7] whitespace-nowrap text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl weathered-effect ${isActive(page.href) ? "text-[#bc77e7]" : ""}`}
        >
          <p>{page.title}</p>
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
