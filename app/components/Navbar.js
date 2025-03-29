"use client";
import React, { useState, useEffect } from "react";
import ToggleButton from "./ToggleButton.js";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdClose } from "react-icons/io"; // Close Icon

const sections = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (section) => {
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Close menu after clicking (for mobile)
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.toLowerCase());
        if (sectionElement) {
          const { top, height } = sectionElement.getBoundingClientRect();
          const offsetTop = top + window.scrollY;

          if (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + height - 100
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-opacity-70 backdrop-blur-md px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <p className="text-[var(--highlight-color)] text-3xl font-bold">Anik</p>

        {/* Desktop Navbar Links Inside a Rounded Box */}
        <div className="hidden md:flex bg-gray-800 bg-opacity-40 backdrop-blur-lg px-4 py-1.5 border-b-2 border-white rounded-full">
          <ul className="flex space-x-6 text-lg font-medium">
            {sections.map((section, index) => (
              <li key={index} className="relative group">
                <button
                  onClick={() => scrollToSection(section)}
                  className={`block transition-colors px-4 py-2 rounded-full ${
                    activeSection === section
                      ? "text-[var(--highlight-color)] font-semibold bg-gray-700 bg-opacity-50"
                      : "text-white hover:cursor-pointer hover:scale-105"
                  }`}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Dark Mode Toggle */}
        <div className="hidden md:block">
          <ToggleButton />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-[var(--highlight-color)] text-3xl"
        >
          ☰
        </button>
      </div>

      {/* Full-Screen Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-[var(--highlight-color)] text-4xl"
            >
              <IoMdClose />
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-8 text-2xl font-semibold text-white">
              {sections.map((section, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`transition-colors ${
                      activeSection === section ? "text-[var(--highlight-color)]" : "hover:text-[var(--highlight-color)]"
                    }`}
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <div className="mt-8">
              <ToggleButton />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
