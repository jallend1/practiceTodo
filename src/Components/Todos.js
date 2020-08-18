import React from "react";

const Todos = (props) => {
  const renderTodos = () => {
    return props.todoList.map((todo) => {
      return (
      <li key={todo.key}>
      <input type="checkbox" id={todo.key} />
      {todo.todo}
      <button onClick={props.removeItem} value={todo.key}>Delete</button>
      </li>
      );
    });
  };
  return (
    <>
      <ul>{renderTodos()}</ul>
    </>
  );
};

export default Todos;
