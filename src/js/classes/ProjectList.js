class ProjectList {
    #projects = ['default'];

    add(project) {
        this.#projects.push(project);
    }

    getProjects() {
        return this.#projects;
    }
}

export default ProjectList;