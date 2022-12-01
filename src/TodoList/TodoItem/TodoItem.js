import React from "react";
import "./TodoItem.css";

const TodoItem = (props) => {
  return (
    <div className="todoitem-container">
      <input type="checkbox" value={props.completed}></input>
      <div className="todoitem-title">{props.title}</div>
    </div>
  );
};

export default TodoItem;
