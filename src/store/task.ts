import { makeAutoObservable } from "mobx"

type todo = {
  id: number,
  title: string,
  completed: boolean
}

class Task {
  todos: todo[] = [];
  todosFilter: todo[] = [];
  
  constructor(){
    makeAutoObservable(this)
  }
  
  completedTodos(){
    this.todosFilter = this.todos.filter((t)=>t.completed === true)
  }
  
  addTodo(todo : todo){
    
    todo.title = todo.title.trim()
    if(todo.title.length === 0){
      alert('Пожалуйста, введите текст задачи!')

    }
    else this.todos.push(todo)
  }

  removeTodo(id: number){
    this.todos = this.todos.filter((todo)=>todo.id !== id)
  }
  completeTodo(todo: todo){
    todo.completed ? todo.completed = false : todo.completed = true
    
  }
}

export default new Task()
