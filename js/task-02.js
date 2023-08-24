const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.getElementById('ingredients');

   const makeMenuChef = ingredients.map( ingredient => {

      const  createTitleRef = document.createElement('li');
      createTitleRef.classList.add('item');
      createTitleRef.textContent = ingredient;
      createTitleRef.style.listStyle = 'none';

      return createTitleRef;
    });

  ingredientsListRef.append(...makeMenuChef);