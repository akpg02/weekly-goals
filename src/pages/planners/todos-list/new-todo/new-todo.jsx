import React from "react";

import "./new-todo.css";

function NewTodo({ addToList, newItem, submit, edit = false }) {
  return (
    <div className="goal-item new-goal">
      <input value={newItem} onChange={addToList} type="text"></input>
      {edit ? (
        <button onClick={() => submit(newItem)} className="btn">
          Update
        </button>
      ) : (
        <button onClick={() => submit(newItem)} className="btn">
          Add
        </button>
      )}
    </div>
  );
}

export default NewTodo;
