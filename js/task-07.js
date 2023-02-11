// Знаходимо поле для задання розміру (input) та текст розмір якого має змінюватись в span
const fontSizeControlINput = document.querySelector('#font-size-control');
const textFontSize = document.querySelector('#text');
// Вішаємо слухача на подію input
fontSizeControlINput.addEventListener('input', fontSizeChange);
// Створюємо зовнішню функцію для зміни розміру шрифта тексту в span
function fontSizeChange() {
  // задаємо інлайн стиль шрифта значенням положення повзунка поля
  textFontSize.style.fontSize = fontSizeControlINput.value + 'px';
}
