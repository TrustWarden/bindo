import { useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);
  };

  return { isDark, toggleDarkMode };
}

export default useDarkMode;
