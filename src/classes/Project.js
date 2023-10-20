class Project {
    
    static create(form) {
        const _projectList = document.getElementById('project-list');
        const inputText = form.elements['project-input'].value;

        const newProject = document.createElement('li');
        newProject.classList.add('project');
        newProject.textContent = inputText;
        _projectList.appendChild(newProject);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;