import React from "react";
import NewTodo from "../new-todo/new-todo";
import TodoItem from "../todo-item/todo-item";

import "./todos.css";

function Todos({
  todoList,
  editItem,
  selectedItem,
  todo,
  addtoTodoList,
  submitTodo,
  removeTodo,
  completedTodo,
  editTodo,
  showHiddenTodo,
  addTodo,
}) {
  return (
    <div className="todo-list-group">
      <ul>
        {todoList &&
          todoList.map((t) => {
            if (editItem && selectedItem.id === t.id) {
              return (
                <li key={t.id}>
                  <NewTodo
                    newItem={todo}
                    edit={editItem}
                    addToList={addtoTodoList}
                    submit={() => submitTodo(selectedItem.id)}
                  />
                </li>
              );
            } else {
              return (
                <li key={t.id}>
                  <TodoItem
                    key={t.id}
                    todo={t}
                    removeTodo={removeTodo}
                    completedTodo={() => completedTodo(t.id)}
                    completed={t.completed}
                    editTodo={editTodo}
                  />
                </li>
              );
            }
          })}
        {showHiddenTodo && (
          <li>
            <NewTodo
              addToList={addTodo}
              newItem={todo}
              submit={submitTodo}
              editItem={editItem}
            />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Todos;
