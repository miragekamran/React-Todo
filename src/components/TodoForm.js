import React from "react";

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: "",
    };
  }

  handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitTodo = (event) => {
    event.preventDefault();

    this.setState({ toDo: "" });
    this.props.addItem(event, this.state.toDo);
  };

  render() {
    return (
      <div>
        {/* <form onSubmit={this.submitTodo}> */}
        <form>
          <input
            name="task"
            value={this.state.toDo}
            onChange={this.handleChanges}
            placeholder="What to do?"
          />
          <button>To Do</button>
          
        </form>
      </div>
    );
  }
}

// <form>
//     <input
//         onChange={props.handleTodoChange}
//         type="text"
//         name="todo"
//         value={props.value}
//         placeholder="...todo"
//     />
//     <button onClick={props.handleAddTodo}>Add Todo</button>
//     <button onClick={props.handleClearTodos}>Clear Completed</button>
// </form>
