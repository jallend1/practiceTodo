import React from "react";

const AddTodo = ({ addNew }) => {
  return (
    <form name="addform" onSubmit={addNew}>
      <label htmlFor="newtodo">Add a new item</label>
      <input id="newitem" type="text" placeholder="Add a new todo"></input>
    </form>
  );
};

export default AddTodo;
