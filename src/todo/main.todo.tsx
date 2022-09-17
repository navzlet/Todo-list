import React from "react";
import "./todo.scss";
import { PlusIcon } from "../icons/plusIcon.jsx";
import { DeleteIcon } from "../icons/deleteIcon.jsx";
import { CheckEmptyIcon } from "../icons/checkEmptyIcon";
import { CheckFilledIcon } from "../icons/checkFilledIcon";

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
        <PlusIcon className="todo__createTodo_icon" />
      </div>
      <div className="tasks">
        <div className="task">
          <CheckEmptyIcon className="task__check" />
          <div className="task__text">Вынести мусор</div>
          <div className="task__delete">
            <DeleteIcon />
          </div>
        </div>
        {/* another task */}
        <div className="task">
          <CheckFilledIcon className="task__check" />
          <div className="task__text_completed">покакать</div>
          <div className="task__delete">
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
