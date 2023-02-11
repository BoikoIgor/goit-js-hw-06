// Знаходимо поле для введення (input)
const input = document.querySelector('#validation-input');
// Вішаємо слухача на подію blur
input.addEventListener('blur', isValidInput);
// Створюємо зовнішню ф-ію для перевірки валідності по задачі
function isValidInput() {
  //перевіряємо чи довжина введеного рядка рівна значенню в атрибуті "data-length"=6
  if (input.value.length === Number(input.getAttribute('data-length'))) {
    // якщо рівні - додаємо клас valid і забираємо клас invalid
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    // інакше додаємо invalid забираємо valid
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}
