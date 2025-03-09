"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-blue-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo and Company Name */}
        <h1 className="text-2xl font-bold">Melostra</h1>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Menu */}
        <div
          className={`absolute top-full left-0 w-full bg-blue-900 md:static md:w-auto md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
            {[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: "Products", path: "/products" },
              { name: "Pest Control", path: "/pest-control" },
              { name: "About Us", path: "/about" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`block p-2 rounded transition-colors ${
                    pathname === link.path
                      ? "bg-blue-800" // Darker blue for active state
                      : "hover:bg-blue-700" // Slightly lighter blue for hover state
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;