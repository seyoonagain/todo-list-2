import React from "react";
import { BsTrash2 } from "react-icons/bs";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import styles from "./Todo.module.css";

export default function Todo({ todo, onDelete, onComplete, onImportant }) {
  const { id, text, isImportant, isDone } = todo;

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleDone = () => {
    const done = isDone ? false : true;
    onComplete({ ...todo, isDone: done });
  };

  const handleImportant = () => {
    const important = isImportant ? false : true;
    onImportant({ ...todo, isImportant: important });
  };

  return (
    <li className={styles.todo} key={id}>
      {todo.isImportant === false && (
        <TiStarOutline className={styles.icon} onClick={handleImportant} />
      )}
      {todo.isImportant === true && (
        <TiStarFullOutline
          className={`${styles.icon} ${styles.important}`}
          onClick={handleImportant}
        />
      )}
      <span
        onClick={handleDone}
        className={`${styles.text} ${isDone && styles.done}`}
      >
        {text}
      </span>
      <BsTrash2 className={styles.icon} onClick={handleDelete} />
    </li>
  );
}
