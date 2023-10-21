import { createTodoHTML, renderProjectTodos } from '../helpers/DOMUpdater';

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
            this.parentProject.addTodo(this);
            renderProjectTodos(this.parentProject);
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