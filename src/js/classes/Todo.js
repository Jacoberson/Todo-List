import { createTodoHTML } from '../helpers/DOMUpdater';

class Todo {
    constructor(title, description, dueDate, priority, parentProject) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentProject = parentProject;
    }

    create() {
        if (this.title && this.description && this.dueDate && this.priority) {
            createTodoHTML(this);
            this.parentProject.addTodo(this);
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