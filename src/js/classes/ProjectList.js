class ProjectList {
    #projects = [];

    add(project) {
        this.#projects.push(project);
    }

    getProjects() {
        return this.#projects;
    }
}

export default ProjectList;