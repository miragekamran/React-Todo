import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
  return (
    <div>
      {/* {props.todo.map(doo => (
        <Todo key={doo.id} toDo={doo} toggleToDo={props.toggleToDo}/>
      ))} */}

      <button className='clear-btn' onClick={props.taskCompleted}>Task Completed</button>
    </div>
  )
}
