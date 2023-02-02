const inputEl = document.querySelector("#validation-input");
const rigthLength = Number(inputEl.getAttribute('data-length'));

inputEl.addEventListener('blur', (event) => {
    if (event.currentTarget.value.length === rigthLength) {
        changeClasses('invalid', 'valid');
    } else {
        changeClasses('valid', 'invalid');
    }
});

function changeClasses(wrongClass, rightClass) {
    inputEl.classList.add(rightClass);
    inputEl.classList.remove(wrongClass);
}; 
    
// =========================== Previous code =========================

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

    
