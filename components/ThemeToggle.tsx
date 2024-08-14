
// "use client"; 

// import { useTheme } from 'next-themes';
// import { useEffect, useState } from 'react';

// const ThemeToggle = () => {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <button
//       className="p-2 bg-gray-300 dark:bg-gray-700 rounded-full border-2 border-transparent hover:border-blue-500 focus:outline-none transition-all duration-300"
//       onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
//     >
//       {theme === 'light' ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6 text-yellow-500"
//         >
//           <path d="M12 2a1 1 0 011 1v2a1 1 0 01-2 0V3a1 1 0 011-1zM4.929 4.929a1 1 0 010 1.414l-1.414 1.414a1 1 0 01-1.414-1.414l1.414-1.414a1 1 0 011.414 0zM21 12a1 1 0 01-1 1h-2a1 1 0 010-2h2a1 1 0 011 1zM4.929 19.071a1 1 0 01-1.414 0l-1.414-1.414a1 1 0 011.414-1.414l1.414 1.414a1 1 0 010 1.414zM12 18a1 1 0 011-1v-2a1 1 0 01-2 0v2a1 1 0 011 1zM19.071 19.071a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 10-1.414 1.414l1.414 1.414zM21 12a9 9 0 11-9-9 9.01 9.01 0 019 9zm-9 7a7 7 0 100-14 7 7 0 000 14z" />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//           className="w-6 h-6 text-yellow-300"
//         >
//           <path
//             fillRule="evenodd"
//             d="M21.753 15.002a9.718 9.718 0 01-6.75 6.748 9.725 9.725 0 01-12.502-12.498 9.717 9.717 0 016.749-6.75 9.718 9.718 0 0112.503 12.5zM12.002 3.054a7.972 7.972 0 00-7.948 7.949 7.971 7.971 0 007.948 7.949 7.972 7.972 0 007.949-7.948 7.972 7.972 0 00-7.949-7.95z"
//             clipRule="evenodd"
//           />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;

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

