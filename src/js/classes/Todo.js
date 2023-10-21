import { createTodoHTML } from '../helpers/DOMUpdater';

class Todo {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    create() {
        if (this.title && this.description && this.dueDate && this.priority) {
            createTodoHTML(this);
        }

    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Todo;