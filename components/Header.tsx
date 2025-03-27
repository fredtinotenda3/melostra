"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/src/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  name: string;
  path: string;
  subMenu?: NavItem[];
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount } = useCart();
  const pathname = usePathname();
  const headerHeight = 68;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Reset mobile menu and set CSS variable
  useEffect(() => {
    setIsOpen(false);
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerHeight}px`
    );
  }, [pathname]);

  const navLinks: NavItem[] = [
    {
      name: "Services",
      path: "/services",
      subMenu: [
        { name: "Professional Cleaning", path: "/services/cleaning" },
        { name: "Pest Control", path: "/services/pest-control" },
        { name: "Car Cleaning", path: "/services/car-cleaning" },
      ],
    },
    { name: "Products", path: "/products" },
    { name: "Training", path: "/training" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    const basePath = path.split("/")[1];
    const currentBase = pathname.split("/")[1];
    return pathname === path || (basePath === currentBase && path !== "/")
      ? "text-blue-300 font-medium"
      : "text-white hover:text-blue-300";
  };

  const renderMobileLinks = (links: NavItem[]) => {
    return links.map((link) => (
      <div key={link.path} className="w-full">
        <Link
          href={link.path}
          className={`text-lg px-4 py-3 rounded-lg ${isActive(
            link.path
          )} flex items-center justify-between hover:bg-blue-800 transition-colors w-full`}
          onClick={() => setIsOpen(false)}
        >
          <motion.span
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {link.name}
          </motion.span>
          {link.path === "/cart" && (
            <span className="bg-blue-300 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm">
              {cartCount}
            </span>
          )}
        </Link>
        {link.subMenu && (
          <div className="ml-4">{renderMobileLinks(link.subMenu)}</div>
        )}
      </div>
    ));
  };

  return (
    <header
      className={`bg-blue-900 fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
      style={{ height: headerHeight }}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:scale-105 transition-transform duration-200 hover:text-blue-200 relative"
          >
            Melostra
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: pathname === "/" ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 h-full">
            {navLinks.map((link) => (
              <div
                key={link.path}
                className="group relative h-full flex items-center"
                onMouseEnter={() => link.subMenu && setIsOpen(true)}
                onMouseLeave={() => link.subMenu && setIsOpen(false)}
              >
                <Link
                  href={link.path}
                  className={`group relative flex flex-col justify-center h-full px-3 ${isActive(
                    link.path
                  )}`}
                >
                  <motion.span
                    className="relative z-10"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.name}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-3 left-3 right-3 h-[2px] bg-blue-300 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: pathname === link.path ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Link>

                {link.subMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 hidden group-hover:block bg-blue-900 shadow-lg min-w-[200px] rounded-b-lg overflow-hidden"
                  >
                    {link.subMenu.map((subLink) => (
                      <Link
                        key={subLink.path}
                        href={subLink.path}
                        className={`block px-6 py-3 ${isActive(
                          subLink.path
                        )} hover:bg-blue-800 transition-colors`}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link
              href="/cart"
              className={`flex items-center gap-2 ${isActive(
                "/cart"
              )} hover:text-blue-200 transition-colors`}
              aria-label={`Cart: ${cartCount} items`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <ShoppingCart className="w-5 h-5 text-white" />
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2"
                  >
                    <span className="bg-blue-300 text-blue-900 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shadow-sm hover:bg-blue-200 transition-colors">
                      {cartCount}
                    </span>
                  </motion.span>
                )}
              </motion.div>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-blue-300 transition-colors rounded-lg hover:bg-blue-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden absolute inset-x-0 bg-blue-900 shadow-lg"
              style={{ top: headerHeight }}
            >
              <nav className="flex flex-col gap-2 text-white p-4 border-t border-blue-700">
                {renderMobileLinks([
                  ...navLinks,
                  { name: "Cart", path: "/cart" },
                ])}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
