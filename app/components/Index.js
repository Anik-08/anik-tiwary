"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaArrowDownLong } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration issues

  // Function to scroll smoothly to the next section
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 relative">
      {/* Left Side - Text Content */}
      <div className="max-w-lg text-center md:text-left">
        <h3 className="text-2xl font-mono text-[var(--highlight-color)] font-semibold mb-2">
          Hello World!!
        </h3>
        <h4 className="text-5xl md:text-6xl font-bold mb-4">
          I&apos;m <span className="text-[var(--highlight-color)]">Anik Tiwary</span>
        </h4>

        {/* Typewriter Effect */}
        <h4 className="text-2xl font-semibold mb-4 h-10">
          <Typewriter
            options={{
              strings: [
                "AI & Machine Learning Enthusiast",
                "Full-Stack & App Developer",
                "Building Smart & Scalable Apps",
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </h4>

        <p className="text-lg leading-relaxed">
          Passionate about AI, Machine Learning, and Full-Stack Development.  
          I also build <strong>mobile applications</strong> that provide intelligent solutions.  
          Let&apos;s collaborate and create something amazing!
        </p>

        {/* Buttons Section */}
        <div className="flex justify-center md:justify-start space-x-4 mt-6">
          <button className="relative overflow-hidden px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 group" onClick={scrollToContact}>
            {/* Background Layer for Animated Transition */}
            <span className="absolute inset-0 bg-[var(--highlight-color)] transition-all duration-500 group-hover:-translate-y-full"></span>
            <span className="absolute inset-0 bg-[var(--background-color)] translate-y-full transition-all duration-500 group-hover:translate-y-0"></span>

            {/* Icon & Text */}
            <span className="relative flex items-center text-[var(--text2-color)] dark:text-[var(--text-color)]">
              <IoMdChatbubbles className="inline-block mr-2 size-7" />
              Let&apos;s Connect!
            </span>
          </button>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <div className="mt-10 md:mt-0 md:ml-16 flex justify-center">
        <Image
          src="/anik-photo.png"
          alt="Anik Tiwary"
          width={450}
          height={450}
          className="rounded-full shadow-lg border-4 border-[var(--highlight-color)]"
        />
      </div>

      {/* Scroll Down Button (Fixed for Mobile) */}
      <div className="mt-12">
      <button
        onClick={scrollToNextSection}
        className="absolute bottom-6 md:mt-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full transition-all duration-300 hover:border-[var(--highlight-color)] hover:shadow-lg"
      >
        {/* Animated Arrow */}
        <FaArrowDownLong className="text-[var(--accent-color)] text-2xl md:text-3xl animate-bounce" />
      </button>
      </div>
    </div>
  );
};

export default Index;
