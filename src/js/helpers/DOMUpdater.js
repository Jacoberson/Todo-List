const createProjectHTML = (project, projectList) => {
    const _projectList = document.querySelector('#project-list > div');
    const newProjectRow = addElement('li');
    newProjectRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between');
    newProjectRow.setAttribute('data-index', projectList.length);

    const projectTitle = addElement('h4');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.title;
    newProjectRow.appendChild(projectTitle);

    const editBtn = addElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.classList.add('edit-project-btn', 'btn', 'btn-outline-warning');
    editBtn.textContent = 'Edit';
    newProjectRow.appendChild(editBtn);

    const deleteBtn = addElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add('delete-project-btn', 'btn', 'btn-outline-danger');
    deleteBtn.textContent = 'Details';
    newProjectRow.appendChild(deleteBtn);

    _projectList.appendChild(newProjectRow);
}

const addElement = elementType => document.createElement(elementType);

export { createProjectHTML }