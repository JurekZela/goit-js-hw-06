const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

  ingredients.forEach(ingredient => {

    const  createTitleRef = document.createElement('li');
    createTitleRef.classList.add('item');
    createTitleRef.textContent = ingredient;

    ingredientsListRef.append(titleRef);
  });