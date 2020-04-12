import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  handleChanges = e => {
    // update state with each keystroke
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.todo);
  };

  // class property to submit form
  submitItem = e => {
    e.preventDefault();

    this.setState({ todo: "" });
    this.props.addTask(e, this.state.todo);
  };

  render() {
    console.log("ListForm Props:", this.props);
    return (
      <form onSubmit={this.submitItem}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
