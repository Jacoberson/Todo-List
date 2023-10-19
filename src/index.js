import './style.css';
import Form from './components/Form';

const projectList = document.getElementById('project-list');

const form = document.querySelector('form');
form.addEventListener('submit', e => {
    Form.submitForm(form, e, projectList);
})

const formContainer = document.querySelector('.form-container');

const addProjectBtn = document.getElementById('open-project-form');
addProjectBtn.addEventListener('click', () => {
    Form.showForm(formContainer, addProjectBtn);
})

const cancelProjectBtn = document.getElementById('cancel-create-project-btn');
cancelProjectBtn.addEventListener('click', () => {
    Form.hideForm(formContainer, addProjectBtn);
    Form.resetForm(form);
})

const createProjectBtn = document.getElementById('create-project-btn');
createProjectBtn.addEventListener('click', () => {
    Form.hideForm(formContainer, addProjectBtn);
})