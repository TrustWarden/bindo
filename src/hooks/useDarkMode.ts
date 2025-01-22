import { useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark(!isDark);

    if (isDark) {
      localStorage.theme = "light";
    } else {
      localStorage.theme = "dark";
    }
  };

  return { isDark, toggleDarkMode };
}

export default useDarkMode;
