"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

export function ThemeSwitcher({ ...props }: React.HTMLAttributes<HTMLDivElement>) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed bottom-6 right-6 z-50" {...props}>
        <div className="w-12 h-12 rounded-full bg-neutral-100/30 backdrop-blur-sm animate-pulse"></div>
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="btn btn-circle glass-panel shadow-md hover:shadow-lg flex items-center justify-center w-12 h-12 transition-all duration-300"
      >
        {theme === "dark" ? (
          <motion.div
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -45, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-yellow-400"
          >
            <Sun className="size-5" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ rotate: -45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 45, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-indigo-600"
          >
            <Moon className="size-5" />
          </motion.div>
        )}
        <span className="sr-only">Toggle theme</span>
      </motion.button>
    </motion.div>
  );
}

export default ThemeSwitcher;
