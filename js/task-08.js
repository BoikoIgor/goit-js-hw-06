// знаходимо форму по класу
const form = document.querySelector('.login-form');
// Вішаємо слухача на кнопку Listen for the "submit" event on the form
form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  // Скасовуємо перезавантаження сторінки за замовчуванням
  event.preventDefault();
  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;
  // Задаємо значення введенних в інпут полів email та password через властивість elements
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  // Перевіряємо чи заповнені обидва поля: email та password
  if (!email || !password) {
    // Виводимо повідомлення і виходимо
    alert('Попередження: Поля мають бути заповнені. Email or password must be filled');
    return;
  }
  // Якщо поля заповнено створюємо обєкт з полями і значеннями для email та password
  const formDataObject = { email, password };
  //Виводимо обєкт в консоль
  console.log(formDataObject);
  // очищаємо значення заповнених полів
  form.reset();
}
