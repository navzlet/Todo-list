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
      <div className="todo__createTodo">
        <input
          className="todo__createTodo_input"
          type="text"
          placeholder="Создать новую задачу..."
        />
      </div>
      <div className="todo__tasks"></div>
    </div>
  );
}
