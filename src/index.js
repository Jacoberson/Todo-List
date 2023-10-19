import './style.css';

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
})

const formContainer = document.querySelector('.form-container');

const addProjectBtn = document.getElementById('add-project-btn');
addProjectBtn.addEventListener('click', () => {
    formContainer.hidden = false;
})

const cancelProjectBtn = document.getElementById('cancel-create-project-btn');
cancelProjectBtn.addEventListener('click', () => {
    formContainer.hidden = true;
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    formContainer.hidden = true;
})