import React from 'react';
import { Data } from './data.js';
import { TodoList, TodoForm } from './components';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: Data()
    }
  }

  addTask = (e, task) => {
    console.log(this.state.todo);
    e.preventDefault();

    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      todo: [...this.state.todo, newTask]
    });
  }

  toggleTask = taskId => {
    this.setState({
      todo: this.state.todo.map(task => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed
          }
        }

        return task;
      })
    });
  }

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(task => task.completed === false)
    })
  }

  clearAll = () => {
    this.setState({
      todo: []
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        <br />
        <TodoList todo={this.state.todo} toggle={this.toggleTask} completed={this.clearCompleted} clearAll={this.clearAll} />
      </div>
    );
  }
}

export default App;
