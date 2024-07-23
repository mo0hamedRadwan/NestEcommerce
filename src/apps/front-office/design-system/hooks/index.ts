/**********************************************************/
/**************** Custom Hook *****************************/
/**********************************************************/

import themeAtom from "apps/front-office/home/atoms/themeAtom";
import { useEffect, useState } from "react";

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
