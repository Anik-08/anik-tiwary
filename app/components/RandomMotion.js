"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const FloatingBlob = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  useEffect(() => {
    const moveRandomly = () => {
      const maxX = window.innerWidth - 500; // Max width
      const maxY = window.innerHeight - 500; // Max height

      setPosition({
        x: (Math.random() - 0.5) * maxX, // Allows movement left (-ve) and right (+ve)
        y: (Math.random() - 0.5) * maxY, // Allows movement up (-ve) and down (+ve)
      });
    };

    const interval = setInterval(moveRandomly, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      animate={{ x: position.x, y: position.y, scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute w-[1800px] h-[1800px] bg-radial from-[var(--random-color)] to-[var(--background-color)] opacity-60 blur-3xl"
      style={{
        borderRadius: "60% 40% 50% 50% / 40% 60% 40% 60%",
      }}
    />
  );
};

export default FloatingBlob;
