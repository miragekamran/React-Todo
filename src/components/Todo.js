import React from 'react';
import './Todo.css'

const Todo = props => {
    const completed = {
        textDecoration: 'line-through'
    }

    const incomplete = {
        textDecoration: 'none'
    }

    return(
        <div>
            <h2 style={props.thing.completed ? completed : incomplete } onClick={() => props.toggle(props.thing.id)} >{props.thing.task}</h2>
        </div>
    )
}

export default Todo;
