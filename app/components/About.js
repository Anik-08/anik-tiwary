"use client";
import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

const educationData = [
  {
    year: "2023-27",
    degree: "B.Tech in AI & ML",
    institution: "Cambridge Institute of Technology",
    description: "Specialized in AI, Machine Learning, and Full-Stack Development.",
  },
  {
    year: "2021-23",
    degree: "Higher Secondary (12th)",
    institution: "RJS PU College",
    description: "Focused on Mathematics, Computer Science, and Programming.",
  },
];

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }} // This will trigger the animation every time it comes into view
        >
          About <span className="text-[var(--highlight-color)]">Me</span>
        </motion.h2>
        <motion.p
          className="text-lg text-gray-400 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }} // This ensures the animation triggers every time it's in view
        >
          Wanna know more about me? Here&apos;s a brief overview of my skills, education, and interests.
        </motion.p>

        {/* Side-by-Side Layout (Skills + Education) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Skills Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
          >
            <div className="p-8 rounded-lg shadow-lg">
              <div className="flex flex-col space-y-6">
                {/* Software Development */}
                <div className="flex text-right items-start space-x-4">
                  <FaCode className="text-[var(--text-color)] text-8xl" />
                  <div>
                    <h3 className="text-3xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] to-[var(--highlight-color)]">
                      Software Development
                    </h3>
                    <p>
                      Experienced in functional & OOP paradigms: Python, JavaScript, Dart, Java, TypeScript.
                      Passionate about writing clean & scalable applications.
                    </p>
                  </div>
                </div>

                {/* Web & App Development */}
                <div className="flex items-start text-right space-x-4">
                  <FaLaptopCode className="text-[var(--text-color)] text-8xl" />
                  <div>
                    <h3 className="text-3xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] to-[var(--highlight-color)]">
                      Web & Mobile Development
                    </h3>
                    <p>
                      Skilled in React, Next.js, Tailwind CSS for web development and proficient in React Native for cross-platform mobile applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* More About Me Section */}
            <motion.div
              className="mt-8 p-6 rounded-lg shadow-lg"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: false }}
            >
              <h2 className="text-3xl font-semibold text-[var(--text-color)] mb-4 text-center">
                More About Me
              </h2>
              <p className="text-lg text-center">
                Beyond coding, I love exploring AI innovations, designing intuitive UI/UX, and contributing to open-source projects. In my free time, I enjoy music, gaming, and tech blogging.
              </p>
            </motion.div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-3xl font-bold text-[var(--text-color)] mb-6">
              <FaBookOpen className="inline-block text-4xl mr-2" />
              <span className="text-[var(--text-color)]">Education</span>
            </h2>

            <div className="relative border-l-4 border-[var(--highlight-color)] mx-auto max-w-md">
              
              {educationData.map((item, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 30 }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: false }}
                  className="mb-6 ml-6"
                >
                  <div className="absolute w-4 h-4 bg-[var(--highlight-color)] rounded-full left-[-10px]"></div>
                  <div className="p-4 rounded-lg shadow-lg text-left">
                    <h3 className="text-xl font-semibold bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] via-[var(--random-color)] to-[var(--highlight-color)]">{item.degree}</h3>
                    <div className="flex items-center justify-between">
                      <h4 className="text-md font-medium">{item.institution}</h4>
                      <span className="text-sm text-gray-500 font-semibold mt-2 block">{item.year}</span>
                    </div>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Resume Button */}
        <motion.div
          className="text-center mt-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: false }}
        >
          <button
            className="relative overflow-hidden px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:scale-105 group"
            onClick={() => window.open("/Anik's Resume.pdf", "_blank")}
          >
            <span className="absolute inset-0 bg-[var(--highlight-color)] transition-all duration-500 group-hover:-translate-x-full"></span>
            <span className="absolute inset-0 bg-[var(--background-color)] translate-x-full transition-all duration-500 group-hover:translate-x-0"></span>
            <span className="relative flex items-center text-[var(--text2-color)] dark:text-[var(--text-color)]">
              <FaDownload className="inline-block mr-2 size-7" />
              My Resume
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
