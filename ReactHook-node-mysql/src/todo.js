import { useState } from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.hasCompleted ? "line-through" : "none" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button className="btn" onClick={() => completeTodo(index)}>
          <a href="#">Complete</a>
        </button>
        <button className="btn btn-remove" onClick={() => removeTodo(index)}>
          <a href="#">Remove</a>
        </button>
      </div>
    </div>
  );
}

export default Todo;
