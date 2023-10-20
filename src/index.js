import './style.css';
import { showElement, hideElement } from './helpers/visibilityChanger';

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

const openProjectForm = document.getElementById('open-project-form');
openProjectForm.addEventListener('click', () => {
    showElement(formContainer);
    hideElement(openProjectForm);
})

const cancelProjectBtn = document.getElementById('cancel-project-btn');
cancelProjectBtn.addEventListener('click', () => {
    hideElement(formContainer);
    showElement(openProjectForm);
    form.reset();
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    hideElement(formContainer);
    showElement(openProjectForm);
})