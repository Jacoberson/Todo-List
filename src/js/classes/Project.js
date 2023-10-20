class Project {

    static create(form) {
        const _projectList = document.querySelector('#project-list > div');
        const inputText = form.elements['project-title'].value;

        if (inputText !== '') {
            const newProject = document.createElement('li');
            newProject.classList.add('project', 'list-group-item');
            newProject.textContent = inputText;
            _projectList.appendChild(newProject);
        }
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;