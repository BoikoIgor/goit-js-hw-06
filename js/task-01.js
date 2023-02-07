// 1.1 Кількість категорій ul#categories:
const categoryItemsRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItemsRef.length}`);

// 1.2  Для кожного li.item (Категорії) вивести Заголовок в <h2> і кількість елементів в категорії:
categoryItemsRef.forEach(item => {
  console.log(`Category: ${item.querySelector('h2').textContent}`);
  const itemElSum = item.querySelectorAll('li');
  console.log(`Elements: ${itemElSum.length}`);
});
