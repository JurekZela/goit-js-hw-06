const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('ul');

ingredients.forEach((ingredient) => {
  const li = document.createElement('li');

  li.textContent = ingredient;
  li.classList.add('item');

  ulRef.appendChild(li);
});