function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.querySelector('#boxes');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', oninputValueCreatedElement);
destroyButton.addEventListener('click', destroyBoxes);


function createBoxes(amount) {

  let size = 30;

 for (let i = 0; i < amount; i+= 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);

    size += 10;
  }
};

function oninputValueCreatedElement() {
  const inputAmount = document.querySelector('input').value;
  createBoxes(inputAmount);
};


function destroyBoxes() {
  boxesContainer.innerHTML = '';
};