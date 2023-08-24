function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const inputNumberRef = document.querySelector('#controls input');
const controlsCreateBtnRef = document.querySelector('#controls [data-create]');
const boxesRef = document.getElementById('boxes');

controlsCreateBtnRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const size = 30;

for (let i = 0; i < amount; i += 1) {
    const createBoxes = document.createElement('div');
    boxesRef.append(createBoxes);

  };
};

console.log(createBoxes(inputNumberRef.textContent));