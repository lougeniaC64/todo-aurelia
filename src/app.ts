import {Todo} from './todo';

export class App {
  heading = 'Todos';
  todos: Todo[] = [];
  todoDescription = '';
  todoDueDate = null;
  todoDone = false;

  addTodo() {
    if (this.todoDescription) {
      let todo = 
        new Todo({description: this.todoDescription, done: this.todoDone, dueDate: this.todoDueDate});
      this.todos.push(todo);
    }
    this.reset();
  }

  reset() {
    this.todoDescription = '';
    this.todoDueDate = null;
    this.todoDone = false;
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
