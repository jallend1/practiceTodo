import React from "react";

const Todos = ({ todoList, removeItem, toggleComplete }) => {
  const renderTodos = () => {
    // If we got some todos on the list, render them
    if (todoList.length) {
      return todoList.map((todo) => {
        return (
          <li key={todo.id}>
            <span
              className={todo.isComplete ? "completed" : null}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.content}
            </span>
            <button onClick={() => removeItem(todo.id)}>Delete</button>
          </li>
        );
      });
    }
    // If there aren't any todos, congratulations!
    else {
      return <p>All caught up! Yay!</p>;
    }
  };
  return (
    <>
      <ul>{renderTodos()}</ul>
    </>
  );
};

export default Todos;
