import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { content: "Do dishes", id: 5 },
        { content: "Hose down feet", id: 10 }
      ]
    };
  }
  addNew = (e) => {
    e.preventDefault();
    const newItem = {};
    newItem.content = e.target.newitem.value;
    newItem.id = Math.random();
    const todoList = [...this.state.todoList, newItem];
    this.setState({ todoList });
    e.target.reset();
  };

  removeItem = (id) => {
    const todoList = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todoList });
  };
  render() {
    return (
      <>
        <header>A Todo List</header>
        <AddTodo addNew={this.addNew} />
        <Todos todoList={this.state.todoList} removeItem={this.removeItem} />
      </>
    );
  }
}

export default App;
