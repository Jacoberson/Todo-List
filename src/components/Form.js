class Form {
    static showForm(formContainer, openButton) {
        formContainer.hidden = false;
        openButton.hidden = true;
    }

    static hideForm(formContainer, closeButton) {
        formContainer.hidden = true;
        closeButton.hidden = false;
    }

    static resetForm(form) {
        form.reset();
    }

    // Split out into separate forms
    // depending on component added
    static submitForm(form, formEvent, componentToAdd) {
        formEvent.preventDefault();
        const inputText = form.elements['project-input'].value;

        const li = document.createElement('li');
        li.classList.add('project');
        li.textContent = inputText;
        componentToAdd.appendChild(li);

        this.resetForm(form);
    }
}

export default Form;