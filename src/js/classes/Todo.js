import { renderProjectTodos, changeCompleteHTML } from '../helpers/DOMUpdater';

class Todo {
    constructor(title, description, dueDate, priority, parentProject) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.parentProject = parentProject;
        this.index = this.parentProject.todoList.length + 1;
        this.isComplete = false;
    }

    create() {
        if (this.title && this.description && this.dueDate && this.priority) {
            this.parentProject.addTodo(this);
            renderProjectTodos(this.parentProject);
        }
    }

    changeComplete(newTodoRow) {
        this.isComplete = !this.isComplete;
        changeCompleteHTML(this, newTodoRow);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Todo;