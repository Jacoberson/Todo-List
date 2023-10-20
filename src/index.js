import './style.css';
import { showElement, hideElement } from './helpers/visibilityChanger';
import { submitForm, resetForm } from './helpers/formHandler';
import Project from './classes/Project';

const formContainer = document.querySelector('.form-container');

// Project
const projectForm = document.getElementById('create-project-form');
projectForm.addEventListener('submit', event => {
    submitForm(event);
    Project.create(projectForm);
    resetForm(projectForm);
})

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