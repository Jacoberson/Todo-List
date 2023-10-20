const submitForm = event => {
    return event.preventDefault();
}

const resetForm = form => {
    return form.reset();
}

export { submitForm, resetForm }