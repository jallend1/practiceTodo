import React from "react";

const Todos = ({ todoList, removeItem, toggleComplete }) => {
  const renderTodos = () => {
    // If we got some todos on the list, render them
    if (todoList.length) {
      return todoList.map((todo) => {
        return (
          <li key={todo.id} className="collection-item todo">
            <div
              className={todo.isComplete ? "completed" : null}
              onClick={() => toggleComplete(todo.id)}
            >
              {todo.content}
            </div>
            <div className="secondary-content">
              <button className="btn-floating waves-light red">
                <i
                  onClick={() => removeItem(todo.id)}
                  className="material-icons"
                >
                  delete_forever
                </i>
              </button>
            </div>
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
      <ul className="collection">{renderTodos()}</ul>
    </>
  );
};

export default Todos;
