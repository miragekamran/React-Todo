import React from "react";

export default function TodoForm(props) {
  return (
    <form>
      <input name="task" value={props.value} placeholder="Task To Do" />
      <button>Add Todo</button>
      <button>Clear Completed</button>
    </form>
  );
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
