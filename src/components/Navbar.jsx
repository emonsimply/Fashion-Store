"use client";

import { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { AuthContext } from "@/contexts/AuthContext";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, SignOut } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/products", title: "Products" },
    { path: "/about", title: "About" },
    { path: "/contact", title: "Contact" },
  ];

  const handleLogout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0d9488", // teal-600
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await SignOut();
        setDropdown(false);

        Swal.fire({
          title: "Logged Out!",
          text: "You have been successfully logged out.",
          icon: "success",
          confirmButtonColor: "#0d9488",
        });
      }
    });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-teal-600">
          FashionStore
        </Link>

        {/* Desktop Nav Links */}
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

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <>
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
            </>
          ) : (
            <div className="relative">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-2 border-2 border-teal-600 rounded-full text-teal-600 font-semibold hover:bg-teal-600 hover:text-white transition duration-300 cursor-pointer"
              >
                {/* User Photo */}
                <img
                  src={
                    user?.photoURL ||
                    "https://ui-avatars.com/api/?name=User&background=14b8a6&color=fff"
                  }
                  alt="User"
                  className="w-8 h-8 rounded-full object-cover border"
                />
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg py-2">
                  {/* User Info */}
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-semibold">
                      {user?.displayName || "User"}
                    </p>
                    <p className="text-gray-500 text-xs">{user?.email}</p>
                  </div>

                  <Link
                    href="/add-product"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50"
                  >
                    Add Product
                  </Link>

                  <Link
                    href="/manage-products"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-50"
                  >
                    Manage Products
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose size={28} /> : <IoIosMenu size={28} />}
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

            {!user ? (
              <>
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
              </>
            ) : (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">{user?.email}</p>

                <Link
                  href="/add-product"
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Add Product
                </Link>

                <Link
                  href="/manage-products"
                  onClick={() => setOpen(false)}
                  className="block text-gray-700 hover:text-teal-600"
                >
                  Manage Products
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="text-red-600 font-medium"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
