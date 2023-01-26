// 1. Напиши скрипт створення і очищення колекції елементів. 
// Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// 2. Створи функцію createBoxes(amount), яка приймає один параметр - число.
//  Функція створює стільки < div >, скільки вказано в amount
//   і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.
//  Використовуй готову функцію getRandomHexColor для отримання кольору.


//  3. Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.

const amount = document.querySelector('input').value;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const wrapEl = document.querySelector('#boxes');



console.log(amount);
console.log(createBtn);
console.log(destroyBtn);
console.log(wrapEl);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {

  let side = 30;

  // for (let i = 0, i <= amount, i += 1) {
  //   const box = document.createElement('div');
  // box.style.width = `${side}px`;
  // box.style.height = `${side}px`;
  // box.style.marginBottom = "10px";
  // box.style.backgroundColor = "blue";
  // wrapEl.append(box);

  // side += 10;
  // };
  
};
  
function destroyBoxes() {
    wrapEl.innerHTML = "";
};


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

