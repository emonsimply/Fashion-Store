"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Logo & About */}
          <div>
            <h2 className="text-2xl font-bold text-teal-600 mb-4">FashionStore</h2>
            <p className="text-gray-600">
              Your one-stop shop for the latest fashion trends. High quality, affordable prices.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-teal-600 hover:text-teal-800 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-teal-600 hover:text-teal-800 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="/products" className="hover:underline">All Products</a></li>
              <li><a href="/categories" className="hover:underline">Categories</a></li>
              <li><a href="/new-arrivals" className="hover:underline">New Arrivals</a></li>
              <li><a href="/sale" className="hover:underline">Sale</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/blog" className="hover:underline">Blog</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-xl font-semibold text-teal-600 mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="/help-center" className="hover:underline">Help Center</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping & Returns</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FashionStore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
