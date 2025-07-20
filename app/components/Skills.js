"use client";
import React from "react";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaJava, FaHtml5 } from "react-icons/fa";
import {
  SiJavascript, SiPython, SiDjango, SiTensorflow, SiReact, SiNextdotjs, SiMongodb,
  SiGooglecloud, SiDocker, SiGit, SiPostgresql, SiFirebase, SiOpencv, SiTailwindcss,
  SiNodedotjs, SiPytorch, SiTypescript, SiPostman, SiAndroidstudio
} from "react-icons/si";
import { motion } from "framer-motion";

// Skills data
const skillsData = [
  {
    title: "Development",
    icon: <FaLaptopCode />,
    technologies: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "AI & Data",
    icon: <FaBrain />,
    technologies: [
      { name: "Scikit-Learn", icon: <SiPython /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
  },
  {
    title: "Tools & Languages",
    icon: <SiJavascript />,
    technologies: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Java", icon: <FaJava /> },
      { name: "Git", icon: <SiGit /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Postman", icon: <SiPostman /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          My <span className="bg-gradient-to-r bg-clip-text text-transparent from-[var(--text-color)] to-[var(--highlight-color)]">Expertise</span>
        </motion.h2>
        <p className="text-lg text-gray-400 mb-12">
          A combination of technical expertise and problem-solving abilities that drive my development process.
        </p>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
              viewport={{ once: false, amount: 0.5 }}
              className="p-8 rounded-lg shadow-lg transition-transform"
            >
              <div className="text-5xl text-[var(--highlight-color)] mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-[var(--text-color)]">{skill.title}</h3>

              <ul className="text-gray-400 text-sm grid grid-cols-2 gap-2">
                {skill.technologies.map((tech, techIndex) => (
                  <motion.li
                    key={techIndex}
                    className="flex items-center space-x-2 bg-gray-800 p-2 rounded-md text-center shadow-md"
                  >
                    <span className="text-xl text-[var(--highlight-color)]">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
