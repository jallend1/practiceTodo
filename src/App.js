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

  componentDidMount() {
    this.populateTodos();
  }

  addNew = (e) => {
    e.preventDefault();
    const newItem = {};
    newItem.content = e.target.newitem.value;
    newItem.isComplete = false;
    newItem.id = Math.random();
    const todoList = [...this.state.todoList, newItem];
    localStorage.setItem("todoList", JSON.stringify(todoList));
    this.setState({ todoList });
    e.target.reset();
  };
  //Checks local storage for existing todo list, and if none found, fills out a sample one
  populateTodos = () => {
    const todoList = JSON.parse(localStorage.getItem("todoList")) || [
      { content: "Sample To-Do #1", isComplete: false, id: 1 },
      { content: "Sample To-Do #2", isComplete: false, id: 2 },
      { content: "Sample To-Do #3", isComplete: false, id: 3 }
    ];
    this.setState({ todoList });
  };

  removeItem = (id) => {
    const todoList = this.state.todoList.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todoList", JSON.stringify(todoList));
    this.setState({ todoList });
  };

  toggleComplete = (id) => {
    const todoList = this.state.todoList;
    const index = this.state.todoList.findIndex((todo) => todo.id === id);
    todoList[index].isComplete = !todoList[index].isComplete;
    this.setState({ todoList });
  };
  render() {
    return (
      <div className="container">
        <header>
          <h1 className="indigo lighten-4 center-align">
            Yet Another Todo List
          </h1>
        </header>
        <main className="container">
          <AddTodo addNew={this.addNew} />
          <Todos
            todoList={this.state.todoList}
            removeItem={this.removeItem}
            toggleComplete={this.toggleComplete}
          />
        </main>
      </div>
    );
  }
}

export default App;
