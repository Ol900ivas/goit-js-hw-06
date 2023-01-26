const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');

const changeFontSize = () => {
    let FontSize = fontSizeControlEl.value;
    textEl.style.fontSize = `${FontSize}px`;
};

textEl.style.fontSize = `${fontSizeControlEl.value}px`;
fontSizeControlEl.addEventListener('input', changeFontSize);


