function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlCreateBtnRef = document.querySelector('#controls [data-create]');
const controlDestroyBtnRef = document.querySelector('#controls [data-destroy]');
const controlsNumberRef = document.querySelector('#controls input[type="number"]');
const boxesRef = document.querySelector('#boxes');

controlCreateBtnRef.addEventListener('click', createBoxes);
controlDestroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
let size = 30;

for (let i = 0; i < amount; i += 1) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomHexColor();
  boxesRef.appendChild(box);
  size += 10;
  
};
};

createBoxes(controlsNumberRef.textContent);


function destroyBoxes() {
  boxesRef.remove();
};