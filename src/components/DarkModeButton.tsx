import useDarkMode from "../hooks/useDarkMode";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

function DarkModeButton() {
  const { toggleDarkMode } = useDarkMode();
  const state = localStorage.theme;

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-500 py-2 px-4 lg:py-2 lg:px-4 min-h-10 rounded-lg text-neutral-50 font-bold hover:bg-gray-400"
    >
      {state === "dark" ? <FaMoon /> : <MdSunny />}
    </button>
  );
}

export default DarkModeButton;
