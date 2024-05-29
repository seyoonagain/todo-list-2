import React from "react";
import styles from "./Header.module.css";
import { BsTrash2 } from "react-icons/bs";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { useDarkMode } from "../../context/DarkModeContext";
import {
  PiCheckFat,
  PiCheckFatFill,
  PiListBold,
  PiStarFill,
} from "react-icons/pi";

export default function Header({ filters, filter, onFilterChange }) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className={styles.header}>
      <button className={styles.toggle} onClick={toggleDarkMode}>
        {!darkMode && <IoSunnySharp className={styles.sun} />}
        {darkMode && <IoMoonSharp className={styles.moon} />}
      </button>
      <h1>
        Things <br />
        to do
      </h1>
      <section className={styles.filters}>
        <ul className={styles.filtersChar}>
          {filters.map((value, index) => (
            <li key={index}>
              <button
                className={`${styles.filter} ${
                  filter === value && styles.selected
                }`}
                onClick={() => onFilterChange(value)}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.filtersIcon}>
          <button>
            <PiListBold
              className={`${styles.filterIcon} ${
                filter === "all" && styles.selected
              }`}
              onClick={() => onFilterChange("all")}
            />
          </button>
          <button>
            <PiStarFill
              className={`${styles.filterIcon} ${
                filter === "important" && styles.selected
              }`}
              onClick={() => onFilterChange("important")}
            />
          </button>
          <button>
            <PiCheckFat
              className={`${styles.filterIcon} ${
                filter === "to do" && styles.selected
              }`}
              onClick={() => onFilterChange("to do")}
            />
          </button>
          <button>
            <PiCheckFatFill
              className={`${styles.filterIcon} ${
                filter === "done" && styles.selected
              }`}
              onClick={() => onFilterChange("done")}
            />
          </button>
        </ul>
        <button>
          <BsTrash2
            className={`${styles.filterIcon} ${
              filter === "deleted" && styles.selected
            }`}
            onClick={() => onFilterChange("deleted")}
          />
        </button>
      </section>
    </header>
  );
}
