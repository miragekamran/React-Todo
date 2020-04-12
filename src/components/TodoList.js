import React from "react";

import Item from "./Todo";

const TodoList = props => {
  console.log("GroceryList Props: ", props);
  // const sortedList = props.groceries.sort((a, b) => a.purchased - b.purchased);
  return (
    <div className="shopping-list">
      {props.tasks.map(anItem => (
        <Item key={anItem.id} item={anItem} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearPurchased}>
        Completed Task
      </button>
    </div>
  );
};

export default TodoList;
