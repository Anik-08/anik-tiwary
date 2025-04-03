"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdChatbubbles } from "react-icons/io";
import { motion } from "framer-motion";

const Index = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Prevent hydration issues

  // Scroll functions
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) {
      window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({ top: contactSection.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 relative gap-6 md:gap-10 pt-24"
    >
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
        className="max-w-lg text-center md:text-left"
      >
        <h3 className="text-2xl font-mono text-[var(--highlight-color)] font-semibold mb-3">
          Hello World!!
        </h3>
        <h4 className="text-4xl md:text-6xl font-bold mb-4">
          I&apos;m <span className="bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] to-[var(--highlight-color)]">Anik Tiwary</span>
        </h4>

        {/* Typewriter Effect */}
        <h4 className="text-xl md:text-2xl font-semibold mb-4 h-10">
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
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }}
          className="flex justify-center md:justify-start space-x-4 mt-6"
        >
          <button
            className="relative overflow-hidden px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 group"
            onClick={scrollToContact}
          >
            <span className="absolute inset-0 bg-[var(--highlight-color)] transition-all duration-500 group-hover:-translate-y-full"></span>
            <span className="absolute inset-0 bg-[var(--background-color)] translate-y-full transition-all duration-500 group-hover:translate-y-0"></span>
            <span className="relative flex items-center text-[var(--text2-color)] dark:text-[var(--text-color)]">
              <IoMdChatbubbles className="inline-block mr-2 size-7" />
              Let&apos;s Connect!
            </span>
          </button>
        </motion.div>
      </motion.div>

      {/* Right Side - Profile Image */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false }}
        className="flex flex-col items-center"
      >
        <Image
          src="/anik-photo.png"
          alt="Anik Tiwary"
          width={280} // Smaller for mobile
          height={280}
          className="rounded-full shadow-lg border-4 border-[var(--highlight-color)] md:w-[350px] md:h-[350px]"
        />

        {/* Scroll Down Button - Below the Image on Mobile, Centered Below Content & Image in Desktop */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false }}
          className="mt-6 md:mt-10 flex justify-center md:absolute md:bottom-10"
        >
          <button
            onClick={scrollToNextSection}
            className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-2 border-[var(--background-color)] rounded-full transition-all duration-300 hover:border-[var(--highlight-color)] hover:shadow-lg"
          >
            <FaCaretDown className="text-[var(--accent-color)] text-2xl md:text-3xl animate-bounce" />
          </button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
