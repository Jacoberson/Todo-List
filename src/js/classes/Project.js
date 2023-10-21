import ProjectList from "./ProjectList";
import { createProjectHTML, renderProjectTodos } from '../helpers/DOMUpdater';

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
        this.index = ProjectList.projects.length + 1;
    }

    create() {
        if (this.title) {
            ProjectList.add(this);
            createProjectHTML(this, ProjectList.projects);
        }
    }

    displayTodos() {
        return renderProjectTodos(this);
    }

    addTodo(todo) {
        return this.todoList.push(todo)
    }

    removeTodo(removedTodo) {
        this.todoList.splice(this.todoList.findIndex(todo => todo.index == removedTodo.index - 1), 1);
        this.displayTodos();
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;