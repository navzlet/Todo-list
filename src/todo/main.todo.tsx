import React from "react";
import "./todo.scss";

export function Todo() {
  return (
    <div className="todo">
      <div className="todo__header">TODO</div>
      <div className="todo__filters">
        <button>все задачи</button>
        <button>выполненные</button>
        <button>активные</button>
      </div>
      <div className="todo__createTodo"></div>
    </div>
  );
}
