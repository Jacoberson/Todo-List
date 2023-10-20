import './style.css';

const projectList = document.getElementById('project-list');

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const inputText = form.elements['project-input'].value;

    const li = document.createElement('li');
    li.classList.add('project');
    li.textContent = inputText;
    projectList.appendChild(li);
    form.reset();
})

const formContainer = document.querySelector('.form-container');

const addProjectBtn = document.getElementById('add-project-btn');
addProjectBtn.addEventListener('click', () => {
    formContainer.hidden = false;
    addProjectBtn.hidden = true;
})

const cancelProjectBtn = document.getElementById('cancel-create-project-btn');
cancelProjectBtn.addEventListener('click', () => {
    formContainer.hidden = true;
    addProjectBtn.hidden = false;
    form.reset();
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    formContainer.hidden = true;
    addProjectBtn.hidden = false;
})