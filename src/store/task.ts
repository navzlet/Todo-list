import { makeAutoObservable } from "mobx"

type todo = {
  id: number,
  title: string,
  completed: boolean
}

class Task {
  todos: todo[] = [{id: 1, title: 'Сходить в магазин', completed: true },
  {id: 2, title: 'Помыть посуду', completed: false }]
  constructor(){
    makeAutoObservable(this)
  }

  addTodo(todo : todo){
this.todos.push(todo)
  }

  removeTodo(id: number){
    this.todos = this.todos.filter((todo)=>todo.id !== id)
  }
  completeTodo(todo: todo){
    todo.completed ? todo.completed = false : todo.completed = true
    
  }
}

export default new Task()
