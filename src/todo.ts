
interface ITodo {
  done: boolean,
  description: string
}
export class Todo implements ITodo {
  done = false;
  description = null;
  dueDate = null;

  constructor(todo: ITodo);
  constructor(description: string, done: boolean);
  constructor(description: string, done: boolean, dueDate: Date);

  constructor(todoOrDescription: string | ITodo, done?: boolean, dueDate?: Date) {
        if (typeof todoOrDescription === 'object') {
            this.description = todoOrDescription.description;
            this.done = done || false;
            this.dueDate = dueDate || new Date();
        } else if (typeof todoOrDescription === 'string' && typeof done === 'boolean') {
            this.description = todoOrDescription;
            this.done = done;
            this.dueDate = dueDate;
        }
    }
}
