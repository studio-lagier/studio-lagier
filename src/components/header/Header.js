import React, { useState } from "react";
import cn from "classnames";
import { Link } from "../Router";
import Hamburger from "./Hamburger";

function NavItem({ children, className, bigPadding, onClick }) {
  return (
    <li
      onClick={onClick}
      className={cn(
        `md:py-0 md:px-3 lg:px-6 text-xl font-bold text-lightergrey hover:text-darkergrey antialiased ${className}`,
        {
          "py-5": bigPadding,
          "py-2": !bigPadding,
          "md:py-2": !bigPadding,
        }
      )}
    >
      {children}
    </li>
  );
}

// TODO: Better keyboard support
export default function Nav() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);
  const closeMobileNav = () => setMobileNavOpen(false);
  return (
    <div className="border-b border-gray-300 fixed top-0 left-0 right-0 z-10 bg-white h-20">
      <div className="max-w-6xl mx-auto flex justify-between py-4 pl-8 md:px-8">
        <Link to="/" className="text-3xl font-bold">
          <span className="text-dark">Studio</span>{" "}
          <span className="text-afternoon">Lagier</span>
        </Link>
        <Hamburger
          className="md:hidden absolute top-0 right-0 z-20"
          isOpen={mobileNavOpen}
          onClick={toggleMobileNav}
        />
        <nav
          className={cn(
            "h-full",
            "md:h-auto",
            "fixed",
            "md:relative",
            "md:right-auto",
            "top-0",
            "md:top-auto",
            "z-10",
            "md:z-auto",
            "w-full",
            "md:w-auto",
            "pt-12",
            "md:pt-0",
            "slide-nav",
            "bg-white",
            {
              open: mobileNavOpen,
            }
          )}
        >
          <ul className="flex flex-col md:flex-row items-center">
            <NavItem onClick={closeMobileNav}>
              <a href="#services">Services</a>
            </NavItem>
            <NavItem onClick={closeMobileNav}>
              <a href="#portfolio">Portfolio</a>
            </NavItem>
            <NavItem onClick={closeMobileNav}>
              <a href="#about">About</a>
            </NavItem>
            <NavItem onClick={closeMobileNav}>
              <a
                href="https://medium.com/@LagierAndLagier"
                target="_blank"
                rel="noreferrer"
              >
                Blog
              </a>
            </NavItem>
            <NavItem
              className="primary-button mt-3 md:mt-0 ml-3 md:ml-6"
              onClick={closeMobileNav}
            >
              <a className="text-white hover:text-white" href="#contact">
                Get in touch
              </a>
            </NavItem>
          </ul>
        </nav>
      </div>
    </div>
  );
}
