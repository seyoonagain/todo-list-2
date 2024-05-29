import React from "react";
import styles from "./Header.module.css";
import { BsTrash2 } from "react-icons/bs";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { useDarkMode } from "../../context/DarkModeContext";

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
        <ul className={styles.filtersExceptTrash}>
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
        <span className={`${filter === "deleted" && styles.selected}`}>
          <BsTrash2
            className={`${styles.deleted} ${
              filter === "deleted" && styles.selected
            }`}
            onClick={() => onFilterChange("deleted")}
          />
        </span>
      </section>
    </header>
  );
}
