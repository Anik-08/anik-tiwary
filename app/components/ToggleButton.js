"use client";
import { useEffect, useState } from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const ToggleButton = () => {
  const [darkMode, setDarkMode] = useState(true); // Default mode

  useEffect(() => {
    // Run only on the client
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-14 h-8 flex items-center justify-between bg-gray-300 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-all duration-300"
    >
      <BsSunFill className="text-yellow-500  transition-all duration-300" />
      <BsMoonFill className="text-gray-500  transition-all duration-300" />
      <div
        className={`absolute w-6 h-6 bg-white dark:bg-black rounded-full shadow-md transform transition-all duration-300 ${
          darkMode ? "translate-x-6" : "translate-x-0"
        }`}
      ></div>
    </button>
  );
};

export default ToggleButton;
