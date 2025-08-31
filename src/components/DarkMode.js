import LightButton from "../assets/website/light-mode-button.png";
import DarkButton from "../assets/website/dark-mode-button.png";
import { useEffect, useState } from "react";

export default function DarkMode() {
  let currentTheme = localStorage.getItem("theme") || LightButton;

  const [switchTheme, setSwitchTheme] = useState(currentTheme);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleClickSwitchTheme() {
    setIsAnimating(true);

    setTimeout(() => {
      const newTheme = switchTheme === LightButton ? DarkButton : LightButton;
      setSwitchTheme(newTheme);
      localStorage.setItem("theme", newTheme);

      setIsAnimating(false);
    }, 150);
  }

  useEffect(() => {
    const element = document.documentElement;

    if (switchTheme === DarkButton) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [switchTheme]);

  return (
    <div
      onClick={() => {
        handleClickSwitchTheme();
      }}
    >
      <img
        src={switchTheme}
        alt="Theme toggle"
        className={isAnimating ? "theme-button animating" : "theme-button"}
      />
    </div>
  );
}
