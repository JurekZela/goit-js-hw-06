function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  widgetRef: document.querySelector('.widget'),
  colorRef: document.querySelector('span.color'),
  buttonRef: document.querySelector('button.change-color'),
};

refs.buttonRef.addEventListener('click', changeColor);

function changeColor(){
  const randomColor = getRandomHexColor();

  refs.widgetRef.style.backgroundColor = randomColor;
refs.colorRef.textContent = randomColor;
};

