import { useState } from "react";
import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">

      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm px-3 sm:px-5 lg:px-10">

        {/* Mobile Hamburger */}
        <div className="navbar-start lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost btn-circle"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <RxHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="navbar-start hidden lg:flex">
          <img
            src={Logo}
            alt="DevStack Logo"
            className="h-10 w-40 object-contain"
          />
        </div>

        {/* Mobile Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:hidden lg: mr-30">
          <img
            src={Logo}
            alt="DevStack Logo"
            className="h-8 sm:h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="font-bold text-[#DB2777]">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div className="navbar-end hidden lg:flex gap-3">
          <button className="btn btn-ghost">Sign In</button>

          <button className="btn btn-secondary rounded-3xl">
            Sign Up
          </button>
        </div>

        {/* SM Device */}
        <div className="navbar-end lg:hidden gap-1">
          <button className="btn btn-ghost btn-sm px-1 sm:px-2">
            Sign In
          </button>

          <button className="btn btn-secondary btn-sm rounded-3xl px-2 sm:px-3">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}

      
      {isMenuOpen && (
        <div className="lg:hidden bg-base-100 shadow-md border-t">
          <ul className="menu p-4 text-base">
            <li>
              <a className="font-bold text-[#DB2777]">
                Home
              </a>
            </li>

            <li>
              <a>
                Technologies
              </a>
            </li>

            <li>
              <a>
                Projects
              </a>
            </li>

            <li>
              <a>
                About
              </a>
            </li>

            <li>
              <a>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;