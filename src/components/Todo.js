import React from "react";

export default function Todo(props) {
  return (
    <div
      className={`toDo${props.toDo.done ? " task completed" : ""}`}
      onClick={() => props.toggleToDo(props.toDo.id)}
    >
        <p>{props.toDo.name}</p>
    </div>
  );
}

// export default Todo;
// <div
//   style={props.todo.completed ? { textDecoration: 'line-through' } : null}
//   onClick={() => props.handleToggleComplete(props.todo.id)}
// >
//   {props.todo.task}
// </div>
