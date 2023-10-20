import ProjectList from "./ProjectList";

class Project {
    constructor(title) {
        this.title = title;
    }

    create() {
        const _projectList = document.querySelector('#project-list > div');

        const newProjectRow = document.createElement('li');
        newProjectRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between');
        newProjectRow.setAttribute('data-index', ProjectList.length + 1);

        const projectTitle = document.createElement('h4');
        projectTitle.classList.add('project-title');
        projectTitle.textContent = this.title;
        newProjectRow.appendChild(projectTitle);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('type', 'button');
        editBtn.classList.add('edit-project-btn', 'btn', 'btn-outline-warning');
        editBtn.textContent = 'Edit';
        newProjectRow.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.classList.add('delete-project-btn', 'btn', 'btn-outline-danger');
        deleteBtn.textContent = 'Details';
        newProjectRow.appendChild(deleteBtn);

        ProjectList.add(this);
        _projectList.appendChild(newProjectRow);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Project;