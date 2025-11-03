import React, { useState } from "react";
import {
  FaTelegramPlane,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header({ isMenuOpen, toggleMenu }) {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "About",
    "Resume",
    "Services",
    "Projects",
    // "Dropdown",
    "Contact",
  ];

  const handleClick = (item) => {
    setActive(item);
    document
      .getElementById(item.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
    if (isMenuOpen) toggleMenu();
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#eeedeb] shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-wide">
          FEKADU
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`relative font-medium text-[17px] transition-all duration-300 ${
                active === item
                  ? "text-teal-500"
                  : "text-gray-900 hover:text-teal-500"
              }`}
            >
              {item}
              {active === item && (
                <span className="absolute left-0 -bottom-[6px] w-full h-[2px] bg-teal-500"></span>
              )}
            </button>
          ))}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden md:flex items-center space-x-3">
          {[
            { icon: <FaTelegramPlane />, link: "https://t.me/fikea19" },
            { icon: <FaFacebookF />, link: "#" },
            { icon: <FaLinkedinIn />, link: "#" },
            { icon: <FaWhatsapp />, link: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:text-teal-500 hover:border-teal-500 transition-all duration-300"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-800"
          onClick={toggleMenu}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#eeedeb] flex flex-col items-center py-4 space-y-3 shadow-md">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`font-medium text-[17px] transition-all duration-300 ${
                active === item
                  ? "text-teal-500"
                  : "text-gray-900 hover:text-teal-500"
              }`}
            >
              {item}
            </button>
          ))}

          <div className="flex items-center gap-4 pt-3 text-gray-600">
            {[FaTelegramPlane, FaFacebookF, FaLinkedinIn, FaWhatsapp].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="w-8 h-8 flex items-center justify-center border border-gray-400 rounded-full hover:text-teal-500 hover:border-teal-500 transition-all duration-300"
                >
                  <Icon />
                </div>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
}
