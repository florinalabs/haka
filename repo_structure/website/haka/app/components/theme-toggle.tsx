"use client";

import { Moon, Sun } from "lucide-react";
import React from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={18} className="text-[#FFD700]" />
      ) : (
        <Moon size={18} className="text-[#FFD700]" />
      )}
    </button>
  );
}

export default ThemeToggle;