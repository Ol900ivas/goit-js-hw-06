let counterValue = 0;
const spanEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

const decrementFunction = () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
};

const incrementFunction = () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', decrementFunction);
incrementBtn.addEventListener('click', incrementFunction);



