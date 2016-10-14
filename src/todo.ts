
interface ITodo {
  description: string, 
  done?: boolean,
  dueDate?: Date
}
export class Todo implements ITodo {
  done = false;
  description = null;
  dueDate = null;

  constructor(todo: ITodo);
//   constructor(description: string, done: boolean);
//   constructor(description: string, done: boolean, dueDate: Date);

  constructor(todo: ITodo) {
        // if (typeof todoOrDescription === 'object') {
            // this.description = todoOrDescription.description;
            // this.done = done || false;
            // this.dueDate = dueDate || new Date();
        // } else if (typeof todoOrDescription === 'string' && typeof done === 'boolean') {
            this.description = todo.description;
            this.done = todo.done;
            this.dueDate = todo.dueDate;
        // }
    }
}
