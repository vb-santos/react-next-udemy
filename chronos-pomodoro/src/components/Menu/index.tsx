import { useState, useEffect } from "react";
import * as React from "react";
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon } from "lucide-react";

import styles from "./styles.module.css";

type AvailableThemes = "dark" | "light";

export const Menu = () => {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark";

    return storageTheme;
  });

  const handleChangeTheme = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();

    setTheme(prevState => {
      const nextTheme = prevState === "dark" ? "light" : "dark"
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Home"
        title="Home"
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
         href="#"
         aria-label="Histórico"
         title="Histórico"
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href="#"
        aria-label="Alterar Tema"
        title="Alterar Tema"
        onClick={(event) => handleChangeTheme(event)}
      >
        { theme === "light" ? <MoonIcon /> : <SunIcon /> }
      </a>
    </nav>
  )
}