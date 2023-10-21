class ProjectList {
    static projects = [];

    static add(project) {
        this.projects.push(project);
    }

    static getProject(index) {
        return this.projects.find(project => project.index === Number(index));
    }
}

export default ProjectList;