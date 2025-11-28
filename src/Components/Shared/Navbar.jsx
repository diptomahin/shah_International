import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Subsidiaries", path: "/subsidiaries" },
    { name: "Gallery", path: "/gallery" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
          <img src="logo.png" alt="logo" className="w-80"/>
            {/* <div className="w-12 h-12 bg-gradient-to-br from-[#2d3190] to-[#4a4fb8] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SI</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#2d3190]">Shah International</h1>
              <p className="text-xs text-gray-600">Manpower Solutions</p>
            </div> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors ${
                  pathname === link.path
                    ? "text-[#2d3190] border-b-2 border-[#2d3190]"
                    : "text-gray-700 hover:text-[#2d3190]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-lg ${
                  pathname === link.path
                    ? "bg-[#2d3190] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
