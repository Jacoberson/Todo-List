import ProjectList from "./ProjectList";
import { createProjectHTML } from '../helpers/DOMUpdater';

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
        return this.todoList;
    }

    addTodo(todo) {
        return this.todoList.push(todo)
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;