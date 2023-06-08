const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const potatoesRef = document.createElement('li');
potatoesRef.textContent = 'Potatoes';
potatoesRef.classList.add('item');

const mushroomsRef = document.createElement('li');
mushroomsRef.textContent = 'Mushrooms';
mushroomsRef.classList.add('item');

const garlicRef = document.createElement('li');
garlicRef.textContent = 'Garlic';
garlicRef.classList.add('item');

const tomatosRef = document.createElement('li');
tomatosRef.textContent = 'Tomatos';
tomatosRef.classList.add('item');

const herbsRef = document.createElement('li');
herbsRef.textContent = 'Herbs';
herbsRef.classList.add('item');

const condimentsRef = document.createElement('li');
condimentsRef.textContent = 'Condiments';
condimentsRef.classList.add('item');


const ulRef = document.querySelector('#ingredients');
ulRef.append(potatoesRef, mushroomsRef, garlicRef, tomatosRef, herbsRef, condimentsRef);
console.log(ulRef);