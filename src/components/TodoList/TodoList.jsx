import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";
import DeletedTodo from "../Todo/DeletedTodo";
import styles from "./TodoList.module.css";

export default function TodoList({ filter }) {
  const [todos, setTodos] = useState(() => readTodos());
  const [deletedTodos, setDeletedTodos] = useState(() => readDeletedTodos());

  const handleDelete = (deleted) => {
    setDeletedTodos((t) => [...t, deleted]);
    setTodos(todos.filter((t) => t.id !== deleted.id));
  };

  const handleComplete = (done) => {
    setTodos(todos.map((t) => (t.id === done.id ? done : t)));
  };

  const handleImportant = (starred) => {
    setTodos(todos.map((t) => (t.id === starred.id ? starred : t)));
  };

  const handleAdd = (add) => {
    setTodos((t) => [...t, add]);
  };

  const handleDelete4good = (deleted) => {
    setDeletedTodos(deletedTodos.filter((t) => t.id != deleted.id));
  };

  const handleRestore = (restored) => {
    setTodos((t) => [...t, restored]);
    setDeletedTodos(deletedTodos.filter((t) => t.id != restored.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("deletedTodos", JSON.stringify(deletedTodos));
  }, [deletedTodos]);

  const filtered = getFilteredItems(todos, filter);

  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filter != "deleted"
          ? filtered.map((task) => (
              <Todo
                key={task.id}
                todo={task}
                onDelete={handleDelete}
                onComplete={handleComplete}
                onImportant={handleImportant}
              />
            ))
          : deletedTodos.map((task) => (
              <DeletedTodo
                key={task.id}
                todo={task}
                onDelete={handleDelete4good}
                onRestore={handleRestore}
              />
            ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}

function readTodos() {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
}

function readDeletedTodos() {
  const deletedTodos = localStorage.getItem("deletedTodos");
  return deletedTodos ? JSON.parse(deletedTodos) : [];
}

const getFilteredItems = (todos, filter) => {
  if (filter === "all") {
    return todos;
  } else if (filter === "important") {
    return todos.filter((t) => t.isImportant === true && t.isDone === false);
  } else if (filter === "to do") {
    return todos.filter((t) => t.isDone === false);
  } else if (filter === "done") {
    return todos.filter((t) => t.isDone === true);
  }
};
