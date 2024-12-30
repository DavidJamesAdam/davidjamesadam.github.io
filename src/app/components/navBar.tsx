import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark bg-opacity-75 text-light">
        <div className="container">
          <Link className="navbar-brand text-light font-bold" href="/">
            Home
          </Link>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/projects" className="nav-item nav-link text-light">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-item nav-link text-light">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
