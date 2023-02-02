const amountEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const wrapEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function getAmount() {
  const amount = amountEl.value;
  if (amountEl.value > 0) {
    createBoxes(amount);
  }
};

function createBoxes(amount) {
  destroyBoxes();
  
  let boxes = [];
  let side = 30;
  
for (let i = 1; i <= amount; i += 1) {
  const box = document.createElement('div');
  box.style.width = `${side}px`;
  box.style.height = `${side}px`;
  box.style.marginBottom = "10px";
  box.style.backgroundColor = `${getRandomHexColor()}`;
  boxes.push(box);

  side += 10;
  }  
  wrapEl.append(...boxes);
};
  
function destroyBoxes() {
    wrapEl.innerHTML = "";
};


createBtn.addEventListener('click', getAmount);
destroyBtn.addEventListener('click', destroyBoxes);

