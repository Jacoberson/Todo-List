import './style.css';
import { showElement, hideElement } from './helpers/visibilityChanger';
import { submitForm, resetForm } from './helpers/formHandler';

const projectList = document.getElementById('project-list');

const projectForm = document.getElementById('create-project-form');
projectForm.addEventListener('submit', event => {
    submitForm(event);
    const inputText = projectForm.elements['project-input'].value;

    const li = document.createElement('li');
    li.classList.add('project');
    li.textContent = inputText;
    projectList.appendChild(li);
    resetForm(projectForm);
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
    resetForm(projectForm);
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    hideElement(formContainer);
    showElement(openProjectForm);
})