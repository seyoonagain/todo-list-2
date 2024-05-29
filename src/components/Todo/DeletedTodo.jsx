import React from "react";
import { TiRefresh } from "react-icons/ti";
import { RiDeleteBack2Fill } from "react-icons/ri";
import styles from "../Todo/Todo.module.css";

export default function DeletedTodo({ todo, onDelete, onRestore }) {
  const { id, text } = todo;
  const handleRestore = () => {
    onRestore(todo);
  };
  const handleDelete4good = () => {
    onDelete(todo);
  };
  return (
    <li className={styles.todo} key={id}>
      <TiRefresh className={styles.icon} onClick={handleRestore} />
      <span className={styles.text}>{text}</span>
      <RiDeleteBack2Fill className={styles.icon} onClick={handleDelete4good} />
    </li>
  );
}
