class ProjectList {
    static #projects = [];

    static add(project) {
        this.#projects.push(project);
    }

    static getProjects() {
        return this.#projects;
    }
}

export default ProjectList;