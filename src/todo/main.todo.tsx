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
  const [showTodo, setShowTodo] = useState(todo.todos);
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="todo">
      <div className="todo__header">TODO</div>
      <div className="todo__filters">
        <button
          className={
            activeFilter === "all" ? "todo__filters_active" : undefined
          }
          onClick={() => {
            setActiveFilter("all");
            setShowTodo(todo.todos);
          }}
        >
          все задачи
        </button>
        <button
          className={
            activeFilter === "completed" ? "todo__filters_active" : undefined
          }
          onClick={() => {
            setActiveFilter("completed");
            setShowTodo(todo.todos.filter((t) => t.completed === true));
          }}
        >
          выполненные
        </button>
        <button
          className={
            activeFilter === "active" ? "todo__filters_active" : undefined
          }
          onClick={() => {
            setActiveFilter("active");
            setShowTodo(todo.todos.filter((t) => t.completed === false));
          }}
        >
          активные
        </button>
      </div>
      <div className="todo__createTodo">
        <input
          className="todo__createTodo_input"
          type="text"
          placeholder="Создать новую задачу..."
          onChange={(e: any) => setNewTask(e.target.value)}
        />
        <PlusIcon
          onClick={() => {
            setShowTodo(todo.todos);
            setActiveFilter("all");
            todo.addTodo({
              id: Math.random(),
              title: newTask,
              completed: false,
            });
          }}
          className="todo__createTodo_icon"
        />
      </div>
      <div className="tasks">
        {showTodo.map((t) => (
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
                setShowTodo(todo.todos);
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
