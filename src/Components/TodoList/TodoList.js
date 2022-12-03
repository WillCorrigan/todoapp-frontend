import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem/TodoItem";
import Cookies from "universal-cookie";
import "./TodoList.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();
const token = cookies.get("AUTHENTICATION_TOKEN");

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [archived, setArchived] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    const configuration = {
      method: "get",
      url: "https://todoapptesting.fly.dev/todo/list",
      headers: {
        Authorization: `Bearer ${token}`,
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
    console.log(todos);
    const newFilteredTodos = todos.filter((todo) => {
      if (archived) {
        return todo.archived === true;
      } else {
        return todo.completed === completed && todo.archived === false;
      }
    });
    setFilteredTodos(newFilteredTodos);
  }, [active, completed, archived, todos]);

  const handleNewTodoButtonClick = () => {
    setExpanded(true);
  };

  const cancelNewTodo = () => {
    setExpanded(false);
  };

  const submitNewTodo = () => {
    if (newTodoTitle.length <= 0) {
      setExpanded(false);

      return;
    }
    const configuration = {
      method: "post",
      url: "https://todoapptesting.fly.dev/todo/add",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        title: newTodoTitle,
        completed: completed,
        archived: archived,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result);
        setTodos([...todos, result.data]);
        setExpanded(false);
      })
      .catch((error) => {
        error = new Error();
      });
  };

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
        <div className="todolist-add-new-container">
          {expanded ? (
            <div className="todolist-input-container">
              <input
                className="todolist-input"
                placeholder="type todo title..."
                onChange={(e) => setNewTodoTitle(e.target.value)}
              ></input>
              <button
                className="todolist-accept-button"
                onClick={submitNewTodo}
              >
                ✓
              </button>
              <button className="todolist-close-button" onClick={cancelNewTodo}>
                X
              </button>
            </div>
          ) : (
            <button
              className="todolist-new-pill"
              onClick={handleNewTodoButtonClick}
            >
              Add New Todo +
            </button>
          )}
        </div>
      </div>
      {filteredTodos.length > 0 ? (
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
      ) : (
        <p className="todolist-empty-list">
          There's nothing here... Why not create a new todo?
        </p>
      )}
    </div>
  );
};

export default TodoList;
