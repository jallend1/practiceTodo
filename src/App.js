import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: []
    };
  }
  addNew = (e) => {
    e.preventDefault();
    const newItem = {};
    newItem.todo = e.target.newitem.value;
    newItem.key = Math.random();

    // e.target.newitem.value, {Math.random()};
    const todoList = [...this.state.todoList, newItem];
    this.setState({ todoList });
    e.target.reset();
  };
  render() {
    return (
      <>
        <header>A Todo List</header>
        <AddTodo addNew={this.addNew} />
        <Todos todoList={this.state.todoList} />
      </>
    );
  }
}

export default App;
