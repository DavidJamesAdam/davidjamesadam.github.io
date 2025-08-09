import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-75 text-light">
        <div className="container flex justify-evenly w-full px-8 py-4">
          <Link href="/" className="navbar-brand text-light font-bold w-24">
            Home
          </Link>
          <Link href="/projects" className="nav-item nav-link text-light">
            Projects
          </Link>
          <Link href="/contact" className="nav-item nav-link text-light">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
