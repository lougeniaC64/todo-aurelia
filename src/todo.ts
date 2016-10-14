
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

    constructor(todo: ITodo) {
        this.description = todo.description;
        this.done = todo.done;
        this.dueDate = todo.dueDate;
    }
}
