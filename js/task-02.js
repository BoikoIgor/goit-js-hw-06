const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
// Знаходимо потрібний ul в розмітці:
const markup = document.querySelector('#ingredients');
// 2. Переберемо елементи заданого масиву ingredients:
ingredients.forEach(el => {
  // 2.1 Створить окремий елемент <li>
  const ingredient = document.createElement('li');
  // 2.2 Додасть назву інгредієнта як його текстовий вміст:
  ingredient.textContent = el;
  // 2.3 Додасть елементу клас item:
  ingredient.classList.add('item');
  // 2.4 вставить усі <li> за одну операцію у список ul#ingredients:
  markup.append(ingredient);
});
