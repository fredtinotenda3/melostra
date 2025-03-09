'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname(); // Get the current route for active link styling

  return (
    <footer className="bg-blue-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-8">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className={`hover:underline ${
                    pathname === "/" ? "font-semibold" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className={`hover:underline ${
                    pathname === "/services" ? "font-semibold" : ""
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className={`hover:underline ${
                    pathname === "/products" ? "font-semibold" : ""
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`hover:underline ${
                    pathname === "/about" ? "font-semibold" : ""
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={`hover:underline ${
                    pathname === "/contact" ? "font-semibold" : ""
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/car-cleaning" className="hover:underline">
                  Car Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/office-cleaning"
                  className="hover:underline"
                >
                  Office Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/deep-cleaning"
                  className="hover:underline"
                >
                  Deep Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products/cleaning-machines"
                  className="hover:underline"
                >
                  Cleaning Machines
                </Link>
              </li>
              <li>
                <Link
                  href="/products/cleaning-products"
                  className="hover:underline"
                >
                  Cleaning Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="mailto:info@melostra.com" className="hover:underline">
                  info@melostra.com
                </a>
              </li>
              <li>
                <p>123 Cleaning Street, City, Country</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-blue-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Melostra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;