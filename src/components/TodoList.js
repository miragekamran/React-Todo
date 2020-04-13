// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import { Todo } from './';

const TodoList = props => {
        return(
            <div className='shopping-list'>
                {props.todo.map(thing => (
                    <Todo thing={thing} key={thing.id} toggle={props.toggle} />
                ))}
                <button className='clear-btn' onClick={() => props.completed()}>Clear Completed Tasks</button><button className='clear-btn' onClick={() => props.clearAll()}>Clear All Tasks</button>
            </div>
        )
}

export default TodoList;