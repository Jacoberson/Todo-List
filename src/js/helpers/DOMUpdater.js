const createProjectHTML = (project, projectList) => {
    const _projectList = document.querySelector('#project-list > div');
    const newProjectRow = addElement('li');
    newProjectRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between');
    if (projectList.length === 1) {
        newProjectRow.classList.add('selected-project');
    }
    newProjectRow.setAttribute('data-index', projectList.length);
    newProjectRow.addEventListener('click', () => {
        const currentSelectedProject = document.querySelector('.selected-project');
        currentSelectedProject.classList.remove('selected-project');
        
        newProjectRow.classList.add('selected-project');
    })

    const projectTitle = addElement('h4');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.title;
    newProjectRow.appendChild(projectTitle);

    _projectList.appendChild(newProjectRow);
}

const addElement = elementType => document.createElement(elementType);

export { createProjectHTML }