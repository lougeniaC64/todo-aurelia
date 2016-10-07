
interface ITodo {
  done: boolean,
  description: string
}
export class Todo implements ITodo {
  done = false;
  description = null;

  constructor(todo: ITodo);
  constructor(description: string, done: boolean);

  constructor(todoOrDescription: string | ITodo, done?: boolean) {
        if (typeof todoOrDescription === 'object') {
            this.description = todoOrDescription.description;
            this.done = done || false;
        } else if (typeof todoOrDescription === 'string' && typeof done === 'boolean') {
            this.description = todoOrDescription;
            this.done = done;
        }
    }
}
