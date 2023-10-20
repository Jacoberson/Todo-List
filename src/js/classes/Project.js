class Project {

    static create(form) {
        const _projectList = document.querySelector('#project-list > div');
        const inputText = form.elements['project-title'].value;

        if (inputText !== '') {
            const newProject = document.createElement('li');
            newProject.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between');

            const projectTitle = document.createElement('h4');
            projectTitle.classList.add('project-title');
            projectTitle.textContent = inputText
            newProject.appendChild(projectTitle);
            
            const editBtn = document.createElement('button');
            editBtn.setAttribute('type', 'button');
            editBtn.classList.add('edit-project-btn', 'btn', 'btn-outline-warning');
            editBtn.textContent = 'Edit';
            newProject.appendChild(editBtn);
    
            const deleteBtn = document.createElement('button');
            deleteBtn.setAttribute('type', 'button');
            deleteBtn.classList.add('delete-project-btn', 'btn', 'btn-outline-danger');
            deleteBtn.textContent = 'Details';
            newProject.appendChild(deleteBtn);

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