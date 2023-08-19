const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const titleRef = document.createElement('li');

titleRef.classList.add('item');
titleRef.textContent = ingredient;

ingredientsRef.append(titleRef);
};

console.log(ingredientsRef);