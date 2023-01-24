function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const onChangeColor = () => {
  let backgroundColor = getRandomHexColor();
  bodyEl.style.backgroundColor = backgroundColor;
  text.textContent = backgroundColor;
}

const bodyEl = document.querySelector('body');
const text = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onChangeColor);

