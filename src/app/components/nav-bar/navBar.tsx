import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-dark bg-opacity-75 text-light py-4">
      <div className="flex justify-center items-center w-full gap-16">
        <Link href="/" className="text-light font-bold text-lg">
          Home
        </Link>
        <Link href="/projects" className="text-light text-lg">
          Projects
        </Link>
        <Link href="/contact" className="text-light text-lg">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
