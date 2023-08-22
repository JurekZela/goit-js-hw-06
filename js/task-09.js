function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.body;
const btnRef = document.querySelector('.widget .change-color');

btnRef.addEventListener('click', onChangeColorClick);

function onChangeColorClick(){
const spanColorRef = document.querySelector('.widget .color');

 const randomHexColor = bodyRef.style.backgroundColor = getRandomHexColor();
spanColorRef.textContent = randomHexColor;
};