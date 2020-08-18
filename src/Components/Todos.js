import React from "react";

const Todos = (props) => {
  const renderTodos = () => {
    return props.todoList.map((todo) => {
      return <li key={todo.key}>{todo.todo}</li>;
    });
  };
  return (
    <>
      <ul>{renderTodos()}</ul>
    </>
  );
};

export default Todos;
