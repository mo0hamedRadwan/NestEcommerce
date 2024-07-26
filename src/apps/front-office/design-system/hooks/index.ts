import themeAtom from "apps/front-office/home/atoms/themeAtom";
import { useEffect, useState } from "react";
import { formatTime } from "../utils/formatTime";

/**
 * the purpose of this hook is get current position with live scrolling
 */
export function useWindowScroll() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return scrollPosition;
}

/**
 * the purpose of this hook is get current theme and toggle theme to change theme
 */

export function useDarkMode() {
  const theme = themeAtom.useValue();
  const toggleTheme = themeAtom.toggleTheme;

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return { theme, toggleTheme };
}

/**
 * the purpose of this hook is get remainder time (days, hours, minutes, seconds)
 */

export function useCountDown(date: Date) {
  const [remainderTime, setRemainderTime] = useState(date.getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = remainderTime - currentTime.getTime();
      if (timeDifference <= 0) {
        setRemainderTime(0);
        clearInterval(timer);
        return formatTime(0);
      }
      setRemainderTime(timeDifference);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return formatTime(Math.round(remainderTime / 1000));
}
