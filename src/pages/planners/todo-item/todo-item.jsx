import React from "react";
import "./todo-item.css";

function TodoItem({ todo, completedTodo, removeTodo, completed, editTodo }) {
  return (
    <div className="todo-item">
      <label
        htmlFor={todo.todo}
        className={`todo-desc ${completed ? "completed" : ""} `}
      >
        {todo.todo}
      </label>
      <div className="options">
        <input
          type="checkbox"
          name="todo_dec"
          value={todo.todo}
          onChange={() => completedTodo(todo.id)}
        />
        <span
          className="material-symbols-rounded edit"
          onClick={() => editTodo(todo)}
        >
          edit
        </span>
        <span
          className="material-symbols-rounded remove"
          onClick={() => removeTodo(todo)}
        >
          delete
        </span>
      </div>
    </div>
  );
}

export default TodoItem;
