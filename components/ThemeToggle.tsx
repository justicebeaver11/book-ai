"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="p-1 bg-gray-300 dark:bg-black-100 rounded-full border-2 border-transparent hover:border-blue-500 focus:outline-none transition-all duration-300"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <Sun
          className="w-4 h-4 text-yellow-500 stroke-white"
          strokeWidth={2}
        />
      ) : (
        <Moon
          className="w-4 h-4 text-yellow-300 stroke-white"
          strokeWidth={2}
        />
      )}
    </button>
  );
};

export default ThemeToggle;

