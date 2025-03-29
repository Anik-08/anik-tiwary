"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorRing = useRef(null);

  const [hovered, setHovered] = useState(false);

  // Motion values for smooth trailing
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothX = useSpring(cursorX, { stiffness: 100, damping: 10 });
  const smoothY = useSpring(cursorY, { stiffness: 100, damping: 10 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      if (cursorDot.current) {
        cursorDot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const links = document.querySelectorAll("a, button");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Small Dot (Fast Pointer) */}
      <motion.div
        ref={cursorDot}
        className="fixed w-3 h-3 bg-green-400 rounded-full hover:scale-200 pointer-events-none"
        style={{
          top: -5,
          left: -5,
          zIndex: 9999,
          transform: "translate3d(0px, 0px, 0)",
          position: "fixed",
        }}
      />

      {/* Larger Circle (Smooth Trailing Effect) */}
      <motion.div
        ref={cursorRing}
        style={{
          x: smoothX, // Smooth follow
          y: smoothY,
          top: -20,
          left: -20,
          zIndex: 9998,
          position: "fixed",
        }}
        animate={{ scale: hovered ? 1 : 1, borderColor: hovered ? "#4CAF50" : "#FFFFFF" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed w-10 h-10 border-2 border-white rounded-full pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;
