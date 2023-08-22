const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');


   const makeMenuChef = ingredients.map( ingredient => {

      const  createTitleRef = document.createElement('li');
      createTitleRef.classList.add('item');
      createTitleRef.textContent = ingredient;

      return createTitleRef;
    });

  ingredientsListRef.append(...makeMenuChef);