const fontSizeControlEl = document.getElementById('font-size-control');
const textEl = document.querySelector('#text');

const changeFontSize = () => {
    let FontSize = fontSizeControlEl.value;
    textEl.style.fontSize = `${FontSize}px`;
};

fontSizeControlEl.addEventListener('input', changeFontSize);


