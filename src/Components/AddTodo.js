import React from "react";

const AddTodo = ({ addNew }) => {
  return (
    <form name="addform" onSubmit={addNew}>
      <div className="input-field">
        <i className="material-icons prefix">add_circle_outline</i>
        <input id="newitem" type="text"></input>
        <label htmlFor="newitem" className="active">
          Add New Item
        </label>
      </div>
    </form>
  );
};

export default AddTodo;
