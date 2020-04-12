import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import activityList from "./components/Data";

// class App extends Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: activityList,

    };
  }

  addItem = (e, task) => {
    console.log("First Groceries: ", this.state.todo);
    e.preventDefault();

    const newTask = {
      name: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTask]
    });
    // console.log("Another task: ", this.state.todo);
  };

  // Class methods to update state
  toggleItem = taskId => {
    // console.log(itemId);

    this.setState({
      todo: this.state.todo.map(theTask => {
        // for bananas
        // checks itemId against the id of bananas obj
        if (taskId === theTask.id) {
          // if they match, update the purchased boolean on that item
          return {
            ...theTask,
            completed: !theTask.completed
          };
          // this return generates the following obj:
          // { id: 123, name: "Bananas", purchased: true}
        }

        // if they don't match, just return the item
        return theTask;
      })
    });
  };

  taskCompleted = e => {
    e.preventDefault();

    this.setState({
      todo: this.state.todo.filter(item => !item.todo)
    });
  };

  render() {
    return (
      <div>
        {/* <TodoForm/>
        <TodoList/> */}
        <TodoForm
          value={this.state.todo}
        />
        <div>
          {activityList.map((doo) => (
            <TodoList todo={doo} />
          ))}
        </div>
      </div>
    );
  }
}

////////////

// addTodo = e => {
//   e.preventDefault();
//   const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
//   this.setState({
//     todos: [...this.state.todos, newTodo],
//     todo: ''
//   });
// };

// changeTodo = e => this.setState({ [e.target.name]: e.target.value });

// toggleTodoComplete = id => {
//   let todos = this.state.todos.slice();
//   todos = todos.map(todo => {
//     if (todo.id === id) {
//       todo.completed = !todo.completed;
//       return todo;
//     } else {
//       return todo;
//     }
//   });
//   this.setState({ todos });
// };

// clearCompletedTodos = e => {
//   e.preventDefault();
//   let todos = this.state.todos.filter(todo => !todo.completed);
//   this.setState({ todos });
// };

// render() {
//   return (
//     <div>
//       <TodoList
//         handleToggleComplete={this.toggleTodoComplete}
//         todos={this.state.todos}
//       />
//       <TodoForm
//         value={this.state.todo}
//         handleTodoChange={this.changeTodo}
//         handleAddTodo={this.addTodo}
//         handleClearTodos={this.clearCompletedTodos}
//       />
//     </div>
//   );
// }
// }

// export default App;
/////////////
