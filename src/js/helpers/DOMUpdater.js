const createProjectHTML = (project, projectList) => {
    const _projectList = document.querySelector('#project-list > div');
    const newProjectRow = addElement('li');
    newProjectRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between');
    if (projectList.length === 1) {
        newProjectRow.classList.add('selected-project');
    }
    newProjectRow.setAttribute('data-index', projectList.length);
    newProjectRow.setAttribute('role', 'button');
    newProjectRow.addEventListener('click', () => {
        const currentSelectedProject = document.querySelector('.selected-project');
        currentSelectedProject.classList.remove('selected-project');

        newProjectRow.classList.add('selected-project');
        renderProjectTodos(projectList.find(project => project.index === Number(newProjectRow.getAttribute('data-index'))));
    })

    const projectTitle = addElement('h4');
    projectTitle.classList.add('project-title');
    projectTitle.textContent = project.title;
    newProjectRow.appendChild(projectTitle);

    _projectList.appendChild(newProjectRow);
}

const renderProjectTodos = project => {
    const todoList = document.querySelector('#todo-list > div');
    todoList.innerHTML = '';

    project.todoList.forEach(todo => {
        createTodoHTML(todoList, todo);
    })
}

const createTodoHTML = (todoList, todo) => {
    const newTodoRow = document.createElement('li');
    newTodoRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between')

    const todoTitle = document.createElement('h4');
    todoTitle.textContent = todo.title;
    newTodoRow.appendChild(todoTitle);

    const detailsBtn = document.createElement('button');
    detailsBtn.setAttribute('type', 'button');
    detailsBtn.classList.add('btn', 'btn-outline-primary');
    detailsBtn.textContent = 'Details';
    newTodoRow.appendChild(detailsBtn);

    const todoDueDate = document.createElement('p');
    todoDueDate.textContent = todo.dueDate;
    newTodoRow.appendChild(todoDueDate);

    const editBtn = document.createElement('button');
    editBtn.setAttribute('type', 'button');
    editBtn.classList.add('btn', 'btn-outline-warning');
    editBtn.textContent = 'Edit';
    newTodoRow.appendChild(editBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.classList.add('btn', 'btn-outline-danger');
    deleteBtn.textContent = 'Delete';
    newTodoRow.appendChild(deleteBtn);

    todoList.appendChild(newTodoRow);
}

const addElement = elementType => document.createElement(elementType);

export { createProjectHTML, createTodoHTML, renderProjectTodos }