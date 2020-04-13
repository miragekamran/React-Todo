import React from 'react';
import './Todo.css'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitTodo = e => {
        e.preventDefault();

        this.setState({ task: ""});
        this.props.addTask(e, this.state.task);
    }

    render() {
        return(
            <form onSubmit={this.submitTodo}>
                <input type="text" name="task" value={this.state.task} placeholder="task" onChange={this.handleChanges} />
                <button>Add Task</button>
            </form>
        )
    }
}

export default TodoForm;