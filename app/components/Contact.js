"use client";
import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {  // ✅ Removed TypeScript annotation
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "6e309db7-f4f0-4839-a748-6dd4872849dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setTimeout(() => setResult(""), 2000);
      event.currentTarget.reset();
    } else {
      setResult(data.message);
      setTimeout(() => setResult(""), 2000);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 md:px-16">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] to-[var(--highlight-color)]">Contact</span> Me
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Let&apos;s connect! Reach out via social media or drop a message using the form.
        </p>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Contact Info & Social Links */}
          <motion.div
            className="p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[var(--highlight-color)] mb-4">
              Link Up? Let&apos;s roll!
            </h3>
            <p className="text-lg my-2">
              Have a project in mind or just want to chat? I&apos;m all in! Whether it&apos;s web
              development, design, or just a casual conversation, let&apos;s connect and make
              something awesome together!
            </p>

            {/* Contact Info */}
            <div className="space-y-4 text-lg">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-[var(--highlight-color)] text-2xl" />
                <a
                  href="mailto:anik.tiwary08@gmail.com"
                  className="hover:text-[var(--highlight-color)] transition"
                >
                  anik.tiwary08@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhoneAlt className="text-[var(--highlight-color)] text-2xl" />
                <span>+91 8618520069</span>
              </motion.div>
            </div>
            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/anik-tiwary/" // 🔁 your actual link here
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[var(--highlight-color)] transition-colors"
              >
                <FaLinkedin className="text-white text-2xl" />
              </a>
              <a
                href="https://github.com/Anik-08"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[var(--highlight-color)] transition-colors"
              >
                <FaGithub className="text-white text-2xl" />
              </a>
              <a
                href="https://x.com/AnikTiwary08?t=dVVvvSgdTS0_7xXI__9hgw&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[var(--highlight-color)] transition-colors"
              >
                <FaXTwitter className="text-white text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/anik_tiwary08/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[var(--highlight-color)] transition-colors"
              >
                <FaInstagram className="text-white text-2xl" />
              </a>
              <a
                href="https://leetcode.com/u/Anik_Tiwary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-[var(--highlight-color)] transition-colors"
              >
                <SiLeetcode className="text-white text-2xl" />
              </a>
            </div>

          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-[var(--background-color)] p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ amount: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-[var(--highlight-color)] mb-4">
              Got Ideas? Let&apos;s cook!
            </h3>
            <form onSubmit={onSubmit}>
              <motion.input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.input
                type="email"
                placeholder="Your Email"
                name="email"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.textarea
                placeholder="Your Message"
                name="message"
                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:border-[var(--highlight-color)] focus:ring-2 focus:ring-[var(--highlight-color)] transition mb-4"
                rows={4}
                required
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="relative overflow-hidden px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 group"
                type="submit"
                whileHover={{ scale: 1.05 }}
              >
                {/* Background Layer for Animated Transition */}
                <span className="absolute inset-0 bg-[var(--background-color)] transition-all duration-500 group-hover:-translate-x-0"></span>
                <span className="absolute inset-0 bg-[var(--highlight-color)] translate-x-0 transition-all duration-500 group-hover:translate-x-full"></span>

                {/* Icon & Text */}
                <span className="relative flex items-center text-[var(--text2-color)] dark:text-[var(--text-color)]">
                  <IoIosSend className="inline-block mr-2 size-7" />
                  Send Message
                </span>
              </motion.button>
            </form>
            <motion.span
              className="block mt-4 text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: result ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {result}
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
