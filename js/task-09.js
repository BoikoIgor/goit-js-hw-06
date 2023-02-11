// функція повертає значення випадкового кольору
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// знаходимо і вішаємо слухача на кнопку зміни кольору
const handlerButton = document.querySelector('.change-color');
handlerButton.addEventListener('click', changeBGColor);
// функція для зміни кольору фона елемента body через інлайнстиль
function changeBGColor() {
  // зберігаємо значення випадкового кольору в змінну
  const randomColor = getRandomHexColor();
  // знаходимо елемент body та задаємо йому інлайн значення BG color
  document.querySelector('body').style.backgroundColor = randomColor;
  // знаходимо місце для значення кольору і виводимо його на сторінці
  document.querySelector('.color').textContent = randomColor;
}
