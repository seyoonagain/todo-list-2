import React, { useState } from "react";
import styles from "./AddTodo.module.css";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      alert("Type a task to do");
    } else {
      onAdd({
        id: "_" + Math.random().toString(36).substring(0, 9),
        text,
        isImportant: false,
        isDone: false,
      });
    }
    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          onChange={handleChange}
          value={text}
          placeholder="Type a task"
        />
        <button className={styles.button}>add</button>
      </form>
    </>
  );
}
