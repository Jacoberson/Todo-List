import ProjectList from "./ProjectList";
import { createProjectHTML } from '../helpers/DOMUpdater';

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = ['test'];
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

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;