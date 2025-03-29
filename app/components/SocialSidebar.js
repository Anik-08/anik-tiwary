"use client";
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/Anik-08", color: "#333" }, // Dark Gray
  { name: "LinkedIn", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/anik-tiwary/", color: "#0077B5" }, // LinkedIn Blue
  { name: "Instagram", icon: <FaInstagram />, url: "https://www.instagram.com/anik_tiwary08/", color: "#E1306C" }, // Instagram Pink
  { name: "Twitter", icon: <FaXTwitter />, url: "https://twitter.com/yourusername", color: "#333" }, // Twitter Blue
  { name: "Discord", icon: <FaDiscord />, url: "https://discord.gg/yourserver", color: "#7289DA" }, // Discord Blue
];

const SocialSidebar = () => {
  return (
    <div className="fixed  bottom-5 right-5 md:right-5 m-4 flex flex-row md:flex-col md:justify-center items-center space-x-4 md:space-x-0 md:space-y-4 z-50">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl transition-transform transform hover:scale-110"
          style={{
            color: "gray", // Default Color
            transition: "color 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = link.color)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "gray")}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
