class Todo {

    static create(form) {
        const _todoList = document.querySelector('#todo-list > div');
        const newTodo = {
            title: form.elements['todo-title'].value,
            description: form.elements['todo-description'].value,
            dueDate: form.elements['due-date'].value,
            priority: form.elements['priority'].value,
        }

        console.log('todo title: ' + newTodo.title);
        console.log('todo description: ' + newTodo.description);
        console.log('todo due date: ' + newTodo.dueDate);
        console.log('todo priority: ' + newTodo.priority);
    }

    static edit() {
        // todo
    }

    static delete() {
        // todo
    }
}

export default Todo;