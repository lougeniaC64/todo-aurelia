import {Todo} from './todo';
import {config} from './config';

export class App {
  heading = 'Todos';
  todos: Todo[] = [];
  todoDescription = '';
  todoDueDate = null;

  addTodo() {
    if (this.todoDescription) {
      this.todos.push(new Todo(this.todoDescription, false, this.todoDueDate));
      this.todoDescription = '';
    }
  }

  removeTodo(todo) {
    let index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  getTodoInfo(todo) {
    return todo.description + ' (Due date: ' + todo.dueDate + ')';
  }
}
