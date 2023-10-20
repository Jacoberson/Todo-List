class Todo {

    static create(form) {
        const _todoList = document.querySelector('#todo-list > div');
        const newTodo = {
            title: form.elements['todo-title'].value,
            description: form.elements['todo-description'].value,
            dueDate: form.elements['due-date'].value,
            priority: form.elements['priority'].value,
        }

        const newTodoRow = document.createElement('li');
        newTodoRow.classList.add('list-group-item', 'd-inline-flex', 'justify-content-between')

        const todoTitle = document.createElement('h4');
        todoTitle.textContent = newTodo.title;
        newTodoRow.appendChild(todoTitle);

        const detailsBtn = document.createElement('button');
        detailsBtn.setAttribute('type', 'button');
        detailsBtn.classList.add('btn', 'btn-outline-primary');
        detailsBtn.textContent = 'Details';
        newTodoRow.appendChild(detailsBtn);

        const todoDueDate = document.createElement('p');
        todoDueDate.textContent = newTodo.dueDate;
        newTodoRow.appendChild(todoDueDate);

        const editBtn = document.createElement('button');
        editBtn.setAttribute('type', 'button');
        editBtn.classList.add('btn', 'btn-outline-warning');
        editBtn.textContent = 'Edit';
        newTodoRow.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.setAttribute('type', 'button');
        deleteBtn.classList.add('btn', 'btn-outline-danger');
        deleteBtn.textContent = 'Details';
        newTodoRow.appendChild(deleteBtn);

        _todoList.appendChild(newTodoRow);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Todo;