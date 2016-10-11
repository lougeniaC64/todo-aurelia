import {Todo} from './todo';
import {config} from './config';

export class App {
  heading = 'Todos';
  todos: Todo[] = [];
  todoDescription = '';
  todoDueDate = null;
  todoDone = false;

  addTodo() {
    if (this.todoDescription) {
      var todo = new Todo(this.todoDescription, this.todoDone, this.todoDueDate);
      this.todos.push(todo);
    }
    this.reset();
  }

  reset() {
    this.todoDescription = '';
    this.todoDueDate = null;
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  getTodoInfo(todo) {
    if (todo.dueDate) {
      return todo.description + ' (Due date: ' + todo.dueDate + ')';
    }
    return todo.description;
  }
}
