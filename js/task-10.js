function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Знаходимо і добавляємо слухача на кнопку для створення коробок
const createBtn = document.querySelector('[data-create]');
createBtn.addEventListener('click', function () {
  // анонімна функція знаходить введене значення
  const inValueInput = document.querySelector('input[type="number"]');
  // і викликає функцію для створення відповідної к-сті div зі збільшенням розміру згідно умові
  createBoxes(inValueInput.value);
});
// знаходимо місце для додавання нових коробок div
const boxesContainer = document.querySelector('#boxes');

function createBoxes(boxSum) {
  // Задаємо розмір для першої коробки
  let boxWidth = 30;
  let boxHeight = 30;

  // Запускаємо цикл для кожної нової коробки
  for (let i = 0; i < boxSum; i++) {
    // створюємо змінну і розмітку для наступної коробки
    const box = document.createElement('div');

    // Задаємо розмір коробки
    box.style.width = `${boxWidth}px`;
    box.style.height = `${boxHeight}px`;

    // Задаємо коробці випадковий колір з функції getRandomHexColor
    box.style.backgroundColor = getRandomHexColor();

    // збільшуємо розмір для наступної коробки по циклу
    boxWidth += 10;
    boxHeight += 10;

    // Додаємо в розмітку створену коробку
    boxesContainer.append(box);
  }
}
// знаходимо і вішаємо слухача на кнопку для прибирання всіх коробок
const destroyButton = document.querySelector('[data-destroy]');
destroyButton.addEventListener('click', destroyBoxes);
// функція очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи
function destroyBoxes() {
  // очищаємо вміст обгортки коробок (переписуємо на пустий рядок)
  boxesContainer.innerHTML = '';
}
