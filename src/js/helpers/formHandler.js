const submitForm = event => {
    return event.preventDefault();
}

const resetForm = form => {
    return form.reset();
}

const isValid = form => {
    return form.checkValidity();
}

export { submitForm, resetForm, isValid }