import React from "react";

function TodoList(props) {
  return (
    <div>
      <p>
        <strong>Task:</strong> {props.todo.task}
      </p>
      <p>
        <strong>ID:</strong> {props.todo.id}
      </p>
      <p>
        <strong>Completed Task:</strong> {props.todo.completed}
      </p>
    </div>
  );
}

export default TodoList;

// {props.todos.map(todo => (
//   <Todo
//     handleToggleComplete={props.handleToggleComplete}
//     key={todo.id}
//     todo={todo}
//   />
// ))}
