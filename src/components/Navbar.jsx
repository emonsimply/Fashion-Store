"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/products", title: "Products" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-teal-600">
          FashionStore
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`text-base ${
                  pathname === link.path
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600"
                }`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="hidden gap-4">
          <Link
            href="/login"
            className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-4 py-1.5 hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-4 py-1.5 hover:bg-teal-600 hover:text-white transition duration-300"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className={`text-base font-medium ${
                    pathname === link.path ? "text-teal-600" : "text-gray-700"
                  }`}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            <Link
              href="/login"
              onClick={() => setOpen(false)}
              className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-4 py-1.5 hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Login
            </Link>

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              className="border-2 rounded-full font-semibold border-teal-600 text-teal-600 px-4 py-1.5 hover:bg-teal-600 hover:text-white transition duration-300"
            >
              Register
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
