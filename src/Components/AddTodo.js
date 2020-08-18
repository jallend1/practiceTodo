import React from "react";

const AddTodo = (props) => {
  return (
    <form name="addform" onSubmit={props.addNew}>
      <label htmlFor="newtodo">Add a new item</label>
      <input id="newitem" type="text" placeholder="Add a new todo"></input>
    </form>
  );
};

export default AddTodo;
