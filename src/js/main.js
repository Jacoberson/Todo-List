import '../scss/styles.scss';
import * as bootstrap from 'bootstrap'
import { showElement, hideElement } from '../helpers/visibilityChanger';
import { submitForm, resetForm } from '../helpers/formHandler';
import Project from '../classes/Project';


// Project
const projectFormContainer = document.getElementById('project-form-container');

const projectForm = document.getElementById('create-project-form');
projectForm.addEventListener('submit', event => {
    submitForm(event);
    Project.create(projectForm);
    resetForm(projectForm);
})

const openProjectForm = document.getElementById('open-project-form');
openProjectForm.addEventListener('click', () => {
    showElement(projectFormContainer);
    hideElement(openProjectForm);
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    hideElement(projectFormContainer);
    showElement(openProjectForm);
})

const cancelProjectBtn = document.getElementById('cancel-project-btn');
cancelProjectBtn.addEventListener('click', () => {
    hideElement(projectFormContainer);
    showElement(openProjectForm);
    resetForm(projectForm);
})

// Todo
const todoFormContainer = document.getElementById('todo-form-container');

const todoForm = document.getElementById('create-todo-form');
todoForm.addEventListener('submit', event => {
    submitForm(event);
    console.log('todo submitted');
})

const openTodoForm = document.getElementById('open-todo-form');
openTodoForm.addEventListener('click', () => {
    showElement(todoFormContainer);
    hideElement(openTodoForm);
})

const createTodoBtn = document.getElementById('create-todo-btn');
createTodoBtn.addEventListener('click', () => {
    hideElement(todoFormContainer);
    showElement(openTodoForm);
})

const cancelTodoBtn = document.getElementById('cancel-todo-btn');
cancelTodoBtn.addEventListener('click', () => {
    hideElement(todoFormContainer);
    showElement(openTodoForm);
    resetForm(projectForm);
})