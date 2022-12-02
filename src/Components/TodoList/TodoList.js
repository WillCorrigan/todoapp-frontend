import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem/TodoItem";
import Cookies from "universal-cookie";
import "./TodoList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [archived, setArchived] = useState(false);

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://todoapptesting.fly.dev/todo/list",
      headers: {
        Authorization: `Bearer ${cookies.get("AUTHENTICATION_TOKEN")}`,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        setTodos(result.data.todos);
      })
      .catch((error) => {
        error = new Error();
      });
  }, []);

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

  const notify = () => {
    toast.success("Your to-do was updated!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  const handleCheckbox = (id) => {
    notify();
    setTodos(
      todos.map((todo) =>
        todo._id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const filteredTodos = todos.filter((todo) => {
      if (archived) {
        return todo.archived === true;
      } else {
        return todo.completed === completed && todo.archived === false;
      }
    });
    setFilteredTodos(filteredTodos);
  }, [active, completed, archived, todos]);

  return (
    <div className="todolist-container">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

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
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo._id}
              title={todo.title}
              completed={todo.completed}
              archived={todo.archived}
              onClick={() => handleCheckbox(todo._id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
