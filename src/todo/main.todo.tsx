import React, { useState } from "react";
import "./todo.scss";
import { PlusIcon } from "../icons/plusIcon.jsx";
import { DeleteIcon } from "../icons/deleteIcon.jsx";
import { CheckEmptyIcon } from "../icons/checkEmptyIcon";
import { CheckFilledIcon } from "../icons/checkFilledIcon";
import { observer } from "mobx-react-lite";

import todo from "../store/task";

export const Todo = observer((): JSX.Element => {
  const [newTask, setNewTask] = useState("");

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
          onChange={(e: any) => setNewTask(e.target.value)}
        />
        <PlusIcon
          onClick={() =>
            todo.addTodo({ id: 4, title: newTask, completed: false })
          }
          className="todo__createTodo_icon"
        />
      </div>
      <div className="tasks">
        {todo.todos.map((t) => (
          <div className="task" key={t.id}>
            <div onClick={() => todo.completeTodo(t)}>
              {t.completed ? (
                <CheckFilledIcon className="task__check" />
              ) : (
                <CheckEmptyIcon className="task__check" />
              )}
            </div>
            <div
              className={t.completed ? "task__text_completed" : "task__text"}
            >
              {t.title}
            </div>
            <div
              className="task__delete"
              onClick={() => {
                todo.removeTodo(t.id);
              }}
            >
              <DeleteIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});
