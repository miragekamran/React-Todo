// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { Todo } from './';

const TodoList = props => {
        return(
            <div>
                {props.todo.map(thing => (
                    <Todo thing={thing} key={thing.id} toggle={props.toggle} />
                ))}
                <button onClick={() => props.completed()}>Clear Completed</button><button onClick={() => props.clearAll()}>Clear All</button>
            </div>
        )
}

export default TodoList;