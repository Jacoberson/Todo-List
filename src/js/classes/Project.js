import ProjectList from "./ProjectList";
import { createProjectHTML } from '../helpers/DOMUpdater';

class Project {
    constructor(title) {
        this.title = title;
    }

    create() {
        ProjectList.add(this);
        createProjectHTML(this, ProjectList.projects);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;