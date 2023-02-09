// Створюємо змінну для лічильника та ініціалізуємо значенням 0
let counterValue = 0;
// Знаходимо кнопки та створюємо змінні для слухачів
const valueVisual = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
// При натисканні кнопки "-1" змінюємо значення лічильника на -1
decrementBtn.addEventListener('click', function () {
  counterValue -= 1;
  valueVisual.textContent = counterValue;
});
// При натисканні кнопки "+1" змінюємо значення лічильника на +1
incrementBtn.addEventListener('click', function () {
  counterValue += 1;
  valueVisual.textContent = counterValue;
});
