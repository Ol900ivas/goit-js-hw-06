const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget.elements);
    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    const formData = {
        mail,
        password,
    };
    if (mail === '' || password === '') {
        alert('Всі поля повинні бути заповнені!');
    } else {
        console.log(formData);
        formEl.reset();
    };
};

