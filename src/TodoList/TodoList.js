import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./TodoList.css";

const todos = [
  {
    title: "active",
    completed: false,
    archived: false,
  },
  {
    title: "completed1",
    completed: true,
    archived: false,
  },
  {
    title: "active",
    completed: false,
    archived: false,
  },
  {
    title: "active2",
    completed: false,
    archived: false,
  },
  {
    title: "active3",
    completed: false,
    archived: false,
  },
  {
    title: "archived1",
    completed: true,
    archived: true,
  },
];

const TodoList = () => {
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [archived, setArchived] = useState(false);

  const handleActive = () => {
    setActive(true);
    setCompleted(false);
    setArchived(false);
  };

  const handleCompleted = () => {
    setActive(false);
    setCompleted(true);
    setArchived(false);
  };

  const handleArchived = () => {
    setActive(false);
    setCompleted(false);
    setArchived(true);
  };

  const handleCheckbox = () => {};

  useEffect(() => {
    const filteredTodos = todos.filter((todo) => {
      if (archived) {
        return todo.archived === true;
      } else {
        return todo.completed === completed && todo.archived === false;
      }
    });
    console.log(filteredTodos);
    setFilteredTodos(filteredTodos);
  }, [active, completed, archived]);

  return (
    <div className="todolist-container">
      <h1 className="todolist-title">Todo List</h1>
      <div className="todolist-nav">
        <div className="todolist-filters">
          <button
            className={`todolist-pill ${active ? "active" : ""}`}
            onClick={handleActive}
            value="Active"
          >
            Active
          </button>
          <button
            className={`todolist-pill ${completed ? "active" : ""}`}
            onClick={handleCompleted}
            value="Completed"
          >
            Completed
          </button>
          <button
            className={`todolist-pill ${archived ? "active" : ""}`}
            onClick={handleArchived}
            value="Archived"
          >
            Archived
          </button>
        </div>
        <div className="todolist-new-pill">New To-Do</div>
      </div>
      <div className="todolist-list">
        {filteredTodos.map((todo, i) => {
          return (
            <TodoItem
              key={i}
              title={todo.title}
              completed={todo.completed}
              archived={todo.archived}
              onClick={handleCheckbox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
