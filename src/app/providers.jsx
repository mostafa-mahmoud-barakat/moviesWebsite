"use client";

import { ThemeProvider } from "next-themes"; // Example import
import { useEffect, useState } from "react";

export default function Providers({ children}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering until the client has mounted
    return null;
  }

  return (
    <ThemeProvider defaultTheme='system' attribute='class' enableSystem>
      <div className=" text-gray-700  dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
      {children}
      </div>
    </ThemeProvider>
  );
}

