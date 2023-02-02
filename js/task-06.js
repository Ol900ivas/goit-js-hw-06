// const inputEl = document.querySelector("#validation-input");
// const rigthLength = Number(inputEl.getAttribute('data-length'));

// inputEl.addEventListener('blur', (event) => {
//     if (event.currentTarget.value.length === rigthLength) {
//         inputEl.classList.add('valid');
//         inputEl.classList.remove('invalid');
//     } else {
//         inputEl.classList.add('invalid');
//         inputEl.classList.remove('valid');
//     }
// });

// ============================
const inputEl = document.querySelector("#validation-input");
const rigthLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === rigthLength) {
        changeClasses();
    } else {
        changeClasses();
    }
});

function changeClasses(x, y) {
    if (!inputEl.classList.contains("valid")) {
        inputEl.classList.add("valid");
        inputEl.classList.remove("invalid");
    } 
    elem.classList.replace("valid", "invalid")
        // inputEl.classList.add("invalid");
        // inputEl.classList.remove("valid");
};
