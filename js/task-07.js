// Знаходимо поле для задання розміру (input) та текст розмір якого має змінюватись в span
const fontSizeControlInput = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');

// Задаємо початковий розмір
textFontSize.style.fontSize = fontSizeControlInput.value + 'px';

// Вішаємо слухача на подію input
fontSizeControlInput.addEventListener('input', fontSizeChange);
// Створюємо зовнішню функцію для зміни розміру шрифта тексту в span
function fontSizeChange() {
  // задаємо інлайн стиль шрифта значенням положення повзунка поля
  textFontSize.style.fontSize = fontSizeControlInput.value + 'px';
}
