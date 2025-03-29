"use client";
import React, { useState } from "react";
import { FaGlobe, FaMobileAlt, FaBrain, FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Sample projects data with tools used
const projectsData = [
  {
    title: "Portfolio Website",
    category: "Web Dev",
    description: "A responsive portfolio built using Next.js and Tailwind CSS.",
    image: "/projects/portfolio.png",
    link: "https://anik-portfolio.com",
    repo: "https://github.com/anik-portfolio",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-Commerce App",
    category: "App Dev",
    description: "A Flutter-based e-commerce application with Firebase backend.",
    image: "/projects/ecommerce.png",
    link: "https://play.google.com/ecommerce",
    repo: "https://github.com/anik-ecommerce",
    tools: ["Flutter", "Firebase", "Dart"],
  },
  {
    title: "AI Image Classifier",
    category: "AI/ML",
    description: "A deep learning model built with TensorFlow for image classification.",
    image: "/projects/ai-classifier.png",
    link: "https://anik-ai-classifier.com",
    repo: "https://github.com/anik-ai-classifier",
    tools: ["TensorFlow", "Python", "Keras"],
  },
  {
    title: "Weather App",
    category: "App Dev",
    description: "A React Native weather app that provides real-time weather data.",
    image: "/projects/weather.png",
    link: "https://anik-weather.com",
    repo: "https://github.com/anik-weather-app",
    tools: ["React Native", "OpenWeather API", "Expo"],
  },
  {
    title: "Chatbot with Gemini",
    category: "AI/ML",
    description: "A conversational AI chatbot integrated with Google's Gemini API.",
    image: "/projects/chatbot.png",
    link: "https://anik-chatbot.com",
    repo: "https://github.com/anik-chatbot",
    tools: ["Gemini API", "Python", "Flask"],
  },
  {
    title: "Task Manager - TickIT",
    category: "Web Dev",
    description: "A full-stack task management app using Next.js and MongoDB.",
    image: "/projects/task-manager.png",
    link: "https://tick-it-7dsb-anik-tiwarys-projects.vercel.app/",
    repo: "https://github.com/Anik-08/TickIT",
    tools: ["Next.js", "MongoDB", "express JS"],
  },
];

const categories = ["All", "Web Dev", "App Dev", "AI/ML"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          My <span className="text-[var(--highlight-color)]">Projects</span>
        </h2>
        <p className="text-lg text-gray mb-12">
          A showcase of my work in Web Development, App Development, and AI/ML.
        </p>

        {/* Navbar for Filtering Projects */}
        <div className="flex justify-center space-x-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-[var(--highlight-color)] text-black"
                  : "border-2 border-[var(--highlight-color)] hover:bg-[var(--highlight-color)] hover:text-black"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg  transition-transform"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />

              {/* Project Title */}
              <h3 className="text-2xl font-semibold text-[var(--highlight-color)]">{project.title}</h3>
              <p className="text-gray-400 mt-2">{project.description}</p>

              {/* Tools Used */}
              <div className="mt-4">
                <h4 className="text-lg font-semibold text-gray-400">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                  {project.tools.map((tool, i) => (
                    <li
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Buttons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-1/2 bg-[var(--highlight-color)] text-black py-2 rounded-lg font-semibold shadow-md hover:scale-105 transition-all"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-1/2 border-2 border-[var(--highlight-color)] text-[var(--text-color)] py-2 rounded-lg font-semibold shadow-md hover:bg-[var(--highlight-color)] hover:text-black transition-all"
                >
                  <FaGithub className="mr-2" />
                  GitHub Repo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
