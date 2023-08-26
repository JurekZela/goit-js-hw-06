function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesRef = document.querySelector('#boxes');
const btnCreateRef = document.querySelector('[data-create]');
const btnDestroyRef = document.querySelector('[data-destroy]');

btnDestroyRef.addEventListener('click', onDestroyAmountBoxesClick);
btnCreateRef.addEventListener('click', onCreateBoxesAmountClick);

function onCreateBoxes(amount) {
  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i+= 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);

    size += 10;
  };

  boxesRef.append(...elements);
};

function onCreateBoxesAmountClick () {
  const inputAmountRef = document.querySelector('#controls input').value;
  onCreateBoxes(inputAmountRef);
 }

function onDestroyAmountBoxesClick() {
  boxesRef.innerHTML = '';
};