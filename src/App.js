import React from "react";
import task from './components/Data';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

export default class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      // this is the same as tasks: tasks
      tasks: task,
    };
  }

  addTask = (e, item) => {
    console.log("First tasks: ", this.state.tasks);
    e.preventDefault();

    const newTask = {
      name: item,
      id: Date.now(),
      purchased: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
    console.log("Second tasks: ", this.state.tasks);
  };

  // Class methods to update state
  toggleItem = taskId => {
    console.log(taskId);

    this.setState({
      tasks: this.state.tasks.map(item => {
        // for bananas
        // checks taskId against the id of bananas obj
        if (taskId === item.id) {
          // if they match, update the purchased boolean on that item
          return {
            ...item,
            purchased: !item.purchased
          };
          // this return generates the following obj:
          // { id: 123, name: "Bananas", purchased: true}
        }

        // if they don't match, just return the item
        return item;
      })
    });
  };

  clearPurchased = e => {
    e.preventDefault();

    this.setState({
      tasks: this.state.tasks.filter(item => !item.purchased)
    });
  };

  render() {
    // rendering is what gets put on the screen
    // the class App shows ListForm and GroceryList on the screen
    return (
      <div className="App">
        <div className="header">
          <h1>My Tasks</h1>
          <TodoForm addTask={this.addTask} />
        </div>
        <TodoList
          tasks={this.state.tasks}
          toggleItem={this.toggleItem}
          clearPurchased={this.clearPurchased}
        />
      </div>
    );
  }
}