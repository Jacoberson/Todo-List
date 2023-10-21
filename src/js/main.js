import '../scss/styles.scss';
import { showElement, hideElement } from './helpers/visibilityChanger';
import { submitForm, resetForm, isValid } from './helpers/formHandler';
import ProjectList from './classes/ProjectList';
import Project from './classes/Project';
import Todo from './classes/Todo';

// Project
const projectFormContainer = document.getElementById('project-form-container');
const projectForm = document.getElementById('create-project-form');

projectForm.addEventListener('submit', event => {
    submitForm(event);
    const title = document.getElementById('project-title').value;
    const newProject = new Project(title);
    newProject.create();
    resetForm(projectForm);
})

const openProjectForm = document.getElementById('open-project-form');
openProjectForm.addEventListener('click', () => {
    showElement(projectFormContainer);
    hideElement(openProjectForm);
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    if (isValid(projectForm)) {
        hideElement(projectFormContainer);
        showElement(openProjectForm);
    }
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
    const title = todoForm.elements['todo-title'].value;
    const description = todoForm.elements['todo-description'].value;
    const dueDate = todoForm.elements['due-date'].value;
    const priority = todoForm.elements['priority'].value;
    const projectIndex = document.querySelector('.selected-project').getAttribute('data-index');
    const parentProject = ProjectList.getProject(projectIndex)
    const newTodo = new Todo(title, description, dueDate, priority, parentProject);
    newTodo.create();
    resetForm(todoForm);

    // add to project
})

const openTodoForm = document.getElementById('open-todo-form');
openTodoForm.addEventListener('click', () => {
    showElement(todoFormContainer);
    hideElement(openTodoForm);
})

const createTodoBtn = document.getElementById('create-todo-btn');
createTodoBtn.addEventListener('click', () => {
    if (isValid(todoForm)) {
        hideElement(todoFormContainer);
        showElement(openTodoForm);
    }
})

const cancelTodoBtn = document.getElementById('cancel-todo-btn');
cancelTodoBtn.addEventListener('click', () => {
    hideElement(todoFormContainer);
    showElement(openTodoForm);
    resetForm(projectForm);
})

// On Page Load
const onLoad = (function () {
    const defaultProject = new Project('Default');
    defaultProject.create();
})();