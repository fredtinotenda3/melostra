// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

type NavLink = {
  name: string;
  path: string;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Booking", path: "/booking" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 50);
    const handleResize = () => window.innerWidth >= 768 && setIsOpen(false);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled ? "bg-blue-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-2 xs:px-4 sm:px-6 h-full">
        <div className="flex justify-between items-center h-14 sm:h-16 relative">
          <Link
            href="/"
            className="flex items-center gap-1 xs:gap-2"
            aria-label="Home"
          >
            <Image
              src="/logo.png"
              alt="Melostra Logo"
              width={32}
              height={32}
              className="h-8 w-8 xs:h-10 xs:w-10"
              priority
              sizes="(max-width: 183px) 32px, 40px"
            />
            <span
              className={`text-xl xs:text-2xl font-bold ${
                hasScrolled ? "text-white" : "text-black"
              }`}
            >
              Melostra
            </span>
          </Link>

          <nav className="hidden md:flex space-x-2 xs:space-x-4 sm:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-2 xs:px-3 py-1 xs:py-2 rounded-md text-xs xs:text-sm font-medium transition-colors ${
                  pathname === link.path
                    ? "bg-blue-800 text-white"
                    : `${
                        hasScrolled
                          ? "text-white hover:bg-blue-800"
                          : "text-black hover:bg-blue-100"
                      }`
                }`}
                aria-current={pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            className={`md:hidden p-1 xs:p-2 ${
              hasScrolled ? "text-white" : "text-black"
            } hover:text-blue-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5 xs:h-6 xs:w-6" aria-hidden="true" />
            )}
          </button>

          <div
            className={`md:hidden absolute top-full left-0 w-full bg-blue-900 transition-all duration-300 overflow-hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
            aria-hidden={!isOpen}
          >
            <nav className="px-1 xs:px-2 pt-1 xs:pt-2 pb-2 xs:pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-2 xs:px-3 py-1 xs:py-2 rounded-md text-sm xs:text-base font-medium ${
                    pathname === link.path
                      ? "bg-blue-800 text-white"
                      : "text-white hover:bg-blue-800"
                  }`}
                  aria-current={pathname === link.path ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
