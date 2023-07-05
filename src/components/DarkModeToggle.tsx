import { useState } from "react";

export function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClickToggle = function () {
    const newSetting = !isDarkMode;
    if (newSetting) {
      document.documentElement.style.setProperty("--background-color", "white");
      document.documentElement.style.setProperty("--text-color", "black");
    } else {
      document.documentElement.style.setProperty("--background-color", "black");
      document.documentElement.style.setProperty("--text-color", "white");
    }
    setIsDarkMode(newSetting);
  };

  return (
    <button className="image-button" onClick={handleClickToggle}>
      Click me!
    </button>
  );
}
